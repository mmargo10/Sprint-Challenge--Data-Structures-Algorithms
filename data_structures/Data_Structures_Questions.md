Add your answers to the questions below.

1. What is the runtime complexity of your `depthFirstForEach` method?

* O(n) because we are traversing the entire tree. As new nodes get added to the tree, the number of additional times we needto call 'depthFirstForEach'
increases linearly.

2. What is the space complexity of your `depthFirstForEach` function?

* O(n) regardless of whether we implemented our solution iteratively or recursively.

3. What is the runtime complexity of your `breadthFirstForEach` method?

* O(n)

4. What is the space complexity of your `breadthFirstForEach` method? 

* O(n)

5. What is the runtime complexity of your `heapsort` function?

* O(n*logn)

6. What is the space complexity of the `heapsort` function? Recall that your implementation should return a new array with the sorted data. What would be the space complexity if your function instead altered the input array?

* O(n) space. O(1) if we only altered the input.
