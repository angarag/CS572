(function() {
  String.prototype.filterWords = function(arr) {
    let text = this.toString();
    arr.map(word => (text = text.replace(word, "***")));
    return text;
  };

  let test = "This house is nice";
  let bannedWords = ["house", "nice"];
  console.log(test.filterWords(bannedWords));
})();
