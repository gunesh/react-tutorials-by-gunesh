//  "use strict"
var x = 10;
function fun1() {
  y = 100;
  console.log(x);
}
fun1();
console.log(y);

// Closure Start
function ClosureFunction() {
  var xc;
  function inc() {
    xc++;
  }
  function val() {
    console.log(xc);
  }
  function init() {
    xc = 0;
  }
  init();
  return {
    inc,
    val,
  };
}

var closureRef = ClosureFunction();
closureRef.inc();
closureRef.val();

closureRef.inc();
closureRef.val();

closureRef.inc();
closureRef.val();
// Closure END

// IIFF START
var xy = 10;
(function () {
  var yx = 10;
  console.log('IIFE', xy);
})();
// console.log(yx)  // Not defined
// IIFF END

// IIFF Namespace Start
var stuNs = (function () {
  function getName() {
    console.log('Get Name');
  }
  function getAge() {
    console.log('Get Age');
  }
  function getDob() {
    console.log('Get DOB');
  }
  return {
    getName,
    getAge,
  };
})();
stuNs.getName();
// IIFF Namespace END

// Inheritance Start   // Prototypinng
function Employee(name) {
  this.name = name;
  this.name = function () {
    console.log('Name', name);
  };
  this.timesheet = function () {
    console.log('Timesheet');
  };
  this.task = function () {
    console.log('Development');
  };
}

function Manager() {
  this.task = function () {
    console.log('Project Manager');
  };
}
var emp = new Employee('Indra');
Manager.prototype = emp;

var man = new Manager('Mandar');
man.name();
man.timesheet();
man.task();
// Inheritance END

// Let Example Start
function TestLet() {
  let letx = 10;
  if (true) {
    let letx = 1000;
    console.log(letx);
  }
  console.log(letx);
}
TestLet();
// Let Example End

//
function LetVar() {
  var varlet = 10;
  if (true) {
    console.log(varlet);
    varlet = 20;
    console.log(varlet);
  }
  console.log(varlet);
}
LetVar();
//

var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 4, 6];
console.log(x);
var a = x.map((item) => item * 2);
console.log(a);
var y = x.filter((item) => item > 5);
console.log(y);
var b = x.map((item) => item).filter((abc, index, self) => [self[index], abc]);
console.log(b);
const abc = 1500;
if (true) {
  const abc = 2500;
  console.log(abc);
}
console.log(abc);

// Capgemin

const initState = {
  name: 'Gunesh',
  age: '10',
};
const getName = () => {
  return 'Hello India';
};

initState.Prototype = getName;
console.log(initState);

getName.bind(initState);
console.log(getName.bind(initState));
