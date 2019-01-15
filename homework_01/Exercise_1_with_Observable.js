(function () {
    const rxjs = require('rxjs');
    const { of, from } = rxjs;
    const { map, filter, mergeMap } = require('rxjs/operators');//rxjs.operators;
    String.prototype.filterWords = function (arr) {
        let text = this.toString();
        let new_text = [];
        const source = from(text.split(' '));
        const emits = source.pipe(
            map(
                (val) => {
                    if (arr.includes(val) === true) {
                        val = '***';
                    }
                    return val;

                }));
        const subscribtion = emits.subscribe(
            i => {
                new_text.push(i);
            },
            i => { console.log('error occured'); },
            i => {
                new_text.push(i);
                //  console.log('done'); 
            }
        );
        return new_text.join(' ').toString();
    };

    const test = "This house is nice";
    const bannedWords = ["house", "nice"];
    console.log(test.filterWords(bannedWords));
})();
