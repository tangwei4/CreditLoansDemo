const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
   //上面都是自带的，下面是要写的
   configureWebpack: {
    devServer: {
      // 设置代理服务器
      proxy: {
        '/api': {
          target: 'http://124.223.69.156:6300',
          changeOrigin: true,
          //后端请求并没有api所以要去掉
          pathRewrite: { '^/api': '/' }
        }
      }
    }
  }
})
