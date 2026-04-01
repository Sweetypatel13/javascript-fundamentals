
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

//print array in reverse:
let arr2 = [1, 2, 3, 4, 5, 6];
function printReverse(arr2){
    console.log("Reverse Array:");
    for (let i=arr2.length-1;i>=0;i--){
        console.log(arr2[i]);
    }
}
printReverse(arr2);

//multiply each element:

function multiplyByFive(data4){
    let result=[];
    for (let i=0;i<data4.length;i++){
        result.push(data4[i]*5);
    }
    return result;
}
let a4=[2,4];
console.log("Multiply By 5:",multiplyByFive(a4));

//find minimum
function findMin(data5){
    let min = data5[0];
    for(let i=1;i<data5.length;i++){
        if(data5[i]<min){
            min=data5[i];

        }
    }
    return min;
}
let a5=[8,3,6,1];
console.log(findMin(a5));

//print positive numbers:
function printPositive(data6){
    for(let i = 0; i < data6.length; i++){
        if(data6[i] > 0){
            console.log(data6[i]);
        }
    }
}

let a6 = [-2, 5, -1, 7];
printPositive(a6);

//count > 10:
function countGreater(data7) {
    let count = 0;
    for (let i = 0; i < data7.length; i++) {
        if (data7[i] > 10) {
            count++;
        }
    }
    return count;
}

let a7 = [5, 12, 20, 8];
console.log(countGreater(a7));

//make negative:
function makeNegative(data8) {
    let result = [];
    for (let i = 0; i < data8.length; i++) {
        result.push(-Math.abs(data8[i]));
    }
    return result;
}

let a8 = [2, -4, 5];
console.log(makeNegative(a8));

//index+value:
function printIndexValue(data9) {
    for (let i = 0; i < data9.length; i++) {
        console.log("Index " + i + " : " + data9[i]);
    }
}

let a9 = [10, 20];
printIndexValue(a9);