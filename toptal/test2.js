function solution(A, S) {
	var first_pos = 0
	// var length = 1;
	var no_sub_arr = 0;
	while (first_pos < A.length) {
		var curr_sum = A[first_pos];
		if (curr_sum === S) {
			no_sub_arr++;
		}
		var curr_total = 1;
		for (let i = curr_total; i < A.length; i++) {
			curr_sum += A[i];
			curr_total++
			if (curr_sum/curr_total === S) {
				no_sub_arr++
			}
		}
		first_pos++
	}
	
	return no_sub_arr
}

console.log(solution([2,1,3,4,5,90],2))