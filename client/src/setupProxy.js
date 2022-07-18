const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://5000-1nn0vat0r-shoppingmallm-odfhz1hjjkv.ws-us54.gitpod.io',
            changeOrigin: true,
        })
    );
};