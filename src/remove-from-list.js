const { NotImplementedError } = require("../lib/errors");
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} list
 * @param {Number} valueToRemove
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, valueToRemove) {
  while (list.value == valueToRemove) list = list.next;
  let node = list;
  while (node.next) node.next.value == valueToRemove ? (node.next = node.next.next) : (node = node.next);
  return list;
}

module.exports = {
  removeKFromList,
};
