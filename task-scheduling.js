function taskScheduling(d, m) {
	const len = d.length;
	var tot_arr = [];
	for (let i = 0; i < len; i++) {
		var total =  m[i] - d[i];
		tot_arr.push([total, d[i], m[i]]);
	}
	var latest_delay = 0;
	var time = 1;

	//Sort first method
	var arrDesc = tot_arr.sort((a,b) => b[0]-a[0]);

	while (arrDesc.length > 0) {
		var curr_array = arrDesc[0];
		var task_left = curr_array[2] - 1;
		if (task_left === 0) {
			if (time - curr_array[1] > latest_delay) {
				latest_delay = time - curr_array[1];
			} 
			arrDesc.splice(0,1)

		} else {
			var new_arr = [curr_array[0] - 1, curr_array[1], task_left];
			var look_far = 0;

			while (arrDesc[look_far + 1] && arrDesc[look_far + 1][0] > curr_array[0] - 1 && look_far < arrDesc.length) {
				look_far++;
			}

			if (look_far > 0) {
				arrDesc[0] = arrDesc[look_far];
				arrDesc[look_far] = new_arr;
			} else {
				arrDesc[0] = new_arr;
			}
		}

		time++;
	}

	return latest_delay;

}

var d = [2,1,4,10,2]
var m = [2,1,3,1,1]

console.log(taskScheduling(d,m))