const { defineConfig } = require('@vue/cli-service')

const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:true,
// vue.config.jsc

/*configureWebpack: {
	   plugins: [
        new webpack.DefinePlugin({ // webpack自带该插件，无需单独安装
            'process.env' : {
                NODE_ENV: process.env.NODE_ENV // 将属性转化为全局变量，让代码中可以正常访问
            }
        })
    ]
  
}
/*
resolve: {
  alias: {
    process: "process/browser",
  },
  fallback: { "process/browser": require.resolve("process/browser") },
},
*/
})
