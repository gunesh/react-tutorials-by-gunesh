// const = await fetch("url").then(()=>{ fetch("url2")})

// ar1  [1-5]

// ar2 =  [4,5,6,7]

// ar3 = ar1.map(item=>item).filter()

var x = [1, 2, 3, 4, 5, 6, 7];
var y = [2, 4, 6, 8, 10];

x.forEach(function (i) {
  if (y.indexOf(i) < 0) {
    y.push(i);
  }
});
