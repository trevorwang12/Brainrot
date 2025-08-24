#!/bin/bash

# 快速部署脚本 - 用于开发和测试环境
# 这是一个简化版本的部署脚本，适用于快速迭代

set -e

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}🚀 Brainrot News 快速部署${NC}"
echo

# 检查 Docker
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker 未安装${NC}"
    exit 1
fi

if ! docker info &> /dev/null; then
    echo -e "${RED}❌ Docker 未启动${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 停止现有容器...${NC}"
docker-compose down 2>/dev/null || true

echo -e "${YELLOW}🧹 清理旧资源...${NC}"
docker system prune -f

echo -e "${YELLOW}📝 安装依赖...${NC}"
npm install

echo -e "${YELLOW}🔧 构建项目...${NC}"
npm run build

echo -e "${YELLOW}🐳 启动 Docker 容器...${NC}"
docker-compose up -d --build

echo -e "${YELLOW}⏳ 等待服务启动...${NC}"
sleep 15

echo -e "${YELLOW}🩺 检查服务健康状态...${NC}"
if curl -f -s http://localhost:8558/api/health > /dev/null; then
    echo -e "${GREEN}✅ 部署成功！${NC}"
    echo
    echo -e "${GREEN}📍 访问地址: http://localhost:8558${NC}"
    echo -e "${GREEN}🔍 健康检查: curl http://localhost:8558/api/health${NC}"
    echo -e "${GREEN}📋 查看日志: docker-compose logs -f${NC}"
else
    echo -e "${RED}❌ 服务启动失败${NC}"
    echo -e "${YELLOW}查看日志: docker-compose logs${NC}"
    exit 1
fi