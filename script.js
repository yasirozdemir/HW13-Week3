let x = "John";
let y = "Doe";

console.log(x, y);

let obj = {
  name: "Muhammed Yasir",
  surname: "Ozdemir",
  email: "yasirozdmr@gyandex.com",
};

delete obj.email;
console.log(obj);

let arrayOf10 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

for (let string of arrayOf10) {
  console.log(string);
}

function randomNumbers(range) {
  let numArr = [];
  for (let i = 1; i <= range; i++) {
    numArr.push(Math.floor(Math.random() * 1000) + 1);
  }
  return numArr;
}

function getMaxAndMin() {
  let numArr = randomNumbers(100);
  let min = Math.min(...numArr);
  let max = Math.max(...numArr);

  console.log(
    `Max value in the array is ${max}, min value in the array is ${min}`
  );
}

getMaxAndMin();

function arrayOfArraysCreator() {
  let arrayOfArrays = [];
  for (let i = 1; i <= 10; i++) {
    arrayOfArrays.push(randomNumbers(10));
  }
  console.log(arrayOfArrays);
}

arrayOfArraysCreator();

function findTheLongestArray(array1, array2) {
  if (array1.length > array2.length) {
    console.log("array1 is longer");
  } else {
    console.log("array2 is longer");
  }
}

let array1 = randomNumbers(5);
let array2 = randomNumbers(8);

findTheLongestArray(array1, array2);

function findTheHighestSum(array1, array2) {
  let sumOfArray1 = 0;
  for (let index of array1) {
    sumOfArray1 += index;
  }
  let sumOfArray2 = 0;
  for (let index of array2) {
    sumOfArray2 += index;
  }
  if (sumOfArray1 > sumOfArray2) {
    console.log("Sum of array1 is greater");
  } else {
    console.log("Sum of array1 is greater");
  }
}

findTheHighestSum(array1, array2);
