



function highestValuePalindrome(s, n, k) {
	var arr = s.split("").map(val => parseInt(val));
	var stop_point = 0;
	if (n % 2 === 0) {
		stop_point = (n - 2)/2
	} else {
		stop_point = (n - 1)/2 - 1;
	}

	var tot_ind_arr = [];

	for (let i = 0; i <= stop_point; i++) {
		if (arr[i] !== arr[n - i - 1]) {
			tot_ind_arr.push(i);
		}
	}

	if (tot_ind_arr.length > k) {
		return -1;
	}

	var extra_steps = k - tot_ind_arr.length;

	for (let i = 0; i <= stop_point; i++) {
		if (i === tot_ind_arr[0]) {
			if (arr[i] === 9) {
				arr[n - i - 1] = 9;
			} else if (arr[n - i - 1] === 9) {
				arr[i] = 9;
			} else if (extra_steps >= 1) {
				arr[n - i - 1] = 9;
				arr[i] = 9;
				extra_steps-=1;
			} else {
				if (arr[i] > arr[n - i - 1]) {
					arr[n - i - 1] = arr[i];
				} else {
					arr[i] = arr[n - i - 1];
				}
			}
			tot_ind_arr.splice(0,1)
		} else {
			if (extra_steps >= 2) {
				arr[n - i - 1] = 9;
				arr[i] = 9;
				extra_steps-=2;				
			}
		}
	}

	if (n % 2 === 1 && extra_steps > 0) {
		arr[stop_point] = 9;
	}

	return arr.join("");

}

var s = "3943"
var n = 4
var k = 1

console.log(highestValuePalindrome(s,n,k))



// var arr = [1,2,3,4,5,6]
// console.log(arr[])