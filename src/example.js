function Closure() {
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
}

function Curring() {
  console.log('=================== Curring Example=================');
  (function (a) {
    console.log(a);
    return function (b) {
      console.log(a, b);
      return function (c) {
        console.log(a, b, c);
        return function (d) {
          console.log(a, b, c, d);
        };
      };
    };
  })(1)(2)(3)(4);
}

function Spead() {
  console.log('=================== Spread Example=================');
  let arr = [1, 2, 3];
  let arr2 = [4, 5, 6];
  console.log('With Spread:', [...arr, ...arr2]);
  console.log('Without Spread:', [arr, arr2]);
}

function Rest() {
  console.log('=================== Rest Example=================');
  function restExample(...restparams) {
    console.log('With Rest:', restparams);
  }
  function withoutRestExample(a, b, c) {
    console.log('Param:', a, b, c);
  }
  restExample(1, 2, 3, 5, 6, 7); // We can add/remove arguments any times
  withoutRestExample(4, 5, 6);
}

function Test() {
  console.log('=================== Argument Example=================');
  console.log(arguments);
}

export { Test, Closure, Curring, Spead, Rest };
