(() => {
    console.log('start');

    const even_or_odd = is_even => {
        return function () {
            const type = Math.floor(Math.random() * Math.floor(10));
            let new_arr = [];
            const arg = is_even;//odd=1, even=0
            let result = null;

            function mars() {
                function helper(self) {
                    self.map(
                        (item) => {
                            if (item % 2 === arg)
                                new_arr.push(item);
                        })
                    return new_arr;
                }
                result = helper(this);
                console.log(new_arr);
            };
            switch (type) {
                case 0:
                    process.nextTick(mars.bind(this));
                    break;
                case 1:
                    setImmediate(mars.bind(this));
                    break;
                case 2:
                    setTimeout(mars.bind(this), 0);
                    break;
                case 3:
                    queueMicrotask(mars.bind(this));
                    break;
                case 4:
                    const test = new Promise(resolve => {
                        setImmediate(mars.bind(this));
                        resolve();
                    });
                    test.then(() => { })
                        .catch((err) => console.log('error in Promise'));
                    break;
                case 5:
                    const rxjs = require('rxjs');
                    const { of, from } = rxjs;
                    const { map, filter, mergeMap } = require('rxjs/operators');//rxjs.operators;
                    const emits = from(this).pipe(
                        map((item) => {
                            if (item % 2 === arg)
                                new_arr.push(item);
                        })
                    )
                        .subscribe(
                            i => {
                                // console.log('nothing to do');
                            },
                            i => { console.log('error occured'); },
                            i => {
                                setImmediate(() => {
                                    console.log(new_arr);
                                });
                            }

                        );
                    break;
                default:
                    console.log('Done with Async & await')
                    async function helper() {
                        try {
                            await mars.bind(this);
                        }
                        catch (error) {
                            console.log('Error occured:', error)
                        }
                    }
                    helper();
            }
        }
    };
    Array.prototype.even = even_or_odd(1);
    Array.prototype.odd = even_or_odd(0);
    const arr = [1, 2, 3, 4];
    arr.odd();
    arr.even();
    console.log('end');

})()