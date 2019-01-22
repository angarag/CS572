(function () {

    async function filteredWords(arr) {
        const self = this;
        const helper = function (self) {
            arr.map(
                (item) => {
                    self = self.replace(item, '***');
                }
            )
            return self;
        }
        const new_string = helper(self);
        const promise = function () {
            return new Promise(function (resolve, reject) {
                if (new_string === self.toString()) {
                    reject(self.toString());
                }
                else
                    resolve(new_string);
            });
        }
        promise()
            .then((n) => { console.log('some words are filtered: ', n); })
            .catch((i) => { console.log('no word is filtered: ', i); });
        console.log('I will run before Promise resolution');
    };
    String.prototype.filterWords = filteredWords;
    const test = "This house is nice";
    const bannedWords = ["house", "nice"];
    console.log(test.filterWords(bannedWords));
    console.log('Test 2')
    const bannedWords1 = ["house1", "nice1"];
    console.log(test.filterWords(bannedWords1));
    console.log('Finish')

})()
