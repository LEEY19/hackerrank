function find_angle2(AB,BC) {
	var rad = Math.PI + Math.atan2(AB.x * BC.y - AB.y * BC.x, AB.x * AB.y + BC.x * BC.y);
	return rad * (180 / Math.PI);
}

function produceV(A,B) {
	return {x: B.x - A.x, y: B.y - A.y};
}

function compare(angle) {
	if (angle > 180 && angle !== 360) {
		return true;
	} else {
		return false;
	}
}

function solution(A) {
	var len = A.length;
	var angle2 = 0;

	for (let i=1; i < len - 1;i++) {
		var angle = find_angle2(produceV(A[i-1],A[i]), produceV(A[i],A[i+1]));
		// console.log(angle)
		if (compare(angle)) {
			return i;
		}
	};

	angle2 = find_angle2(produceV(A[len-2],A[len-1]), produceV(A[len-1],A[0]));

	if (compare(angle2)) {
		return len - 1;
	}

	angle2 = find_angle2(produceV(A[len-1],A[0]), produceV(A[0],A[1]));

	if (compare(angle2)) {
		return 0;
	}

	return -1;
}

var array = [[-1, 3], [1, 2], [1, 1], [3, 1], [0, -1], [-2, 1], [-1, 2]];

console.log(solution(array));