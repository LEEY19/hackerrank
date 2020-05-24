

function solution(str1, str2) {
  var arr1 = str1.split("");
  var arr2 = str2.split("");
  var map2 = new Map();
  var counter = 0;
  var str2_pos = 0;
  
  for (let i = 0; i < arr2.length; i++) {
    if (map2.has(arr2[i])) {
      var existing = map2.get(arr2[i]);
      existing.push(i);
      map2.set(arr2[i],existing);
    } else {
      map2.set(arr2[i],[i]);
    }
  }

  // console.log(map2)
  for (let i = 0; i < arr1.length; i++) {
    if (!map2.has(arr1[i])) {
      counter++;
    } else {
      var existing = map2.get(arr1[i]);
      var diff = existing[0] - str2_pos;
      // console.log(diff)
      if (diff > 0) {
        if (str2_pos === 0) {
          counter += existing[0]
        } else {
          counter += (existing[0] - str2_pos)
        }
      }
      str2_pos = existing[0] + 1;
      existing.splice(0, 1);
      if (existing.length === 0) {
        map2.delete(arr1[i]);
      } else {
        map2.set(arr1[i], existing);
      }
    }
  }

  counter += str2.length - str2_pos;
  return counter;
}

var str1 = "dog", str2 = "frog"

console.log(solution(str1,str2));