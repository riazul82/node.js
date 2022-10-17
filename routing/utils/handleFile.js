const fs = require('fs');

const handleFile = (path, status, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(status, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}

module.exports = handleFile;