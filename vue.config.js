const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // host: 'localhost',
    // port: 8080,
    // 配置代理
    proxy: {
      '/api': {
        target: 'http://localhost:3004',
        changOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
