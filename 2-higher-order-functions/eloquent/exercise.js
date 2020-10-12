// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

arrays.reduce((a, c) => {
  a.concat(c);
  return a;
}, []);

// Your code here.
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.

function loop(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1

// Challenge 3. Everything

// using some

function every(array, test) {
  return array.reduce((a, c) => a && [c].some((e) => test(e)), true);
}

// using loop

function every2(array, test) {
  let output = true;
  for (let num of array) {
    output = output && test(num);
  }
  return output;
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true


