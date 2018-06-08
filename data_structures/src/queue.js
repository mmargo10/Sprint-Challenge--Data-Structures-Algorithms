class Queue {
    constructor() {
        this.storage = [];
    }

    enqueue() {
        this.storage.push();
    }

    dequeue() {
        return this.storage.shift();
    }

    isEmpty() {
        return this.storage.length === 0;
    }
}

module.exports = Queue;