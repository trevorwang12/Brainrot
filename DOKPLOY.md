# Dokploy 部署指南

## 🚀 Dokploy 部署配置

### 问题：Initializing deployment 卡住

#### 常见原因及解决方案

### 1. Dockerfile 优化（推荐）

Dokploy 更适合使用单阶段 Dockerfile，让我们创建一个专用版本：

```dockerfile
# Dockerfile.dokploy
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 安装依赖
COPY package*.json ./
RUN npm ci --only=production

# 复制源代码
COPY . .

# 设置环境变量
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# 构建应用
RUN npm run build

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]
```

### 2. Dokploy 配置文件

创建 `dokploy.config.js`：

```javascript
module.exports = {
  name: 'brainout-news',
  build: {
    dockerfile: 'Dockerfile.dokploy',
    context: '.',
    args: {
      NODE_ENV: 'production'
    }
  },
  deploy: {
    port: 3000,
    healthCheck: {
      path: '/api/health',
      interval: 30,
      timeout: 10,
      retries: 3
    },
    env: {
      NODE_ENV: 'production',
      NEXT_TELEMETRY_DISABLED: '1'
    }
  }
}
```

### 3. 健康检查端点

确保添加健康检查 API：

```typescript
// src/app/api/health/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0'
  })
}
```

### 4. 修复 next.config.ts

确保配置适合 Dokploy：

```typescript
// 针对 Dokploy 的配置
const nextConfig: NextConfig = {
  // 使用 standalone 输出
  output: 'standalone',
  
  // 简化图片配置
  images: {
    unoptimized: false,
    domains: ['localhost'],
    formats: ['image/webp'],
  },
  
  // 环境变量
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // 移除复杂的 webpack 配置
  // webpack: undefined,
  
  // 简化头部配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ]
  },
}

export default nextConfig
```

### 5. 简化 package.json 脚本

```json
{
  "scripts": {
    "dev": "next dev -p 6666",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "next lint"
  }
}
```

## 🔧 Dokploy 部署步骤

### 方法 1: 通过 GitHub 仓库（推荐）

1. **在 Dokploy 中创建新应用**
   - 选择 "From Git Repository"
   - 连接你的 GitHub: `https://github.com/trevorwang12/Brainrot`
   - 选择 `main` 分支

2. **配置构建设置**
   ```
   Build Command: npm run build
   Start Command: npm start -- -p 6666
   Port: 6666
   ```

3. **环境变量设置**
   ```
   NODE_ENV=production
   NEXT_TELEMETRY_DISABLED=1
   PORT=6666
   NEXT_PUBLIC_APP_URL=https://your-app.dokploy.com
   ```

### 方法 2: 使用 Docker

1. **选择 Docker 部署**
2. **使用我们的优化 Dockerfile**
   - 确保使用 `Dockerfile.dokploy`
3. **端口配置**: 6666

## 🐛 故障排除

### 问题 1: 部署卡在 "Initializing"

**解决方案:**
```bash
# 1. 检查 Dockerfile 语法
docker build -f Dockerfile.dokploy -t test-build .

# 2. 简化依赖安装
# 在 Dockerfile 中使用：
RUN npm ci --production --silent

# 3. 增加构建超时时间
# 在 Dokploy 设置中增加 Build Timeout 到 15分钟
```

### 问题 2: 构建失败

**检查这些配置:**
1. 确保 `package.json` 中有正确的 `build` 脚本
2. 移除 `next.config.ts` 中的复杂配置
3. 检查依赖版本兼容性

### 问题 3: 运行时错误

**常见修复:**
```javascript
// next.config.ts - 最小配置
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // 对于 Dokploy 推荐
  }
}
export default nextConfig
```

## 📝 Dokploy 环境变量

在 Dokploy 面板中设置：

```env
# 基本配置
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# 应用 URLs (替换为你的实际域名)
NEXT_PUBLIC_APP_URL=https://your-app.dokploy.com
NEXT_PUBLIC_API_URL=https://your-app.dokploy.com/api

# 性能优化
NEXT_PRIVATE_OPTIMIZE_FONTS=1
NEXT_PRIVATE_OPTIMIZE_IMAGES=1
```

## 🚀 快速修复命令

如果部署卡住，尝试这些步骤：

### 1. 重新触发部署
在 Dokploy 面板中：
- 点击 "Redeploy"
- 或者推送一个小改动到 GitHub 触发自动部署

### 2. 检查日志
```bash
# 在 Dokploy 面板查看：
- Build Logs
- Runtime Logs
- Container Logs
```

### 3. 简化配置测试
创建最小化配置文件进行测试：

```javascript
// next.config.simple.js
module.exports = {
  output: 'standalone'
}
```

## 🔄 部署流程优化

### 1. 预构建检查
```bash
# 本地测试构建
npm run build
npm start -- -p 6666

# 测试 Docker 构建
docker build -f Dockerfile.dokploy -t brainrot-test .
docker run -p 6666:6666 brainrot-test
```

### 2. 渐进式部署
1. 先部署最小配置
2. 逐步添加功能
3. 每次添加后测试部署

### 3. 监控指标
- 构建时间 < 10分钟
- 启动时间 < 30秒
- 内存使用 < 1GB

## 📞 获取帮助

如果问题持续存在：

1. **检查 Dokploy 状态页面**
2. **查看详细的构建日志**
3. **联系 Dokploy 支持**
4. **在项目 GitHub 上创建 Issue**

## 🎯 成功部署检查清单

- [ ] GitHub 仓库正确连接
- [ ] Dockerfile.dokploy 存在且语法正确
- [ ] package.json 有 build 和 start 脚本
- [ ] next.config.ts 配置简化
- [ ] 环境变量正确设置
- [ ] 健康检查端点工作正常
- [ ] 端口配置为 6666
- [ ] 依赖安装成功