const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  css: {
    extract: false
  },
  configureWebpack: {
    externals: {
      vue: 'Vue',
      vant: 'vant'
    }
  }
})
