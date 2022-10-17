const events = require('events');
const emitter = new events.EventEmitter();

const age = 20;

emitter.on('adult', (age) => {
    // this will execute
    console.log(`The person is adult and is ${age} years old!`);
});

emitter.on('child', (age) => {
    console.log(`The child is only ${age}!`);
});

if (age >= 18) {
    emitter.emit('adult', age);
} else {
    emitter.emit('child', 12);
}