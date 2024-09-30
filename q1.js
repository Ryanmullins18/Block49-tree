// Begin by defining a Node class for the individual nodes in the binary tree, 
// each containing a value and pointers for the left and right nodes. 
// Following this, write an inorder function that receives a tree's root node as an 
// argument and prints the node values in an inorder sequence. To test your solution, 
// establish a binary tree containing nodes with integer values [1,2,3,4,5]. 
// Invoke the inorder function to check the output [4,2,5,1,3]. 

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function inorder(root) {
    let stack = [];
    let curr = root;
  
    while (curr !== null || stack.length > 0) {
      while (curr !== null) {
        stack.push(curr);
        curr = curr.left;
      }
  
      curr = stack.pop();
      console.log(curr.data);
  
      curr = curr.right;
    }
  }
 
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  inorder(root);

  console.log(inorder)