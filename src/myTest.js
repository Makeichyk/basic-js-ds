
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




const myQ = new Queue();