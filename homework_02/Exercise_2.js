(() => {
    console.log('start');

    const even_or_odd = is_even => {
        return function () {
            process.nextTick(() => {
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
                };
                result = helper(this);
                console.log(new_arr);
            });

        }
    };
    Array.prototype.even = even_or_odd(1);
    Array.prototype.odd = even_or_odd(0);
    const arr = [1, 2, 3, 4];
    arr.odd();
    arr.even();
    console.log('end');

})()