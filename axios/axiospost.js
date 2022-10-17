const axios = require('axios');

const data = JSON.stringify({
    product: 'mango',
    price: '200'
});

axios.post('https://reqres.in/api/users', data)
.then((res) => {
    console.log('status code:', res.status);
    console.log('data: %o', res.data);
}).catch((err) => {
    console.error(err);
});