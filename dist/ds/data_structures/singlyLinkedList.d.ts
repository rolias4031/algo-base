export declare class SinglyLinkedList {
    head: any;
    tail: any;
    length: number;
    constructor(data: any[]);
    push(val: any): this;
    pop(): any;
    shift(): any;
    unshift(val: any): this;
    get(index: number): any;
    set(index: number, val: any): boolean;
    reverse(): this;
    print(): void;
    private NodeClass;
}
