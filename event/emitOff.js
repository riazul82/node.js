const events = require('events');
const emitter = new events.EventEmitter();

const callback = () => {
    console.log('This is end!');
}

emitter.on('end', callback);
emitter.off('end', callback);
emitter.emit('end'); // don't work!