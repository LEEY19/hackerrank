function cleanSocks(arr) {
  var set = new Set();
  var counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      set.delete(arr[i]);
      counter += 1
    } else {
      set.add(arr[i]);
    }
  }
  return [set, counter]
}

function dirtySocks(cleanSet, dirArr, K) {
  var counter = 0;
  var external_counter = 0;
  var leftoSet = new Set()
  for (let i = 0; i < dirArr.length && K > 0; i++) {
    external_counter += 1;
    if (cleanSet.has(dirArr[i])) {
      cleanSet.delete(dirArr[i]);
      counter += 1;
      K -= 1;
    } else {
      cleanSet.add(dirArr[i]);
    }
  }
  return counter
}

function solution(K, C, D) {
  var total_count = 0;
  var resultC = cleanSocks(C);
  total_count += resultC[1];
  var resultD = dirtySocks(resultC[0], D, K);
  total_count += resultD;
  return total_count;
}
