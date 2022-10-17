const fs = require('fs');

fs.appendFile('test.txt', 'Meaw!', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('appended!');
    }
});