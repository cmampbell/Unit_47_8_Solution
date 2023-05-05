/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    // breadth first search, only need to find shortest path
    if (this.root == null) return 0;
    const queue = [this.root];

    let minDepth = 1;
    // tracks the right most node in the tree
    // if the current node equals this node we know
    // we reached the end of the current tree layer
    let breadthEndNode = this.root

    while (queue.length) {
      const current = queue.shift();
      // if no left or right, end the search
      if (!current.left || !current.right) {
        return minDepth;
      } else {
        queue.push(current.left)
        queue.push(current.right)
      }

      if (current == breadthEndNode) {
        minDepth++
        breadthEndNode = current.right
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root == null) return 0;
    const queue = [this.root];

    let maxDepth = 0;
    // tracks the right most node in the tree
    // if the current node equals this node we know
    // we reached the end of the current tree layer
    let breadthEndNode = this.root

    while (queue.length) {
      const current = queue.shift();
      // if no left or right, end the search
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }

      // if we reach the last node in a layer
      // or the queue empty because
      // no nodes after the current one
      if (current == breadthEndNode || queue.length === 0) {
        maxDepth++
        breadthEndNode = current.right
      }
    }

    return maxDepth
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (this.root === null) return 0;

    // allows us to know when we hit the root node
    const root = this.root

    function _calculateBranchSum(node) {
      // base case
      if (!node) return 0;

      // get max Sum of left and right child nodes
      let leftSum = _calculateBranchSum(node.left)
      let rightSum = _calculateBranchSum(node.right)

      // if we are at the root, add both sums together
      // this gives path descending left and right nodes from root
      if (node === root) {
        return leftSum + rightSum + node.val
      }

      // between left and right path, which was larger
      let max = Math.max(leftSum, rightSum);

      // add the larger child sum to the current node and return
      // sending us from the leaf to the root on both ends of the tree
      return max + node.val
    }

    return _calculateBranchSum(this.root)
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(this.root === null) return null

    const stack = [this.root]

    // use this variable keep track of the value closest to lowerBound
    // using Infinity here because it is larger than any number
    let closestValue = Infinity

    while(stack.length){
      let current = stack.pop()

      // if value is smaller than lowerBound we do nothing, continue loop
      if(current.val > lowerBound){
        if(Math.abs(current.val - lowerBound) < closestValue){
          closestValue = current.val
        }
      }

      if(current.left){
        stack.push(current.left)
      }
      if(current.right){
        stack.push(current.right)
      }
    }

    // if closestValue is still infinity we know
    // there is no node in tree larger than lowerBound
    if(closestValue === Infinity) return null

    return closestValue
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
