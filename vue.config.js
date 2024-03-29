const { defineConfig } = require('@vue/cli-service')
var webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    //关闭web端显示错误
    client: {
      overlay: false
    },

    proxy: {
      '/api': {
        target: 'http://localhost:8000', //建立本地服务器端口可能不一样
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      })
    ]
  },
})
