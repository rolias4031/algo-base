declare function bubbleSort(arr: number[]): number[];
declare function insertionSort(arr: number[]): number[];
declare function mergeSort(arr: number[]): number[];
declare function quickSort(arr: number[], left?: number, right?: number): number[];
declare function radixSort(nums: number[]): number[];
export declare const sortAlgos: {
    bubbleSort: typeof bubbleSort;
    insertionSort: typeof insertionSort;
    mergeSort: typeof mergeSort;
    quickSort: typeof quickSort;
    radixSort: typeof radixSort;
};
export {};
