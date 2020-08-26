'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    devServer: {  // 开发环境跨域情况的代理配置
        proxy: {
            '/api': {
                target: 'https://www.easy-mock.com/mock/5f43ad2137dd743fd5db5ef2'
            }
        }
    },
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('@',resolve('./src'))
        .set('~',resolve('./src/assets'))
    },
    configureWebpack: {
        externals: {
            "BMap": "BMap"
        }
    }
}