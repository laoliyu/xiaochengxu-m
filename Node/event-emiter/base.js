const EventEmiter = require('events');

class Ev extends EventEmiter{};

const ev = new Ev();

ev.on('open',() => {
  console.log('open event');
})

ev.on('open',() => {
  console.log('open event');
})

setTimeout(() => {
  ev.emit('open');
}, 2000);
