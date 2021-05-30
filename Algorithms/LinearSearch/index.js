function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            return i
        }
    }
    return -1
}

var a=[2,7,5,8,3,1,3];
 var arr = linearSearch(a,3);
 console.log(arr);