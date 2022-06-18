function BinarySearchTree(value) {
  this.root = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.add = function(value) {
  const leaf = new BinarySearchTree(value); 

  // if value is greater than current this.root, go to the right 
  if (value > this.root) {
    this.right === null ? this.right = leaf : this.right.add(value);
  } else {
    // if value is less then current node then assign to left
    this.left === null ? this.left = leaf : this.left.add(value);
  }
};

BinarySearchTree.prototype.contains = function(value) {
  // if the input value is equal to the root node of the BST, then return true
  if (this.root === value) return true;

  // if not, then figure out which side of the tree to check: left or right?
  
  // if the right side of the tree exists and input value is greater than root node, then we check on the right side of the tree
  if (this.right && value > this.root) {
    return this.right.contains(value);
  } else if (this.left && value < this.root) {
    return this.left.contains(value);
  } else {
    return false;
  }
};

// the numbers smaller than the root are on the left side of the BST
BinarySearchTree.prototype.min = function() {
  // if BST is empty, return null
  if (this.root === null) return null;

  // if there are no nodes on the left side of BST, then the root is the smallest number in BST
  if (this.left === null) return this.root;

  let min = this.left;

  // while min.left is not null, go to the next node on the left side of the BST
  while (min.left !== null) {
    min = min.left;
  }

  // return the min number aka min.root
  return min.root;
};

// the numbers greater than the root are on the right side of the BST
BinarySearchTree.prototype.max = function() {
  // if BST is empty, return null
  if (this.root === null) return null;

  // if there are no nodes on the right side of the BST, then the root is the largest number
  if (this.right === null) return this.root;

  let max = this.right;
  
  // while max.right is not null, go to the next node on the right side of the BST
  while (max.right !== null) {
    max = max.right;
  }

  // return the max number
  return max.root;
};

// TESTS
// const nocap = new BinarySearchTree(4);
// console.log(nocap);
// nocap.add(5);

// nocap.add(3);
// nocap.add(7);
// nocap.add(45);
// console.log(nocap)
// console.log(nocap.contains(7)); // should be true
// console.log(nocap.contains(11)); // should be false

// console.log(nocap.min());
// console.log(nocap.max());

module.exports = BinarySearchTree;
