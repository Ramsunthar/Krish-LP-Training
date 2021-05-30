const merge = (arr1, arr2) => {
  let sorted = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
    else sorted.push(arr2.shift());
  };

  return sorted.concat(arr1.slice().concat(arr2.slice()));
};


const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2),
      left = mergeSort(arr.slice(0, mid)),
      right = mergeSort(arr.slice(mid));

  return merge(left, right);
};


var text1 = "care";
var text2 = "race";

var arr1 = mergeSort(text1.split(""));
var arr2 = mergeSort(text2.split(""));


if(arr1.toString()===arr2.toString()) {
  console.log("It is anagram");
}
else {
  console.log("It is not anagram");
}