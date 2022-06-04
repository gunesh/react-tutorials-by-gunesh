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

function Spead(user) {
  alert(`Bye, ${user}!`);
}


function Test() {
  console.log(arguments)
}

export {Test, Closure, Curring };
