function selectionSort(inputArr) { 
    var n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        var min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             var tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

var arr= [6,89,4,2,1,67,3,-532,2,6];
var sortedArray = selectionSort(arr);
console.log(sortedArray);
