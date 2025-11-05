const { NotImplementedError } = require("../lib/errors");
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.last = null;
    this.first = null;
  }

  getUnderlyingList() {
    return this.last;
  }

  enqueue(value) {
    const node = { value, next: null };

    if (!this.last) {
      this.last = node;
      this.first = node;
      return;
    }

    this.first.next = node;
    this.first = this.first.next;
  }

  dequeue() {
    if (!this.last) return undefined;

    const deleted = this.last.value;

    this.last = this.last.next;
    return deleted;
  }
}

module.exports = {
  Queue,
};
