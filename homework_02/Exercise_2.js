(() => {
    console.log('start');

    const even_or_odd = is_even => {
        return function () {
            const type = Math.floor(Math.random() * Math.floor(4));

            function mars(){
                let new_arr = [];
                const arg = is_even;//odd=1, even=0
                let result = null;
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
            switch(type){
                case 1:
                setImmediate(mars.bind(this));
                break;
                case 2:
                setTimeout(mars.bind(this),0);
                break;
                case 3:
                queueMicrotask(mars.bind(this));
                break;
                default:
                process.nextTick(mars.bind(this));

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