const webpack = require('webpack')
const packageJson = require('./package.json')

const publicPath = process.env.NODE_ENV === 'production'
    ? '/ftn-vue-pwa-demo/'
    : '/'

module.exports = {
    publicPath: publicPath,
    pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'src/service-worker.js'
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                APP_NAME: JSON.stringify("ftn-vue-pwa"),
                APP_LOCALE: JSON.stringify("id"),
                AUTH_TOKEN_HEADER: JSON.stringify(false),
                PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),
                API_URL: process.env.NODE_ENV === 'production' ?
                    null :
                    null,
                GITHUB_AUTH: JSON.stringify(false),
                APP_VERSION: JSON.stringify(packageJson.version),
                APP_PACKAGE_NAME: JSON.stringify(packageJson.name),
                SW_SCOPE: JSON.stringify(publicPath)
            })
        ]
    }
}
