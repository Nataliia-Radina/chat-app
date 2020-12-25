module.exports = {
        publicPath: process.env.NODE_ENV === 'production'
            ? '/chat-app/'
            : '/',
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/assets/styles/variables.scss";`
            }
        }
    }
}

