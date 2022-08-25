export declare class DoublyLinkedList {
    head: any;
    tail: any;
    length: number;
    constructor(data: any[]);
    push(val: any): this;
    pop(): any;
    shift(): any;
    print(): void;
    unshift(val: any): this;
    get(index: number): any;
    set(index: number, val: any): boolean;
    insert(index: number, val: any): boolean;
    private NodeClass;
}
