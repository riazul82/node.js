const http = require('https');

const data = JSON.stringify({
    name: 'iPhone',
    price: 80000
});

const options = {
    hostname: 'reqres.in',
    path: '/api/users',
    method: 'POST',
    header: { 
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = http.request(options, (res) => {
    console.log(`status code: ${res.statusCode}`);
    res.on('data', (data) => {
        process.stdout.write(data);
    });
});

req.on('error', (error) => {
    console.error(error);
});

req.write(data);
req.end();