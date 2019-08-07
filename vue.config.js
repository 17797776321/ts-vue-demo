module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: `http:locahost:3000`,
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          '/api': '/api'
        }
      }
    }
  }
}