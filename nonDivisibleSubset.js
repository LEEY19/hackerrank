function counter(x, map) {
  if (map.has(x)) {
    var existing = map.get(x);
    map.set(x, existing + 1);
  } else {
    map.set(x , 1);
  }

  return map;
}

function nonDivisibleSubset(k, s) {
  var pair_arr = [];
  var no_counter = new Map();
  
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if ((s[i] + s[j]) % k === 0) {
        pair_arr.push([s[i], s[j]]);
        no_counter = counter(s[i], no_counter);
        no_counter = counter(s[j], no_counter);
      }
    }
  }

  var sorted_map = new Map([...no_counter.entries()].sort((a, b) => b[1] - a[1]));
  var keys = Array.from(sorted_map.keys());

  // console.log(pair_arr)

  var keys_counter = 0
  while (pair_arr.length > 0) {
    for (let i = 0; i < pair_arr.length; i++) {
      var contains = pair_arr[i].includes(keys[keys_counter]);
      // console.log(keys[keys_counter])
      if (contains) {
        // console.log(pair_arr)
        pair_arr.splice(i, 1);
        // console.log(pair_arr)
        i--;
      }
    }
    keys_counter++;
  }

  return s.length - keys_counter;

}

var s = [1,7,2,4]

console.log(nonDivisibleSubset(3, s))