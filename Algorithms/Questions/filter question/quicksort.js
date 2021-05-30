function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }
  
  function partition(arr, left, right) {
    var pivotValue = arr[Math.floor((right + left) / 2)],
      i = left,
      j = right;
    while (i <= j) {
      while (arr[i].value < pivotValue.value) {
        i++;
      }
      // if(arr[i].value == pivotValue.value) {
      //     if(arr[i].name < pivotValue.name) {
      //         i++
      //     }
      //     else{
      //       var temp = arr[i];
      //       arr[i] = arr[j];
      //       arr[j] = temp;
      //     }
      // }
      while (arr[j].value > pivotValue.value) {
        j--;
      }
      if (i <= j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
  
        i++;
        j--;
      }
    }
    return i;
  }
  
  function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
      index = partition(arr, left, right);
      if (left < index - 1) {
        quickSort(arr, left, index - 1);
      }
      if (index < right) {
        quickSort(arr, index, right);
      }
    }
    return arr;
  }
  
  module.exports = {quickSort}