---
title: Nondecreasing Monotonous Integers
filename: monotonic 
date: 2022-04-04T12:17:44
author: Jack Henry 
---

I've been involved in a fair amount of technical interviews lately. I've been asked a plethora of various problems. Most of them are straightforward. 

However, I recently encountered the same problem during two separate interviews for two separate companies.

The problem has an interesting solution which I struggled to discover at first. Therefore, I thought it might be valuable for myself and others if I try to outline the problem along with a solution.

The Problem
====
Given an integer `N`, determine the largest *nondecreasing monotonous integer* `y` where `y <= N`

Background
====
The keyword is *monotonous*. What does a *nondecreasing monotonous* integer entail? 

In mathematics, there exists the *monotonic* function. Quickly looking at wolfram alpha, we see the following definition:


> "A monotonic function ... is either entirely nonincreasing or nondecreasing. A function is monotonic if its first derivative (which need not be continuous) does not change sign."

In other words, if the function `f(x)` is monotonically nondecreasing, the value `f(A)` will be always be less than or equal to `f(B)` if `A < B`. 

*Note: [A formal explanation can be found on wikipedia.](https://en.wikipedia.org/wiki/Monotonic_function#In_calculus_and_analysis)*

A simple example of an *nondecreasing monotonous* function would be `f(x) = x` or any other linear function with a positive coefficient in front of `x`.

A *nondecreasing monotonous integer* follows the same spirit as a nondecreasing monotonic function. The following are examples of such integers:


- 123456789
- 12
- 2
- 1111111
- 02233467
- 3445


Each digit in the integer is less than or equal to its successor. (left to right)

Two Approaches
====

### The Time Inefficient Approach

The simplest and most straightforward approach to this problem would be to write some sort of algorithm that solves through brute force.

For example:

```
N = 987654321 // Upper bound for solution
solution = 0; // Variable which will hold the solution

for (i = 0; i <= N; i++) { 
  // Flag used to mark a possible solution as nondecreasing
  nondecreasing = True 
  for (j = 0; j < i - 1; j++) {
    // If the digit at index j is greater than digit at index j + 1,
    // the candidate cannot be nondecreasing
    if (N[j] > N[j + 1]) nondecreasing = False
  }
  // if nondecreasing hasn't been set to false, assign solution to i
  if (nondecreasing) solution = i 
}

print "Highest nondecreasing monotonous integer is " + solution
```

This approach works but it is inefficient. 

There are two loops and one is nested within the other. The time complexity of the outer loop is `Θ(N)`. The time complexity of the inner loop is `Θ(i)`. 

To extrapolate the time complexity of the entire algorithm, we multiple `Θ(N)` and `Θ(i)`. This results in `Θ(Ni)` or roughly `Θ(N²)` since the upper bound of `i` increases as `N` increases.

Ultimately, this approach to the problem is probably not what an interviewer wants to see. Brute force is rarely elegant.

*Note: I deliberately use Big-Θ notation instead of Big-O here. This is because both of the loop's time complexities are bounded by N. I feel this is an important distinction when analyzing time complexities of algorithms.*

### The Time Efficient Approach

First off, it's important to observe that a nondecreasing monotonous integer can be subdivided into integer pairs. The first integer of each pair is less than or equal to the second integer.

For example, here is `1234` subdivided into 3 integer pairs.

```
(1, 2), (2, 3), (3, 4) <-> 1234
```

With an integer that doesn't satisfy the requirements of nondecreasing monotonicity, we would get one or more integer pairs where the first integer is greater than the second.

For example, here is `4356` subdivided into 3 integer pairs. Notice that the pair `(4, 3)` is decreasing.

```
(4, 3), (3, 5), (5, 6) <-> 4356
```

In order to transform a non-monotonous integer into a nondecreasing monotonous integer, we must decrement the first integer of every decreasing pair. 


*This must be done in order from the right most pair to the left most pair.* If an integer is decremented, the second value in the next integer pair must be updated to reflect this change.

For `4356`, it is only necessary to perform the decrement operation on the first integer pair.

```
(4, 3) -> (3, 3)
```

After completing this first step in which decreasing pairs are decremented, we are left with the following integer:

```
3356 <-> (3, 3), (3, 5), (5, 6)
```

Now, starting with the integer on the right of the last decremented integer, we assign the remaining integers, moving to the right, to the value of `9`

```
3356 -> 3999
```

In this example, the first `3` was decremented last. Therefore, starting with the second digit, also `3`, we assign each digit to `9`. This leaves us with `3999` which is the solution to the problem when `N = 4356`.

Here is another example that requires multiple decrement operations:

```
N = 4764

// subdivide into pairs
(4, 7), (7, 6), (6, 4)

// starting from the right, we notice (6, 4) is decreasing
(4, 7), (7, 5), (5, 4) <-> 4754

// then, we notice (7, 5) is decreasing
(4, 6), (6, 5), (5, 4) <-> 4654

// starting with 6, assign remaining values to 9
(4, 6), (6, 9), (9, 9) <-> 4699

When N = 4764, the solution is 4699
```

Those two steps construct the approach to finding the largest nondecreasing monotonous integer which is less than or equal to `N`. 

Now, let's see it implemented in code. For my implementation, I chose to convert `N` into an array of ascii codes. This simplifies traversal and mutation of individual digits.

```ts
const N = 4764
// Convert the number into an array of one character strings
const strNumber = `${N}`.split('');
// Get the array of ascii codes
const s = strNumber.map((t) => t.charCodeAt(0)); 
// Number of digits in N
const n = s.length; 

// Marker used to track index of last decremented integer
let marker = n;
// From right to left, check for decreasing pairs
for (let i = n - 1; i > 0; --i) {
  // If true, a decreasing pair was found
  if (s[i] < s[i - 1]) {
    // decrement the first integer in the pair
    --s[i - 1];
    // update marker
    marker = i;
  }
}

// The integer at s[marker] is the integer immediately to the right
// of the last decremented integer. Starting from the marker index,
// assign remaining digits to 9
for (let i = marker; i < n; ++i) {
  s[i] = '9'.charCodeAt(0);
}

// Convert the array of ascii codes back to an integer
const largest = +String.fromCharCode(...s);
console.log(`Largest nondecreasing monotonous integer: ${largest}`);
```

With this algorithm, there are two loops where the majority of operations occur. The first loop has a time complexity of `Θ(n)` where `n` is the number of digits in `N`.

Similarly, the second loop also has a time complexity of `Θ(n)`.

Since the two loops are not nested, we simply add the time complexities of each loop to receive the overall time complexity of this algorithm. The result is `Θ(2n)` or simply `Θ(n)`.

I doubt there is a solution to this problem which would only require constant time. Therefore, this algorithm is as time efficient as any other optimal solution.

*Note: Again, I deliberately used Big-Θ notation here.*




