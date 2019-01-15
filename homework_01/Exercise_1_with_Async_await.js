async function filteredWords(arr){
    const helper = function (self) {
        arr.map(
            (item) => {
                self = self.replace(item, '***');
            }
        )
        return self;
    }
    const self=this;
    try{
        console.log('Before filtering the words');
        let result = await helper(self);
        console.log(result);
        console.log('After filtering the words');
    }
    catch(error){
        console.log('Error occured: ',error);
    }
};
String.prototype.filterWords = filteredWords;
let test = "This house is nice";
let bannedWords = ["house", "nice"];
console.log(test.filterWords(bannedWords));
console.log('I will run before end of filterWords function');
