const events = require('events');
const emitter = new events.EventEmitter();

const alertFunc = (msg) => {
    console.log(msg); // something wrong!
}

emitter.on('alert', alertFunc);
emitter.emit('alert', 'something wrong!');