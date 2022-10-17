const events = require('events');
const emitter = new events.EventEmitter();

emitter.once('once', () => {
    console.log('Emited only once!'); // Emited only once!
});

emitter.emit('once'); // this will execute!
emitter.emit('once'); // this won't work!