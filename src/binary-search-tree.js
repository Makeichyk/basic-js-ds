const { NotImplementedError } = require("../extensions/index.js");

// const { this } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according node task description
 * using this from extensions
 */
const isEmpty = (obj) => obj === undefined || obj === null;
class BinarySearchTree {
  constructor(data, parent) {
    this.data = data || null;
    this.left = null;
    this.right = null;
    this.parent = parent || null;
  }

  root() {
    return this.parent ? this.parent.root() : isEmpty(this.data) ? null : this;
  }

  add(data) {
    if (isEmpty(this.data)) {
      this.data = data;
      return null;
    }

    if (data > this.data) {
      if (!isEmpty(this.right)) {
        this.right.add(data);
        return null;
      }
      this.right = new BinarySearchTree(data, this);
    }

    if (data <= this.data) {
      if (!isEmpty(this.left)) {
        this.left.add(data);
        return null;
      }
      this.left = new BinarySearchTree(data, this);
    }
  }

  has(data) {
    const foundElement = this.find(data);
    return !isEmpty(foundElement);
  }

  find(data) {
    const root = this.data;

    if (isEmpty(root)) {
      return null;
    }

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

  replaceWith(node) {
    if (isEmpty(this.parent)) {
      this.data = node.data;
      this.left = node.left;
      this.right = node.right;
      return null;
    }

    this.parent.left = this.parent?.left === this ? node : this.parent?.left;
    if (!isEmpty(node)) {
      node.parent = this.parent;
    }
    this.parent.right = this.parent?.right === this ? node : this.parent?.right;
    this.parent = node;
  }

  remove(data) {
    const root = this.data;

    if (isEmpty(root)) {
      return null;
    }

    const nodeToRemove = this.find(data);
    if (isEmpty(nodeToRemove)) {
      return null;
    }

    if (isEmpty(nodeToRemove.right) && isEmpty(nodeToRemove.left)) {
      nodeToRemove.replaceWith(undefined);
    }

    if (!isEmpty(nodeToRemove.left)) {
      const leftMaxNode = nodeToRemove.left.maxNode();

      if (leftMaxNode !== nodeToRemove.right) {
        leftMaxNode.right = nodeToRemove.right;
        nodeToRemove.right.parent = leftMaxNode;
      }

      if (leftMaxNode !== nodeToRemove.left) {
        leftMaxNode.left = nodeToRemove.left;
        nodeToRemove.left.parent = leftMaxNode;
      }

      nodeToRemove.replaceWith(leftMaxNode);
      return null;
    }

    if (!isEmpty(nodeToRemove.right)) {
      const rightMaxNode = nodeToRemove.right.maxNode();

      rightMaxNode.right = nodeToRemove.left;

      if (!isEmpty(nodeToRemove.left)) {
        nodeToRemove.left.parent = rightMaxNode;
      }

      nodeToRemove.replaceWith(rightMaxNode);
      return null;
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
