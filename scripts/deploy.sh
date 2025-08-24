#!/bin/bash

# Brainrot News 自动化部署脚本
# 支持 Dokploy, Docker, 和传统部署方式

set -e  # 遇到错误立即退出

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 默认配置
DEPLOYMENT_TYPE="dokploy"
PROJECT_NAME="brainout-news"
DOCKER_IMAGE_NAME="brainrot-news"
HEALTH_CHECK_URL="http://localhost:8558/api/health"

# 函数：打印带颜色的消息
print_message() {
    local color=$1
    local message=$2
    echo -e "${color}[$(date '+%Y-%m-%d %H:%M:%S')] ${message}${NC}"
}

print_success() {
    print_message $GREEN "✅ $1"
}

print_error() {
    print_message $RED "❌ $1"
}

print_warning() {
    print_message $YELLOW "⚠️  $1"
}

print_info() {
    print_message $BLUE "ℹ️  $1"
}

# 函数：检查依赖
check_dependencies() {
    print_info "检查系统依赖..."
    
    # 检查 Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js 未安装，请先安装 Node.js 18+"
        exit 1
    fi
    
    local node_version=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ $node_version -lt 18 ]; then
        print_error "Node.js 版本过低，需要 18+，当前版本: $(node -v)"
        exit 1
    fi
    
    # 检查 npm
    if ! command -v npm &> /dev/null; then
        print_error "npm 未安装"
        exit 1
    fi
    
    # 根据部署类型检查依赖
    if [ "$DEPLOYMENT_TYPE" = "docker" ] || [ "$DEPLOYMENT_TYPE" = "dokploy" ]; then
        if ! command -v docker &> /dev/null; then
            print_error "Docker 未安装，请先安装 Docker"
            exit 1
        fi
        
        if ! docker info &> /dev/null; then
            print_error "Docker 服务未启动，请启动 Docker"
            exit 1
        fi
    fi
    
    print_success "依赖检查完成"
}

# 函数：清理环境
cleanup() {
    print_info "清理旧的部署资源..."
    
    # 清理 Docker 资源
    if [ "$DEPLOYMENT_TYPE" = "docker" ]; then
        docker-compose down --remove-orphans 2>/dev/null || true
        docker system prune -f
    fi
    
    # 清理构建文件
    rm -rf .next
    rm -rf dist
    rm -rf node_modules/.cache
    
    print_success "环境清理完成"
}

# 函数：安装依赖
install_dependencies() {
    print_info "安装项目依赖..."
    
    if [ -f "package-lock.json" ]; then
        npm ci
    else
        npm install
    fi
    
    print_success "依赖安装完成"
}

# 函数：运行测试
run_tests() {
    print_info "运行项目测试..."
    
    # TypeScript 类型检查
    npm run type-check
    
    # ESLint 检查
    npm run lint
    
    print_success "测试通过"
}

# 函数：构建项目
build_project() {
    print_info "构建项目..."
    
    # 设置生产环境变量
    export NODE_ENV=production
    export NEXT_TELEMETRY_DISABLED=1
    
    # 构建项目
    npm run build
    
    print_success "项目构建完成"
}

# 函数：Dokploy 部署
deploy_dokploy() {
    print_info "准备 Dokploy 部署..."
    
    # 确保 Dockerfile.dokploy 存在
    if [ ! -f "Dockerfile.dokploy" ]; then
        print_error "Dockerfile.dokploy 不存在"
        exit 1
    fi
    
    # 确保健康检查端点存在
    if [ ! -f "src/app/api/health/route.ts" ]; then
        print_error "健康检查端点不存在"
        exit 1
    fi
    
    # 创建 .dokploy.yml 配置文件
    cat > .dokploy.yml << EOF
name: ${PROJECT_NAME}
type: dockerfile
dockerfile: Dockerfile.dokploy
build:
  context: .
  args:
    NODE_ENV: production
deploy:
  port: 8558
  env:
    NODE_ENV: production
    NEXT_TELEMETRY_DISABLED: "1"
    PORT: "8558"
healthcheck:
  path: /api/health
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 40s
EOF
    
    print_success "Dokploy 配置已创建"
    print_info "请在 Dokploy 面板中："
    print_info "1. 创建新应用并连接到 GitHub 仓库"
    print_info "2. 选择使用 Dockerfile.dokploy"
    print_info "3. 设置端口为 3000"
    print_info "4. 推送代码到 GitHub 触发自动部署"
}

# 函数：Docker 部署
deploy_docker() {
    print_info "开始 Docker 部署..."
    
    # 构建 Docker 镜像
    print_info "构建 Docker 镜像..."
    docker build -t $DOCKER_IMAGE_NAME .
    
    # 停止旧容器
    print_info "停止旧容器..."
    docker-compose down 2>/dev/null || true
    
    # 启动新容器
    print_info "启动新容器..."
    docker-compose up -d --build
    
    # 等待服务启动
    print_info "等待服务启动..."
    sleep 10
    
    print_success "Docker 部署完成"
}

# 函数：传统部署
deploy_traditional() {
    print_info "开始传统部署..."
    
    # 停止现有进程
    pkill -f "next start" 2>/dev/null || true
    
    # 启动应用
    print_info "启动应用..."
    nohup npm start -- -p 8558 > logs/app.log 2>&1 &
    
    # 记录进程 ID
    echo $! > .pid
    
    print_success "传统部署完成，PID: $(cat .pid)"
}

# 函数：健康检查
health_check() {
    print_info "执行健康检查..."
    
    local max_attempts=30
    local attempt=1
    local url=$HEALTH_CHECK_URL
    
    # 根据部署类型调整 URL
    if [ "$DEPLOYMENT_TYPE" = "dokploy" ]; then
        print_warning "Dokploy 部署，请手动检查应用状态"
        return 0
    fi
    
    while [ $attempt -le $max_attempts ]; do
        if curl -f -s $url > /dev/null 2>&1; then
            print_success "健康检查通过！应用已成功部署"
            curl -s $url | jq . 2>/dev/null || curl -s $url
            return 0
        fi
        
        print_info "健康检查失败，重试 ($attempt/$max_attempts)..."
        sleep 5
        attempt=$((attempt + 1))
    done
    
    print_error "健康检查失败，部署可能存在问题"
    return 1
}

# 函数：显示部署信息
show_deployment_info() {
    print_success "🚀 部署完成！"
    echo
    print_info "部署信息："
    print_info "项目名称: $PROJECT_NAME"
    print_info "部署类型: $DEPLOYMENT_TYPE"
    
    case $DEPLOYMENT_TYPE in
        "dokploy")
            print_info "访问方式: 通过 Dokploy 提供的 URL"
            print_info "管理方式: Dokploy 控制面板"
            ;;
        "docker")
            print_info "访问地址: http://localhost:8558"
            print_info "HTTPS地址: https://localhost:6667"
            print_info "管理命令: docker-compose logs -f"
            ;;
        "traditional")
            print_info "访问地址: http://localhost:8558"
            print_info "管理命令: kill $(cat .pid)"
            print_info "日志文件: logs/app.log"
            ;;
    esac
    
    echo
    print_info "有用的命令："
    print_info "查看日志: npm run docker:compose:logs"
    print_info "重启服务: ./scripts/deploy.sh --type=$DEPLOYMENT_TYPE"
    print_info "健康检查: curl http://localhost:8558/api/health"
}

# 函数：回滚部署
rollback() {
    print_warning "开始回滚部署..."
    
    case $DEPLOYMENT_TYPE in
        "docker")
            docker-compose down
            docker image rm $DOCKER_IMAGE_NAME:latest 2>/dev/null || true
            ;;
        "traditional")
            if [ -f .pid ]; then
                kill $(cat .pid) 2>/dev/null || true
                rm .pid
            fi
            ;;
    esac
    
    print_success "回滚完成"
}

# 函数：显示帮助信息
show_help() {
    echo "Brainrot News 自动化部署脚本"
    echo
    echo "用法: $0 [选项]"
    echo
    echo "选项:"
    echo "  --type TYPE           部署类型 (dokploy|docker|traditional) [默认: dokploy]"
    echo "  --skip-tests         跳过测试"
    echo "  --skip-cleanup       跳过清理"
    echo "  --health-check-url   健康检查 URL [默认: http://localhost:8558/api/health]"
    echo "  --rollback           回滚部署"
    echo "  --help               显示此帮助信息"
    echo
    echo "示例:"
    echo "  $0                              # 使用 Dokploy 部署"
    echo "  $0 --type docker                # 使用 Docker 部署"
    echo "  $0 --type traditional           # 使用传统方式部署"
    echo "  $0 --rollback --type docker     # 回滚 Docker 部署"
}

# 主函数
main() {
    local skip_tests=false
    local skip_cleanup=false
    local rollback_mode=false
    
    # 解析命令行参数
    while [[ $# -gt 0 ]]; do
        case $1 in
            --type)
                DEPLOYMENT_TYPE="$2"
                shift 2
                ;;
            --skip-tests)
                skip_tests=true
                shift
                ;;
            --skip-cleanup)
                skip_cleanup=true
                shift
                ;;
            --health-check-url)
                HEALTH_CHECK_URL="$2"
                shift 2
                ;;
            --rollback)
                rollback_mode=true
                shift
                ;;
            --help)
                show_help
                exit 0
                ;;
            *)
                print_error "未知参数: $1"
                show_help
                exit 1
                ;;
        esac
    done
    
    # 验证部署类型
    if [[ ! "$DEPLOYMENT_TYPE" =~ ^(dokploy|docker|traditional)$ ]]; then
        print_error "无效的部署类型: $DEPLOYMENT_TYPE"
        show_help
        exit 1
    fi
    
    # 创建日志目录
    mkdir -p logs
    
    print_info "开始 $PROJECT_NAME 部署流程..."
    print_info "部署类型: $DEPLOYMENT_TYPE"
    
    # 回滚模式
    if [ "$rollback_mode" = true ]; then
        rollback
        exit 0
    fi
    
    # 部署流程
    check_dependencies
    
    if [ "$skip_cleanup" = false ]; then
        cleanup
    fi
    
    install_dependencies
    
    if [ "$skip_tests" = false ]; then
        run_tests
    fi
    
    build_project
    
    # 根据部署类型执行部署
    case $DEPLOYMENT_TYPE in
        "dokploy")
            deploy_dokploy
            ;;
        "docker")
            deploy_docker
            health_check
            ;;
        "traditional")
            deploy_traditional
            health_check
            ;;
    esac
    
    show_deployment_info
}

# 错误处理
trap 'print_error "部署过程中发生错误，正在清理..."; cleanup; exit 1' ERR

# 执行主函数
main "$@"