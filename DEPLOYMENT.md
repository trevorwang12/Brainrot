# 生产环境部署指南

本指南将帮助您将 Steal a Brainrot News 网站部署到生产环境。

## 部署方式

### 1. Docker 部署（推荐）

#### 前置要求
- Docker 20.0+
- Docker Compose 2.0+
- 至少 2GB RAM
- 20GB 磁盘空间

#### 快速部署

```bash
# 1. 克隆项目
git clone <repository-url>
cd brainout-news

# 2. 启动服务
docker-compose up -d

# 3. 查看日志
docker-compose logs -f
```

#### 生产环境配置

1. **环境变量配置**
   ```bash
   # 复制并修改环境变量文件
   cp .env.production .env.local
   
   # 编辑配置
   vim .env.local
   ```

2. **SSL 证书配置**
   ```bash
   # 将证书文件放置在 nginx/ssl/ 目录下
   mkdir -p nginx/ssl
   # 添加 your-domain.crt 和 your-domain.key
   ```

3. **域名配置**
   ```bash
   # 修改 nginx/conf.d/default.conf
   # 替换 localhost 为您的域名
   ```

#### 常用命令

```bash
# 构建并启动
docker-compose up -d --build

# 停止服务
docker-compose down

# 查看服务状态
docker-compose ps

# 重启单个服务
docker-compose restart app

# 查看实时日志
docker-compose logs -f app
```

### 访问地址

- **开发环境**: http://localhost:6666
- **生产环境**: http://localhost:6666 (HTTP) / https://localhost:6667 (HTTPS)

### 2. 传统部署

#### Node.js 环境部署

```bash
# 1. 安装依赖
npm ci --production

# 2. 构建应用
npm run build

# 3. 启动应用
npm run start:prod
```

#### PM2 部署（推荐用于传统部署）

```bash
# 1. 安装 PM2
npm install -g pm2

# 2. 创建 PM2 配置文件
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'brainout-news',
    script: 'npm',
    args: 'run start:prod',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    instances: 'max',
    exec_mode: 'cluster',
    watch: false,
    max_memory_restart: '1G'
  }]
}
EOF

# 3. 启动应用
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## 性能优化

### 1. 缓存配置

- **静态资源**: 1年缓存（通过 nginx）
- **页面内容**: 1小时缓存 + SWR
- **API响应**: 根据内容类型配置缓存

### 2. CDN 配置

推荐使用 CloudFlare 或 AWS CloudFront:

```javascript
// next.config.ts 中配置 CDN
images: {
  domains: ['your-cdn-domain.com'],
  loader: 'custom',
  loaderFile: './my-loader.js'
}
```

### 3. 数据库优化

如果使用 Redis 缓存：

```bash
# Redis 配置建议
redis-server --maxmemory 256mb --maxmemory-policy allkeys-lru
```

## 监控和日志

### 1. 健康检查

访问 `/health` 端点检查服务状态：

```bash
curl http://localhost:6666/health
# 响应: healthy
```

### 2. 日志收集

日志文件位置：
- 应用日志: `/app/logs/`
- Nginx 日志: `/var/log/nginx/`

### 3. 性能监控

推荐集成：
- Sentry（错误跟踪）
- Google Analytics（用户行为）
- New Relic（性能监控）

## 安全配置

### 1. 安全头设置

已在 nginx 配置中包含：
- X-Frame-Options
- X-XSS-Protection  
- X-Content-Type-Options
- CSP 策略

### 2. 速率限制

- API 请求: 10 req/s
- 一般请求: 30 req/s

### 3. HTTPS 配置

```nginx
# 在 nginx/conf.d/ 中添加 SSL 配置
server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    ssl_certificate /etc/nginx/ssl/your-domain.crt;
    ssl_certificate_key /etc/nginx/ssl/your-domain.key;
    
    # SSL 安全配置
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256;
    ssl_prefer_server_ciphers off;
}
```

## 故障排除

### 常见问题

1. **容器启动失败**
   ```bash
   # 检查日志
   docker-compose logs app
   
   # 重新构建
   docker-compose up --build -d
   ```

2. **内存不足**
   ```bash
   # 调整容器内存限制
   # 在 docker-compose.yml 中添加
   mem_limit: 2g
   ```

3. **端口冲突**
   ```bash
   # 修改 docker-compose.yml 中的端口映射
   ports:
     - "8080:80"  # 改为其他端口
   ```

   **注意**: 当前配置使用端口 6666 (HTTP) 和 6667 (HTTPS)

### 性能调优

1. **增加 Node.js 内存**
   ```bash
   # 在 Dockerfile 中设置
   ENV NODE_OPTIONS="--max-old-space-size=4096"
   ```

2. **优化镜像大小**
   ```bash
   # 使用 alpine 镜像
   # 多阶段构建已在 Dockerfile 中实现
   ```

## 备份和恢复

### 1. 数据备份

```bash
# 备份用户上传文件
tar -czf backup-$(date +%Y%m%d).tar.gz public/images/

# 备份配置文件
tar -czf config-backup-$(date +%Y%m%d).tar.gz nginx/ .env.production
```

### 2. 自动备份脚本

```bash
#!/bin/bash
# backup.sh
BACKUP_DIR="/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# 创建备份目录
mkdir -p $BACKUP_DIR

# 备份数据
docker exec brainout-news-app tar -czf - /app/public/images > $BACKUP_DIR/images-$DATE.tar.gz

# 保留最近30天的备份
find $BACKUP_DIR -name "images-*.tar.gz" -mtime +30 -delete
```

## 扩展部署

### 1. 负载均衡

使用多个应用实例：

```yaml
# docker-compose.prod.yml
version: '3.8'
services:
  app1:
    build: .
    container_name: brainout-news-app1
  
  app2:
    build: .
    container_name: brainout-news-app2
  
  nginx:
    # 配置上游服务器
    depends_on:
      - app1
      - app2
```

### 2. 数据库集群

对于高流量部署，考虑使用数据库集群和读写分离。

---

## 支持

如有部署问题，请查看：
- [troubleshooting.md](./troubleshooting.md)
- [GitHub Issues](https://github.com/username/brainout-news/issues)