// All search algorithms, exported in an object to be used in algoService.searchMap

function binarySearch(arr: number[], target: number): number {
  // takes a sorted array and returns the index of the target number.
  let l = 0;
  let r: number = arr.length - 1;
  while (l <= r) {
    const mid: number = Math.floor((l + r) / 2);
    if (target > arr[mid]) {
      l = mid + 1;
    } else if (target < arr[mid]) {
      r = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

export const searchAlgos = {
  binarySearch,
  linearSearch,
};
