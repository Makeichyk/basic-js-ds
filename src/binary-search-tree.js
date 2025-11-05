const { NotImplementedError } = require("../lib/errors");
// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according node task description
 * using this from extensions
 */
const isEmpty = (obj) => obj === undefined || obj === null;

class BinarySearchTree {
  constructor(data, parent) {
    this.data = data || null;
    this.parent = parent || null;
    this.left = null;
    this.right = null;
  }

  root() {
    return this.parent ? this.parent.root() : isEmpty(this.data) ? null : this;
  }

  add(data) {
    if (isEmpty(this.data)) {
      this.data = data;
    }

    if (this.data > data) {
      if (isEmpty(this.left)) {
        this.left = new BinarySearchTree(data, this);
      } else {
        this.left.add(data);
      }
    }

    if (this.data < data) {
      if (isEmpty(this.right)) {
        this.right = new BinarySearchTree(data, this);
      } else {
        this.right.add(data);
      }
    }
  }

  find(data) {
    const root = this.data;

    if (isEmpty(root)) return null;

    if (data > root) {
      return this.right?.find(data) || null;
    }

    if (data < root) {
      return this.left?.find(data) || null;
    }

    if (root === data) {
      return this;
    }

    return null;
  }

  has(data) {
    return !isEmpty(this.find(data));
  }

  remove(data) {
    const root = this.data;
    if (isEmpty(root)) return null;

    const nodeToRemove = this.find(data);
    if (isEmpty(nodeToRemove)) return null;

    if (nodeToRemove.left === null && nodeToRemove.right === null) {
      if (nodeToRemove.parent === null) {
        this.data = null;
      } else if (nodeToRemove.parent.left === nodeToRemove) {
        nodeToRemove.parent.left = null;
      } else {
        nodeToRemove.parent.right = null;
      }
    }

    /** LEFT CASE */
    if (nodeToRemove.left && !nodeToRemove.right) {
      if (!nodeToRemove.parent) {
        // In root case
        this.data = nodeToRemove.left.data;
        this.right = nodeToRemove.left.right;
        this.left = nodeToRemove.left.left;
        if (this.left) this.left.parent = this;
        if (this.right) this.right.parent = this;
      } else if (nodeToRemove.parent.left === nodeToRemove) {
        // To the left of parent
        nodeToRemove.parent.left = nodeToRemove.left;
        nodeToRemove.left.parent = nodeToRemove.parent;
      } else {
        // To the right of parent
        nodeToRemove.parent.right = nodeToRemove.left;
        nodeToRemove.left.parent = nodeToRemove.parent;
      }
      return;
    }

    /** RIGHT CASE */
    if (!nodeToRemove.left && nodeToRemove.right) {
      if (!nodeToRemove.parent) {
        // Root case
        this.data = nodeToRemove.right.data;
        this.left = nodeToRemove.right.left;
        this.right = nodeToRemove.right.right;
        if (this.left) this.left.parent = this;
        if (this.right) this.right.parent = this;
      } else if (nodeToRemove.parent.left === nodeToRemove) {
        nodeToRemove.parent.left = nodeToRemove.right;
        nodeToRemove.right.parent = nodeToRemove.parent;
      } else {
        nodeToRemove.parent.right = nodeToRemove.right;
        nodeToRemove.right.parent = nodeToRemove.parent;
      }
      return;
    }

    /** BOTH CASE (find right min) */
    if (nodeToRemove.left && nodeToRemove.right) {
      const minRightNode = nodeToRemove.right.minNode();
      nodeToRemove.data = minRightNode.data;

      if (minRightNode.parent.left === minRightNode) {
        // To the left of parent
        minRightNode.parent.left = minRightNode.right || null;
        if (minRightNode.right) minRightNode.right.parent = minRightNode.parent;
      } else {
        // To the right of parent
        minRightNode.parent.right = minRightNode.right || null;
        if (minRightNode.right) minRightNode.right.parent = minRightNode.parent;
      }
    }
  }

  min() {
    return this.minNode().data;
  }

  max() {
    return this.maxNode().data;
  }

  minNode() {
    return this.left ? this.left.minNode() : this;
  }

  maxNode() {
    return this.right ? this.right.maxNode() : this;
  }
}

const myTree = new BinarySearchTree(6);
myTree.add(10);
myTree.add(2);
myTree.add(1);
myTree.add(3);
myTree.add(5);
myTree.add(9);
myTree.add(11);
console.log(myTree);
// console.log(myTree.remove(10));
// console.log(myTree);

module.exports = {
  BinarySearchTree,
};

assert = { strictEqual: console.log };

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);
tree.remove(6);
tree.remove(2);
assert.strictEqual(tree.min(), 1);
