const events = require('events');
const emitter = new events.EventEmitter();

emitter.addListener('MyEvent', (data) => {
    console.log(data); // Hello Node!
});

emitter.emit('MyEvent', 'Hello Node!');