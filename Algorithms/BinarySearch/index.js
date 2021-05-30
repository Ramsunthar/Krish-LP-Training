function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
        
            return middle;
        } else if (sortedArray[middle] < key) {
          
            start = middle + 1;
        } else {

            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}

var a=[4,8,2,6,9,1,7]
var arr = binarySearch(a,7)
console.log(arr)