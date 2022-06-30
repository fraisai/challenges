/*

Find the tallest height of a binary search tree.

Ex. the tallest height of:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

is 3, because the tallest height of the tree connects the numbers 4 - 7 - 9 - 8
and has 3 links.

*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

const bstHeight = tree => {
  // empty node will return -1 to account for the 1 we add later
  if (!tree) return -1;

  const leftHeight = bstHeight(tree.left);
  const rightHeight = bstHeight(tree.right);

  return Math.max(leftHeight, rightHeight) + 1;
};
