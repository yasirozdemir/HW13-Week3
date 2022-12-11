// ex 21

let x = "John";
let y = "Doe";

console.log(x + "<>" + y);

// ex 22

let obj = {
  name: "Muhammed Yasir",
  surname: "Ozdemir",
  email: "yasirozdmr@gyandex.com",
};

// ex 23

delete obj.email;
console.log(obj);

// ex 24

let arrayOf10 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

// ex 25

for (let string of arrayOf10) {
  console.log(string);
}

// ex 26

function randomNumbers(range) {
  let numArr = [];
  for (let i = 1; i <= range; i++) {
    numArr.push(Math.floor(Math.random() * 1000) + 1);
  }
  return numArr;
}

// ex 27

function getMaxAndMin() {
  let numArr = randomNumbers(100);
  let min = Math.min(...numArr);
  let max = Math.max(...numArr);

  console.log(
    `Max value in the array is ${max}, min value in the array is ${min}`
  );
}

getMaxAndMin();

// ex 28

function arrayOfArraysCreator() {
  let arrayOfArrays = [];
  for (let i = 1; i <= 10; i++) {
    arrayOfArrays.push(randomNumbers(10));
  }
  console.log(arrayOfArrays);
}

arrayOfArraysCreator();

// ex 29

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

// ex 30

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

// ex 46

for (let data of tableData) {
  data.addEventListener("click", function () {
    data.style.backgroundColor = `rgb(${randomizeBackgroundColor()})`;
  });
}

// ex 48

for (let data of tableData) {
  data.addEventListener("mouseover", function () {
    data.classList.add("pink-border");
  });
}

// ex 33

for (let data of tableData) {
  console.log("Inner text of td elements:", data.innerText);
}

// ex 34

function changeHeading() {
  let heading = document.getElementsByTagName("h1")[0];
  heading.innerText = "This is the changed heading using JS :)";
}

// ex 35

function addAnExtraRow() {
  let table = document.getElementsByClassName("table")[0];
  let newRow = document.createElement("tr");
  newRow.innerText = "This is the new row";
  table.appendChild(newRow);
}

// ex 36

function addClassToRows() {
  let rows = document.getElementsByTagName("tr");
  for (let row of rows) {
    row.classList.add("test");
  }
}

// ex 37

function addRedBackgroundToLinks() {
  let aLinks = document.getElementsByTagName("a");
  for (let link of aLinks) {
    link.style.backgroundColor = "red";
  }
}

// ex 38

function onLoadActions() {
  console.log("Page successfully loaded!");
}

window.onload = onLoadActions;

// ex 39

function addItemsToUnorderedList() {
  let unorderedList = document.getElementsByTagName("ul")[0];

  let newItem = document.createElement("li");
  newItem.innerText = "this is the new item added using js";
  unorderedList.appendChild(newItem);
}

// ex 40

function emptyTheList() {
  let orderedList = document.getElementsByTagName("ol")[0];
  let orderedListItems = document.querySelectorAll("ol li");

  for (let item of orderedListItems) {
    // or innerHTML = ""
    orderedList.removeChild(item);
  }
}

// ex 41

let links = document.getElementsByTagName("a");
for (let link of links) {
  link.addEventListener("mouseover", function () {
    alert(link.getAttribute("href"));
  });
}

// ex 42

function hideImages() {
  let images = document.getElementsByTagName("img");

  for (let image of images) {
    image.classList.toggle("hide");
  }
}

// ex 43

function hideTable() {
  let table = document.querySelector("table");
  table.classList.toggle("hide");
}

// ex 44

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

// ex 45

function deleteTheLastLetterFromHeading() {
  let heading = document.getElementsByTagName("h1")[0];
  heading.addEventListener("click", function (event) {
    event.target.innerText = event.target.innerText.slice(0, -1);
  });
}
deleteTheLastLetterFromHeading();

// ex 47

function deleteRandomTD() {
  let random = Math.floor(Math.random() * tableData.length);
  let randomTD = tableData[random];

  let parent = tableData[random].closest("tr"); // finding the parent of random td

  parent.removeChild(randomTD);
}

// ex 49

function createTable() {
  let areaForNewTable = document.getElementsByClassName("new-table-div")[0]; // div selected

  let newTable = document.createElement("table"); // table created
  areaForNewTable.appendChild(newTable); // table appended

  for (let i = 1; i <= 4; i++) {
    let newTR = document.createElement("tr"); // tr created
    newTable.appendChild(newTR); // tr appended to the table
    for (let j = 1; j <= 3; j++) {
      let newTD = document.createElement("td"); // td created
      newTR.appendChild(newTD); // td appended
    }
  }
}

// ex 50

function deleteTable() {
  let areaForNewTable = document.getElementsByClassName("new-table-div")[0];
  let tableToBeDeleted = document.querySelectorAll(".new-table-div table")[0]; // TODO: how to find the last index

  tableToBeDeleted.innerHTML = ""; // deleting all related to html

  areaForNewTable.removeChild(tableToBeDeleted); // deleting the table
}
