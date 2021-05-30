// var value;
const missingNumber = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1] - 1) {
      console.log("missing number is ", arr[i] + 1);
    }
  }
};
var array = [3, 4, 5,  7, 8];
missingNumber(array);
