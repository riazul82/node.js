const fs = require('fs');

fs.writeFile('test.txt', 'new text', {flag: 'w+'}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('success!');
    }
});