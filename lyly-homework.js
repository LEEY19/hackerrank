function first(arr) {
	var map = new Map();
	// var reverse_map = new Map();
	for (let i = 0; i < arr.length; i++) {
		map.set(arr[i], i);
		// reverse_map.set(i, arr[i]);
	}

	var ori_arr = new Array(...arr);
	var sorted_arr = arr.sort();

	var counter = 0;

	for (let i = 0; i < ori_arr.length; i++) {
		const index_of_sor = map.get(sorted_arr[i]);
		const ori_val = ori_arr[i]
		if (sorted_arr[i] !== ori_val) {
			counter++;
			ori_arr[index_of_sor] = ori_val;
			// ori_arr[i] = i;

			map.set(ori_val,index_of_sor);
			map.set(sorted_arr[i],i);
			console.log(map)
		}
	}

	return counter
}

function second(arr) {
	var map = new Map();
	// var reverse_map = new Map();
	for (let i = 0; i < arr.length; i++) {
		map.set(arr[i], i);
		// reverse_map.set(i, arr[i]);
	}

	var ori_arr = new Array(...arr);
	var sorted_arr = arr.sort((a,b) => b-a);

	var counter = 0;

	for (let i = 0; i < ori_arr.length; i++) {
		const index_of_sor = map.get(sorted_arr[i]);
		const ori_val = ori_arr[i]
		if (sorted_arr[i] !== ori_val) {
			counter++;
			ori_arr[index_of_sor] = ori_val;
			ori_arr[i] = i;

			map.set(ori_val,index_of_sor);
			map.set(sorted_arr[i],i);
		}
	}

	return counter
}

function lilysHomework(arr) {
	var fir = first(arr)
	var sec = second(arr)
	if (fir > sec) {
		return sec
	} else {
		return fir
	}
}


console.log(lilysHomework([2,5,3,1]))