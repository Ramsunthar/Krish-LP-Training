const algorithm = require("./algorithm");

var string_1 = "care";
var string_2 = "race";

var array_1 = algorithm.mergeSort(string_1.split(""));
var array_2 = algorithm.mergeSort(string_2.split(""));


if(array_1.toString()===array_2.toString()) {
  console.log("It is anagram");
}
else {
  console.log("It is not anagram");
}