'use strict'
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
    },

    devServer: {
        proxy: {
            '/atomy': {
                target: 'https://test-dev.atomy.com/apiglobal/',
                pathRewrite: {'^/atomy' : ''}
            },
        }
    },
}
