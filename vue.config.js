'use strict'
const path = require('path');

function resolve(dir) {
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
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/styles/_variables.scss";`
            }
        }
    },
    devServer: {
        proxy: {
            '/atomy': {
                //target: 'https://test-dev.atomy.com/apiglobal/',
                target: 'https://api.atomy.com/apiglobal/',
                pathRewrite: {'^/atomy' : ''}
            },
        }
    },
}
