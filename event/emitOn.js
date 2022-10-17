const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('FirstNodeEvent', (data) => {
    console.log(data); // This is first node event!
});

emitter.emit('FirstNodeEvent', 'This is first node event!');