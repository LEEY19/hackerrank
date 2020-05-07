const findUniqueSubstrings = (str) => {
  const arr = [...str].reduce((acc, _, idx) =>
    acc.concat(Array.from({length: str.length - idx}, (_, innerIdx) => 
      str.substring(idx, idx + innerIdx + 1)
    )), [])
  return new Set(arr);
}

const psi = (str1, str2) => {
  const arr1 = str1.split("")
  const arr2 = str2.split("")
  for (let x = 0; x < arr1.length - 1; x++) {
    for (let y = x + 1; y < arr1.length; y++) {
      if (arr1[x] == arr1[y] && arr2[x] != arr2[y]) {return false}
      if (arr1[x] != arr1[y] && arr2[x] == arr2[y]) {return false}
    }
  }
  return true
}

const provideMap = (set) => {
  var map = new Map();
  set.forEach(currentValue => {
    var curr_len = currentValue.length;
    if (map.has(curr_len)) {
      var curr_arr = map.get(curr_len)
      curr_arr.push(currentValue)
      map.set(curr_len, curr_arr)
    } else {
      map.set(curr_len,[currentValue])
    }
  })
  return map
}

function pseudoIsomorphicSubstrings(s) {
  var end = [1]
  for (let i = 2; i <= s.length; i++) {
    var total = 0;
    var map = provideMap(findUniqueSubstrings(s.substring(0, i)));
    map.forEach((value, key) => {
      if (key != 1) {
        var sub_tot = value.length;
        total += sub_tot;
        var x = 0, y = x + 1;
        while (x < sub_tot - 1) {
          while (y < sub_tot) {
            if (psi(value[x],value[y])) {
              total -= 1;
              x += 1;
              y = x + 1;
            } else {
              y += 1
            }
          }
          x += 1;
          y = x + 1;
        }
      } else {
        total += 1
    }})
  end.push(total)
  }
  return end
}

console.log(pseudoIsomorphicSubstrings("abbabab"))