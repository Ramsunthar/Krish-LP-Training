function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}
const arr= ["b",5,8,4.0,"a",-9,3,1];
// const arr1=['Kugan','Ram',5,1KLD,10];
var arr3 = ['abc','12d',12,5,'kld',"3kld",5,1,"add","a"];
//no matter what we put it will sort it as a set(maybe string or primitive data type)
console.log(bubbleSort(arr3));