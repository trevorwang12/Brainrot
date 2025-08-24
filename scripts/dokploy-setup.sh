#!/bin/bash

# Dokploy 环境设置脚本
# 帮助配置项目以适配 Dokploy 部署

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${GREEN}🚀 Dokploy 部署配置助手${NC}"
echo

# 1. 创建 Dokploy 专用配置文件
echo -e "${YELLOW}📝 创建 .dokploy.yml 配置文件...${NC}"
cat > .dokploy.yml << 'EOF'
name: brainrot-news
type: dockerfile
dockerfile: Dockerfile.dokploy
build:
  context: .
  args:
    NODE_ENV: production
    NEXT_TELEMETRY_DISABLED: "1"
deploy:
  port: 3000
  env:
    NODE_ENV: production
    NEXT_TELEMETRY_DISABLED: "1"
    PORT: "3000"
    HOSTNAME: "0.0.0.0"
healthcheck:
  path: /api/health
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 40s
resources:
  limits:
    memory: 1Gi
    cpu: 500m
  requests:
    memory: 512Mi
    cpu: 250m
EOF

# 2. 创建简化的 next.config.ts
echo -e "${YELLOW}⚙️ 创建 Dokploy 优化的 next.config.ts...${NC}"
cat > next.config.dokploy.ts << 'EOF'
import type { NextConfig } from "next";

// Dokploy 优化配置
const nextConfig: NextConfig = {
  // 使用 standalone 输出模式
  output: 'standalone',
  
  // 图片优化配置
  images: {
    unoptimized: false,
    domains: ['localhost'],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  
  // 实验性功能
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
  
  // 编译器优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 环境变量
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
EOF

# 3. 创建环境变量模板
echo -e "${YELLOW}🔧 创建 .env.dokploy 模板...${NC}"
cat > .env.dokploy << 'EOF'
# Dokploy 部署环境变量
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
HOSTNAME=0.0.0.0

# 应用配置 (请根据你的 Dokploy 域名修改)
NEXT_PUBLIC_APP_URL=https://your-app.dokploy.dev
NEXT_PUBLIC_API_URL=https://your-app.dokploy.dev/api

# 性能优化
NEXT_PRIVATE_OPTIMIZE_FONTS=1
NEXT_PRIVATE_OPTIMIZE_IMAGES=1

# 可选：分析和监控
# NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id
# NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
EOF

# 4. 更新 package.json 脚本
echo -e "${YELLOW}📦 优化 package.json 脚本...${NC}"

# 使用 jq 更新 package.json，如果没有 jq 则手动提示
if command -v jq &> /dev/null; then
    # 添加 Dokploy 专用脚本
    jq '.scripts += {
        "build:dokploy": "next build",
        "start:dokploy": "next start -p 3000",
        "deploy:dokploy": "NODE_ENV=production npm run build:dokploy"
    }' package.json > package.json.tmp && mv package.json.tmp package.json
    
    echo -e "${GREEN}✅ package.json 已更新${NC}"
else
    echo -e "${YELLOW}⚠️  请手动添加以下脚本到 package.json:${NC}"
    echo '"build:dokploy": "next build",'
    echo '"start:dokploy": "next start -p 3000",'
    echo '"deploy:dokploy": "NODE_ENV=production npm run build:dokploy"'
fi

# 5. 创建部署验证脚本
echo -e "${YELLOW}✅ 创建部署验证脚本...${NC}"
cat > scripts/verify-dokploy.sh << 'EOF'
#!/bin/bash

# Dokploy 部署验证脚本

set -e

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}🔍 验证 Dokploy 部署配置...${NC}"

# 检查必需文件
files=("Dockerfile.dokploy" "src/app/api/health/route.ts" ".dokploy.yml")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $file 存在${NC}"
    else
        echo -e "${RED}❌ $file 不存在${NC}"
        exit 1
    fi
done

# 检查 package.json 脚本
if grep -q '"build"' package.json && grep -q '"start"' package.json; then
    echo -e "${GREEN}✅ package.json 脚本配置正确${NC}"
else
    echo -e "${RED}❌ package.json 缺少必需脚本${NC}"
    exit 1
fi

# 测试本地构建
echo -e "${YELLOW}🔧 测试本地构建...${NC}"
if npm run build; then
    echo -e "${GREEN}✅ 构建成功${NC}"
else
    echo -e "${RED}❌ 构建失败${NC}"
    exit 1
fi

# 测试 Docker 构建
echo -e "${YELLOW}🐳 测试 Docker 构建...${NC}"
if docker build -f Dockerfile.dokploy -t dokploy-test .; then
    echo -e "${GREEN}✅ Docker 构建成功${NC}"
    
    # 清理测试镜像
    docker rmi dokploy-test 2>/dev/null || true
else
    echo -e "${RED}❌ Docker 构建失败${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 Dokploy 配置验证完成！${NC}"
echo
echo -e "${YELLOW}下一步：${NC}"
echo "1. 将代码推送到 GitHub"
echo "2. 在 Dokploy 中创建新应用"
echo "3. 连接你的 GitHub 仓库"
echo "4. 选择使用 Dockerfile.dokploy"
echo "5. 设置环境变量（参考 .env.dokploy）"
echo "6. 部署应用"
EOF

chmod +x scripts/verify-dokploy.sh

# 6. 测试构建
echo -e "${YELLOW}🧪 测试项目构建...${NC}"
if npm run build; then
    echo -e "${GREEN}✅ 构建测试成功${NC}"
else
    echo -e "${RED}❌ 构建失败，请检查配置${NC}"
    exit 1
fi

# 7. 显示配置总结
echo
echo -e "${GREEN}🎉 Dokploy 配置完成！${NC}"
echo
echo -e "${BLUE}📁 创建的文件：${NC}"
echo "  - .dokploy.yml (Dokploy 配置)"
echo "  - next.config.dokploy.ts (优化配置)"
echo "  - .env.dokploy (环境变量模板)"
echo "  - Dockerfile.dokploy (已存在)"
echo "  - scripts/verify-dokploy.sh (验证脚本)"
echo
echo -e "${YELLOW}📝 下一步操作：${NC}"
echo "1. 根据你的需求修改 .env.dokploy 中的域名"
echo "2. 运行验证脚本: ./scripts/verify-dokploy.sh"
echo "3. 将代码推送到 GitHub: git add . && git commit -m 'Add Dokploy config' && git push"
echo "4. 在 Dokploy 面板中创建新应用并连接仓库"
echo
echo -e "${GREEN}🔗 有用链接：${NC}"
echo "  - Dokploy 文档: https://dokploy.com/docs"
echo "  - Next.js 部署: https://nextjs.org/docs/deployment"
echo
echo -e "${YELLOW}💡 提示：如果部署卡在 'Initializing deployment'：${NC}"
echo "  1. 检查 Dockerfile.dokploy 语法"
echo "  2. 确保环境变量配置正确"
echo "  3. 查看 Dokploy 构建日志"
echo "  4. 增加构建超时时间"