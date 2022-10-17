const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 8080;

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Welcome to the Server!</h1>');
});

app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});