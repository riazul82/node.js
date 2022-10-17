const fs = require('fs');

fs.rename('test.txt', 'wow.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('renamed!');
    }
});