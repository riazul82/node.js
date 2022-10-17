const http = require('http');
const router = require('./routes/app.route');

const app = http.createServer((req, res) => {
    router(req, res);
});

module.exports = app;