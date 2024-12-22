function foo(x) {
  if (x == null) {
    return 0; // intended to handle null and undefined
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