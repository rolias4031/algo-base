"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
class DoublyLinkedList {
    constructor(data) {
        this.NodeClass = class Node {
            constructor(val) {
                this.val = val;
                this.next = null;
                this.prev = null;
            }
        };
        this.head = null;
        this.tail = null;
        this.length = 0;
        for (const val of data) {
            this.push(val);
        }
    }
    push(val) {
        const newNode = new this.NodeClass(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head)
            return;
        const popped = this.tail;
        this.tail = popped.prev;
        this.tail.next = null;
        popped.prev = null;
        this.length--;
        return popped;
    }
    shift() {
        if (!this.head)
            return;
        const oldHead = this.head;
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
        this.length--;
        return oldHead;
    }
    print() {
        console.log('PRINTING');
        let node = this.head;
        let i = 0;
        while (i < this.length) {
            console.log(node);
            node = node.next;
            i++;
        }
    }
    unshift(val) {
        const newNode = new this.NodeClass(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        let count;
        let current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        }
        else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0)
            return !!this.unshift(val);
        if (index === this.length)
            return !!this.push(val);
        const newNode = new this.NodeClass(val);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;
        (beforeNode.next = newNode), (newNode.prev = beforeNode);
        (newNode.next = afterNode), (afterNode.prev = newNode);
        this.length++;
        return true;
    }
}
exports.DoublyLinkedList = DoublyLinkedList;
//# sourceMappingURL=DoublyLinkedList.js.map