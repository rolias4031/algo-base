"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglyLinkedList = void 0;
class SinglyLinkedList {
    constructor(data) {
        this.NodeClass = class Node {
            constructor(val) {
                this.val = val;
                this.next = null;
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
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head)
            return;
        let prev;
        let cur = this.head;
        while (cur.next) {
            prev = cur;
            cur = cur.next;
        }
        prev.next = null;
        this.tail = prev;
        this.length--;
        return cur;
    }
    shift() {
        if (!this.head)
            return;
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }
    unshift(val) {
        const newNode = new this.NodeClass(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        let cur = this.head;
        let i = 0;
        while (i !== index) {
            cur = cur.next;
            i++;
        }
        return cur;
    }
    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
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
}
exports.SinglyLinkedList = SinglyLinkedList;
//# sourceMappingURL=SinglyLinkedList.js.map