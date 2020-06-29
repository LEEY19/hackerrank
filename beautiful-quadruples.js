

// function spx(a1,b2,c3,d4) {
// 	var sum = a1 + b2 + c3 + d4;
// 	var prod = a1 * b2 * c3 * d4;	
// 	var xor = a1 ^ b2 ^ c3 ^ d4;
// 	return [sum, prod, xor]
// }

// console.log(spx(1,1,2,1))

// function beautifulQuadruples(a, b, c, d) {
// 	var a1 = 1, a2 = 1, a3 = 1, a4 = 1;
// 	var set_attr = new Set();
// 	var beau = new Set();

// 	for (let a1 = 1; a1 <= a; a1++) {
// 		for (let b2 = 1; b2 <= b; b2++) {
// 			for (let c3 = 1; c3 <= c; c3++) {
// 				for (let d4 = 1; d4 <= d; d4++) {
// 					var xor = a1 ^ b2 ^ c3 ^ d4;
// 					if (xor !== 0) {
// 						//string method
// 						var str = [a1, b2, c3, d4].sort().join(",");
// 						if (!set_attr.has(str)) {
// 							set_attr.add(str);
// 						}
// 						//sum, prod method
// 						// var sum = a1 + b2 + c3 + d4;
// 						// var prod = a1 * b2 * c3 * d4;
// 						// if (!set_attr.has(`${sum}, ${prod}, ${xor}`)) {
// 						// 	set_attr.add(`${sum}, ${prod}, ${xor}`);
// 						// }
// 					}
// 				}
// 			}
// 		}
// 	}
// 	// console.log(set_attr)
// 	return set_attr.size
// }

function beautifulQuadruples(a, b, c, d) {
	// var a1 = 1, a2 = 1, a3 = 1, a4 = 1;
	var set_attr = new Set();
	var beau = new Set();

	var sorted_arr = [a,b,c,d].sort();
	var counter = 0 

	for (let a1 = 1; a1 <= sorted_arr[0]; a1++) {
		for (let b2 = a1; b2 <= sorted_arr[1]; b2++) {
			for (let c3 = b2; c3 <= sorted_arr[2]; c3++) {
				for (let d4 = c3; d4 <= sorted_arr[3]; d4++) {
					var xor = a1 ^ b2 ^ c3 ^ d4;
					if (xor !== 0) {
						counter++;
					}
				}
			}
		}
	}
	// console.log(set_attr)
	return counter
}



console.log(beautifulQuadruples(41,43,44,48))

// var arr = [3,2,1]
// console.log([3,2,1].sort())

