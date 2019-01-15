(function() {
  let isWeekend = function() {
    const todayDate = new Date();
    const day = todayDate.getDay();
    console.log(day);
    const weekDay = {
      0: "weekend",
      1: "weekday",
      2: "weekday",
      3: "weekday",
      4: "weekday",
      5: "weekday",
      6: "weekend"
    };
    return weekDay[day];
  };

  console.log(isWeekend());
})();
