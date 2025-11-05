const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according node task description
 * using this from extensions
 */
const isEmpty = (obj) => obj === undefined || obj === null;
class BinarySearchTree {
  root() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  add(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  find(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  has(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  remove(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  min() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  max() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
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
