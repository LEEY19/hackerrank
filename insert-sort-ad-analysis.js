function insertionSort(arr) {
	var len = arr.length;
	var counter = 0;
	for (let a = 1; a < len; a++) {
		var prev = a - 1;
		while (arr[prev] > arr[a] && prev > -1) {
			counter++;
			prev--;
		// console.log(arr)
		}
		if (prev < a - 1 ) {
			const ori_a = arr[a];
			arr.splice(a, 1);
			arr.splice(prev + 1, 0, ori_a);
		}
	}
	return counter;
}

// var arr = [1, 1, 1, 2, 2]
// var arr = [2, 1, 3, 1, 2]
var arr = [2, 1, 3, 2, 1]

console.log(insertionSort(arr));