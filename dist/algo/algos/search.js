"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAlgos = void 0;
function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (target > arr[mid]) {
            l = mid + 1;
        }
        else if (target < arr[mid]) {
            r = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target)
            return i;
    }
    return -1;
}
exports.searchAlgos = {
    binarySearch,
    linearSearch,
};
//# sourceMappingURL=search.js.map