"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.algorithms = void 0;
function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
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
exports.algorithms = {
    'binary-search': binarySearch
};
//# sourceMappingURL=algo.functions.js.map