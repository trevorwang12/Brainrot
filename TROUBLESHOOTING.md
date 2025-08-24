# 故障排除指南

## 部署初始化问题 (Initializing deployment)

### 问题描述
部署过程中卡在 "Initializing deployment" 阶段，无法继续进行。

### 常见原因及解决方案

#### 1. Docker 服务未启动

**检查方法:**
```bash
# 检查 Docker 服务状态
sudo systemctl status docker

# 检查 Docker 是否响应
docker --version
docker ps
```

**解决方案:**
```bash
# 启动 Docker 服务
sudo systemctl start docker

# 设置开机自启动
sudo systemctl enable docker

# 重启 Docker (如果需要)
sudo systemctl restart docker
```

#### 2. 权限问题

**检查方法:**
```bash
# 检查当前用户是否在 docker 组中
groups $USER

# 尝试不使用 sudo 运行 docker
docker ps
```

**解决方案:**
```bash
# 将当前用户添加到 docker 组
sudo usermod -aG docker $USER

# 重新登录或刷新组权限
newgrp docker

# 或者注销后重新登录
```

#### 3. 端口占用问题

**检查方法:**
```bash
# 检查端口 6666 是否被占用
sudo netstat -tulpn | grep 6666
# 或者使用 ss
sudo ss -tulpn | grep 6666
```

**解决方案:**
```bash
# 找出占用进程并终止
sudo lsof -i :6666
sudo kill -9 <PID>

# 或者修改端口配置
vim docker-compose.yml
# 将端口改为其他值，如 8080:80
```

#### 4. Docker Compose 版本问题

**检查方法:**
```bash
docker-compose --version
# 或者
docker compose version
```

**解决方案:**
```bash
# 更新 Docker Compose (方法1 - 如果是独立安装)
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 更新 Docker Compose (方法2 - 如果通过包管理器安装)
sudo apt update && sudo apt upgrade docker-compose

# 使用新版本语法
docker compose up -d
```

#### 5. 磁盘空间不足

**检查方法:**
```bash
df -h
docker system df
```

**解决方案:**
```bash
# 清理 Docker 资源
docker system prune -a

# 清理未使用的卷
docker volume prune

# 清理未使用的镜像
docker image prune -a
```

### 完整诊断脚本

创建诊断脚本 `diagnose-deployment.sh`：

```bash
#!/bin/bash

echo "=== 部署诊断脚本 ==="
echo

# 1. 检查 Docker 服务
echo "1. 检查 Docker 服务状态:"
if systemctl is-active --quiet docker; then
    echo "✅ Docker 服务正在运行"
else
    echo "❌ Docker 服务未运行"
    echo "解决方案: sudo systemctl start docker"
fi
echo

# 2. 检查 Docker 权限
echo "2. 检查 Docker 权限:"
if docker ps >/dev/null 2>&1; then
    echo "✅ Docker 权限正常"
else
    echo "❌ Docker 权限有问题"
    echo "解决方案: sudo usermod -aG docker $USER && newgrp docker"
fi
echo

# 3. 检查端口占用
echo "3. 检查端口 6666 是否可用:"
if ss -tulpn | grep -q ":6666"; then
    echo "❌ 端口 6666 已被占用"
    echo "占用进程:"
    ss -tulpn | grep ":6666"
    echo "解决方案: sudo lsof -i :6666 找到进程ID，然后 sudo kill -9 <PID>"
else
    echo "✅ 端口 6666 可用"
fi
echo

# 4. 检查磁盘空间
echo "4. 检查磁盘空间:"
DISK_USAGE=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')
if [ $DISK_USAGE -gt 90 ]; then
    echo "❌ 磁盘空间不足 (${DISK_USAGE}%)"
    echo "解决方案: docker system prune -a"
else
    echo "✅ 磁盘空间充足 (${DISK_USAGE}%)"
fi
echo

# 5. 检查 Docker Compose 版本
echo "5. 检查 Docker Compose:"
if command -v docker-compose >/dev/null 2>&1; then
    COMPOSE_VERSION=$(docker-compose --version)
    echo "✅ Docker Compose 版本: $COMPOSE_VERSION"
else
    echo "❌ Docker Compose 未安装"
    echo "解决方案: 安装 Docker Compose"
fi
echo

echo "=== 建议的修复命令 ==="
echo "sudo systemctl start docker"
echo "sudo usermod -aG docker $USER && newgrp docker"
echo "docker system prune -a"
echo "docker-compose down && docker-compose up -d --build"
```

### 逐步解决方案

#### 步骤 1: 基本检查
```bash
# 检查 Docker 服务
sudo systemctl status docker

# 如果未运行，启动服务
sudo systemctl start docker
sudo systemctl enable docker
```

#### 步骤 2: 权限修复
```bash
# 添加用户到 docker 组
sudo usermod -aG docker $USER

# 刷新权限（选择其中一个方法）
newgrp docker
# 或者重新登录
```

#### 步骤 3: 清理和重新部署
```bash
# 停止并清理现有容器
docker-compose down

# 清理 Docker 资源
docker system prune -a

# 重新构建和部署
docker-compose up -d --build
```

#### 步骤 4: 使用替代端口（如果端口被占用）
```bash
# 临时使用不同端口
docker-compose down
# 编辑 docker-compose.yml，将端口改为 8080:80
docker-compose up -d
```

### 验证部署成功

```bash
# 检查容器状态
docker-compose ps

# 检查日志
docker-compose logs -f

# 测试应用是否响应
curl http://localhost:6666/health
```

### 高级故障排除

如果上述方法都不能解决问题：

1. **检查系统日志:**
   ```bash
   journalctl -u docker.service -f
   ```

2. **使用 Docker 原生命令:**
   ```bash
   docker build -t brainout-news .
   docker run -p 6666:3000 brainout-news
   ```

3. **检查网络配置:**
   ```bash
   docker network ls
   docker network inspect bridge
   ```

### 联系支持

如果问题仍然存在，请提供以下信息：
- 操作系统版本: `cat /etc/os-release`
- Docker 版本: `docker --version`
- Docker Compose 版本: `docker-compose --version`
- 错误日志: `docker-compose logs`