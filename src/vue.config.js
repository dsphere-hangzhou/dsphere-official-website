module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        // target: 'https://console.dsphere.com.cn/', // 正式
        // target: 'https://lab-dev.dsphere.com.cn:9020/', // qa
        target: 'http://192.168.50.23:9008/',
        changeOrigin: true,
        pathRewrite: {}
      }
    }
  }
};