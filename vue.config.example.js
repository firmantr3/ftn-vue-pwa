const webpack = require('webpack')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                APP_NAME: JSON.stringify("ftn-vue-pwa"),
                APP_LOCALE: JSON.stringify("id"),
                PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),
                GITHUB_AUTH: JSON.stringify(false)
            })
        ]
    }
}
