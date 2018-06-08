Add your answers to the Algorithms exercises here.

1. a) O(n) = O(n^3 / n^2)

b) O(log n)

c) O(sqrt(n))

d) O(n log n)

e) O(n^3)

f) O(n)

g) O(n)

2. a) function maxDiff(arr) {
    let min = arr[0];
    let maxDiff = 0;

    arr.forEach(val => {
        min = Math.min(min, val);
        maxDiff = Math.max(maxDiff, val - min);
    });

    return maxDiff;
}

b) 
