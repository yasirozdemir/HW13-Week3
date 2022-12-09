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
  } else if (array1.length < array2.length) {
    console.log("array2 is longer");
  } else {
    console.log("lengths of array1 and array2 are equal");
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
  } else if (sumOfArray1 < sumOfArray2) {
    console.log("Sum of array1 is greater");
  } else {
    console.log("Sum of array1 and array2 are equal");
  }
}

findTheHighestSum(array1, array2);

//---------------------------DOM

function randomizeBackgroundColor() {
  let r = Math.floor(Math.random() * 255 + 1);
  let g = Math.floor(Math.random() * 255 + 1);
  let b = Math.floor(Math.random() * 255 + 1);

  return [r, g, b];
}

let container = document.getElementById("container");

let tableData = document.getElementsByTagName("td");

for (let data of tableData) {
  data.addEventListener("click", function () {
    data.style.backgroundColor = `rgb(${randomizeBackgroundColor()})`;
  });
}

for (let data of tableData) {
  data.addEventListener("mouseover", function () {
    data.classList.add("pink-border");
  });
}

function changeHeading() {
  let heading = document.getElementsByTagName("h1")[0];
  heading.innerText = "This is the changed heading using JS :)";
}

function addAnExtraRow() {
  let table = document.getElementsByClassName("table")[0];
  let newRow = document.createElement("tr");
  newRow.innerText = "This is the new row";
  table.appendChild(newRow);
}

function addClassToRows() {
  let rows = document.getElementsByTagName("tr");
  for (let row of rows) {
    row.classList.add("test");
  }
}

function addRedBackgroundToLinks() {
  let aLinks = document.getElementsByTagName("a");
  for (let link of aLinks) {
    link.style.backgroundColor = "red";
  }
}

function onLoadActions() {
  console.log("Page successfully loaded!");
}

window.onload = onLoadActions;

function addItemsToUnorderedList() {
  let unorderedList = document.getElementsByTagName("ul")[0];

  let newItem = document.createElement("li");
  newItem.innerText = "this is the new item added using js";
  unorderedList.appendChild(newItem);
}

function emptyTheList() {
  let orderedList = document.getElementsByTagName("ol")[0];
  let orderedListItems = document.querySelectorAll("ol li");

  for (let item of orderedListItems) {
    // or innerHTML = ""
    orderedList.removeChild(item);
  }
}

let links = document.getElementsByTagName("a");
for (let link of links) {
  link.addEventListener("mouseover", function () {
    alert(link.getAttribute("href"));
  });
}

function hideImages() {
  let images = document.getElementsByTagName("img");

  for (let image of images) {
    image.classList.toggle("hide");
  }
}

function hideTable() {
  let table = document.querySelector("table");
  table.classList.toggle("hide");
}

function sumNumbersInTheTable() {
  let tableInnerData = document.querySelectorAll("td");
  let sumOfData = 0;

  for (let data of tableInnerData) {
    let dataInner = data.innerText;
    let dataInteger = parseInt(dataInner);

    if (!isNaN(dataInteger)) {
      sumOfData += dataInteger;
    }
  }
  return sumOfData;
}

function deleteTheLastLetterFromHeading() {
  let heading = document.getElementsByTagName("h1")[0];
  heading.addEventListener("click", function (event) {
    event.target.innerText = event.target.innerText.slice(0, -1);
  });
}

deleteTheLastLetterFromHeading();

function deleteRandomTD() {
  let random = Math.floor(Math.random() * tableData.length);
  let randomTD = tableData[random];

  let parent = tableData[random].closest("tr"); // finding the parent of random td

  parent.removeChild(randomTD);
}

function createTable() {
  let areaForNewTable = document.getElementById("new-table-div"); // div selected

  let newTable = document.createElement("table"); // table created
  areaForNewTable.appendChild(newTable);
}

function removeTable() {}
