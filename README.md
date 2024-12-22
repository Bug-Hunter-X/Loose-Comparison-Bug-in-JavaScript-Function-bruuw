# Loose Comparison Bug in JavaScript

This repository demonstrates a common, yet subtle, bug in JavaScript related to loose comparison (==) and type coercion.  The `foo` function aims to handle `null` and `undefined` inputs specifically, but it falls short due to how loose equality works.

## The Bug

The issue lies in the `if (x == null)` check.  While this seems like it would only match `null` and `undefined`, loose comparison in JavaScript can lead to unexpected behavior.  Other falsy values like `0`, `""`, and `false` will also satisfy this condition, resulting in unintended consequences.

## Solution

The provided solution uses strict equality (`===`) to explicitly check for `null` and `undefined`, fixing the unintended behavior.

## How to reproduce

1. Clone this repository
2. Run the `bug.js` file using a JavaScript runtime (like Node.js).
3. Observe the unexpected output for the input `'abc'`
4. Run the `bugSolution.js` to see the corrected implementation.