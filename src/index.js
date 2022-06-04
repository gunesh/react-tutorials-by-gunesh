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

console.log(counter.value()); // 0
counter.increment(200);
counter.increment(-90);
console.log(counter.value()); // 2
counter.decrement(1);
console.log(counter.value()); // 1
