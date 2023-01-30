const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  publicPath: process.env.NODE_ENV === 'production' ? '/dev-manager/' : '/'
})
