function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length-i-1; j++) {
			if (array[j].value > array[j + 1].value ) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
			//checking the string order (when numbers are equal)
			if(array[j].value == array[j + 1].value) {
				if(array[j].name > array[j + 1].name) {
					let temp1 = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp1;
				}
			}
		}
	}
	return array;
}

module.exports= {bubbleSort};