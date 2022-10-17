const fs = require('fs');

fs.stat('test.txt', (err, stats) => {
    if (err) {
        console.log(err);
    } else {
        console.log(stats.isFile());
        console.log(stats.isDirectory());
        console.log(stats.isSymbolicLink());
        console.log(stats.size);
        console.log(stats);
    }
});