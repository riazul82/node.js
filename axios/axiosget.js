const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    console.log('status code: ', res.status);
    console.log('data: %o', res.data);
}).catch((err) => {
    console.log(err);
});