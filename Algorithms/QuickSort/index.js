var arr = ["b",5,8,4.0,-9,3,1];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}


function partition(arr, left, right) {
    var pivotValue   = arr[Math.floor((right + left) / 2)], 
        i       = left, 
        j       = right; 
    while (i <= j) {
        while (arr[i] < pivotValue) {
            i++;
        }
        while (arr[j] > pivotValue) {
            j--;
        }
        if (i <= j) {

            var temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp
            
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

var sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray); 