function foo(x) {
  if (x === null || x === undefined) {
    return 0; // handle null and undefined explicitly
  } else if (isNaN(x)) {
    return -1; // handle NaN
  } else {
    return x * 2; // normal case
  }
}

console.log(foo(null));   // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo(NaN));   // Output: -1
console.log(foo(5));    // Output: 10
console.log(foo('abc')); //Output: NaN
console.log(foo(0)); //Output: 0
console.log(foo(false)); //Output: 0