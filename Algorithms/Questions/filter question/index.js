var QS = require("./quicksort");
var BS = require("./bubblesort");

var arr = ["ba", "ab", "ca", "de","ac"];
var a = [];

const ASCIIVal = (string) => {
  let count = 0;
  let val = string.toLowerCase();
  for (let i = 0; i < val.length; i++) {
    count += val.charCodeAt(i);
  }
  return count;
};

// ASCIIVal(arr[0]);

const obj = (array) => {
  let val = 0;
  for (let i = 0; i < array.length; i++) {
    val = ASCIIVal(array[i]);
    a.push({ name: array[i], value: val });
  }
};
obj(arr);
console.log(a);
console.log("after sorting");

var sortedArray = BS.bubbleSort(a);
console.log(sortedArray)

//To retrieve the value;
//To add the value;
//append the object;
//Sorting
