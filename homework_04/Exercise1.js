(() => {

    const rxjs = require('rxjs');
    const { of, from, Observable } = rxjs;
    const { map, filter, mergeMap } = require('rxjs/operators');//rxjs.operators;
    const os = require('os');
    function checkSystem(ram = 4, core = 2) {
        if (rxjs === null || rxjs === undefined) {
            console.log(`Please install RXJS module by running
        npm install rxjs
        `)
        }
        else {
            let result = true;
            const message = {
                init_message: `Checking your system...`,
                memory_not_enough: `This app needs at least 4 GB of RAM`,
                cpu_not_enough: `Processor is not supported`,
                ok: 'System is checked successfully'
            }
            console.log(message.init_message);
            const hello = Observable.create(function (observer) {
                observer.next({
                    cpu: Math.ceil(os.totalmem() / 1024 / 1024 / 1024)
                });
                observer.next({
                    ram: os.cpus()
                });
            });

            let subscription = hello.subscribe(val => {
                if (val.ram && val.ram < (ram)) {
                    console.log(message.memory_not_enough);
                    result = false;
                }
                if (val.cpu && val.cpu < (core + 1)) {
                    console.log(message.cpu_not_enough);
                    result = false;
                }
                //console.log('ram_check');
            })

            if (result)
                console.log(message.ok);

        }
    }
    checkSystem();
})()
