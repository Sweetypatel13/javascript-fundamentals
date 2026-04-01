
// Print odd numbers:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function printOdd(arr) {
  console.log('odd numbers:');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
}
printOdd(arr);

//count odd numbers:
let arr1 = [1, 2, 3, 4, 5, 6];
function countOdd(arr1) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}
console.log('Count Odd:', countOdd(arr1));