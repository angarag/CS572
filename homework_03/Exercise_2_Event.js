var EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor() {
        super();
        this.message = 'Hi!';
        setInterval(()=>{
            this.emit('boom', 'MUM student');    
        },1000);

    }
    feedBoom(message) {
        this.on('boom', function (name) {
            if(message)
            console.log(message);
            else
            console.log(`Welcome ${name}`);
        }) 
    }
}

var gym = new Gym();
gym.feedBoom('Athlete is working out');
gym.feedBoom();
