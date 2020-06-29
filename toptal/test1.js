function solution(A) {
	var set = new Set();

	for (let i = 0; i < A.length; i++) {
		if (!set.has(A[i])) {
			set.add(A[i]);
		}

	};

	var set_counter = 0
	var map = new Map();

	while (set.size > 0 && set_counter < A.length) {
		if (set.has(A[set_counter])) {
			set.delete(A[set_counter]);
		}


		if (!map.has(A[set_counter])) {
			map.set(A[set_counter], 1)
		} else {
			var existing = map.get(A[set_counter]);
			existing++;
			map.set(A[set_counter], existing);
		}

		set_counter++;
	}

	var start = 0 
	var end = set_counter - 1;
	var smallest_length_now = end - start + 1;

	while (end < A.length) {
		var existing_count = map.get(A[start])
		if (existing_count > 1) {
			existing_count--;
			map.set(A[start], existing_count);
			start++;
			if (end - start + 1 < smallest_length_now) {
				smallest_length_now = end - start + 1
			}
		} else {
			end++
			var another_existing = map.get(A[end]);
			another_existing++;
			map.set(A[end], another_existing);
		}
	}

	return smallest_length_now
}
