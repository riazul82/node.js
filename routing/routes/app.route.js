const handleFile = require('../utils/handleFile');

const router = (req, res) => {
    if (req.url === '/' || req.url === '/home') {
        handleFile(__dirname + '/../pages/index.html', 200, res);
    } else if (req.url === '/about') {
        handleFile(__dirname + '/../pages/about.html', 200, res);
    } else if (req.url === '/blog') {
        handleFile(__dirname + '/../pages/blog.html', 200, res);
    } else if (req.url === '/contact') {
        handleFile(__dirname + '/../pages/contact.html', 200, res);
    } else {
        handleFile(__dirname + '/../pages/error404.html', 404, res);
    }
}

module.exports = router;