const { Console } = require('console');

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.emit('TEST_EVENT');

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
});
// Streams are Event Emitters
// process.stdin, process.stdout
