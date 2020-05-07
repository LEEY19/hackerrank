function solution(A, X) {
  // console.log("ff")
  var map = new Map();
  for (let i = 0; i < A.length; i++) {
    if (map.has(A[i])) {
      var existing_count = map.get(A[i]);
      existing_count += 1;
      map.set(A[i], existing_count);
    } else {
      map.set(A[i], 1);
    }
  }

  var overall_counter = 0;
  map.forEach((value, key) => {
    if (value < 2) {map.delete(key)};
  })
  var mapAsc = new Map([...map.entries()].sort());
  var new_map = new Map(mapAsc);
  mapAsc.forEach((value,key, mapp) => {
    var sub_counter = 0;
    var thres = Math.ceil(X/key);
  // console.log(thres)
    if (key >= thres && mapp.get(key) >= 4) {sub_counter += 1};
    new_map.delete(key);
    new_map.forEach((value, key) => {
      if (key >= thres) {sub_counter += 1}
    })
    overall_counter += sub_counter;
  })
  return overall_counter;
}

console.log(solution([1, 2, 5, 1, 1, 2, 3, 5, 1], 5))