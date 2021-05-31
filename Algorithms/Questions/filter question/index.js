//imports
var BubbleSort = require("./bubblesort");
var findASCII = require("./findASCII");
var GenerateObject = require("./generateObject");

//file reading package
const fs = require("fs");

var arr = [];//intial array of names

//reading file from text file
const readFile = fs.readFileSync("./name.txt", "utf8");
arr = readFile.split("\r\n");

//getting numerical values for strings
var array = GenerateObject.generateObject(arr);
console.log("before sorting");
console.log(array);
console.log("after sorting");

//sorting the arrray
var sortedArray = BubbleSort.bubbleSort(array);
console.log(sortedArray);
