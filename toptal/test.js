function solution(T, R) {
  var first_str = T[0];
  var test_name_len = 0
  if (!parseInt(first_str.substring(first_str.length - 1))) {
  	test_name_len = first_str.length - 2;
  } else {
  	test_name_len = first_str.length - 1;
  }

  // console.log(test_name_len)
  var new_arr = T.map((val) => {
  	return parseInt(val.substring(test_name_len, test_name_len+1));
  })

  var new_map = new Map();
  for (let i = 0; i < new_arr.length; i++) {
  	// console.log(new_arr[i], R[i])
  	if (new_map.has(new_arr[i])) {
  		if (R[i] !== 'OK') {
  			new_map.set(new_arr[i],false);
  		}
  	} else {
  		 if (R[i] !== 'OK') {
  			new_map.set(new_arr[i],false);
  		} else {
  			console.log(i, new_arr[i], R[i])
  			// if (new_arr[i] !)
  			new_map.set(new_arr[i],true);
  		}
  	}
  }

  console.log(new_map)
  var true_counter = 0;
  new_map.forEach((val) => {
  	if (val) {
  		true_counter++;
  	}
  });
  const size_map = new_map.size;

  return Math.floor((true_counter/size_map)*100)

}

var T = ['test1a', 'test2', 'test1b', 'test1c', 'test3']
var R = ['Wrong answer', 'OK', 'Runtime error', 'OK', 'Time limit exceeded']


// var map = new Map()
console.log(solution(T,R))



