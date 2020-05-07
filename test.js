const findUniqueSubstrings = (str) => {
  const arr = [...str].reduce((acc, _, idx) =>
    acc.concat(Array.from({length: str.length - idx}, (_, innerIdx) => 
      // console.log(`${idx}. ${idx + innerIdx + 1}`)
      str.substring(idx, idx + innerIdx + 1)
    )), [])
  return arr;
}

const produceMap = (arr) => {
  var map = new Map();
  for (let i  = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      var existing_val = map.get(arr[i]);
      map.set(arr[i], existing_val + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  return map;
}

// const occur = (str, t) => {
//   var len = str.length;
//   var count = 0;
//   for (let i=0; i<=t.length - len;i++) {
//     if (str === t.substring(i,i+len)) {
//       count += 1
//     }
//   }
//   return count;
// }

function maxValue(t) {
  var map = produceMap(findUniqueSubstrings(t));
  var maxVal = t.length;
  map.forEach((value, key) => {
    if (value >= 2 && key.length*value > maxVal) {maxVal = key.length*value}
  });
  return maxVal;
}

var str = "aaaaaa"
// console.log(maxValue("abcabcddd"));
console.log(maxValue(str))
// console.log([...str])