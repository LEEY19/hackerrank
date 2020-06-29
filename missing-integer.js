function solution(A) {
	var arr = A.sort((a,b) => a-b);
	if (arr[0] > 1) {
		return 1;
	}

	for (let i = 0; i < arr.length; i++) {
		var diff = arr[i + 1] - arr[i];
		if (diff > 1) {
			if (arr[i] + 1 > 0) {
				return arr[i] + 1;
			} else if (arr[i+1] - 1 > 0) {
				return 1;
			}
		}
	}

	if (arr[arr.length - 1] + 1 > 0) {
		return arr[arr.length - 1] + 1
	} else {
		return 1
	}
}
