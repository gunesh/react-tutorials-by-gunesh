console.log('=================== Closure Example=================');
var counter = (function (arg) {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function (arg) {
      changeBy(arg);
    },
    decrement: function (arg) {
      changeBy(arg);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); 
counter.increment(200);
console.log(counter.value()); 
counter.increment(50);
console.log(counter.value()); 
counter.decrement(-10);
console.log(counter.value()); 
