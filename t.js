


function solution (X, Y) {
  const len = X.length;

  var map = new Map();
  for (let i = 0; i < len; i++) {
    if(map.has(Y[i])) {
      var existing_set = map.get(Y[i]);
      existing_set.add(X[i])
      map.set(Y[i], existing_set);
    } else {
      var new_set = new Set();
      new_set.add(X[i]);
      map.set(Y[i], new_set);
    }
  }
  var mapAsc = new Map([...map.entries()].sort());

  var counter = 0;
  var newMap = new Map(mapAsc)
  // console.log(mapAsc)
  mapAsc.forEach((highXSet, highY, map) => {
    if (map.has(highY)) {newMap.delete(highY)};
    highXSet.forEach((outVal) => {
      // console.log("1st", outVal, highY)

      mapAsc.forEach((lowXSet, lowY) => {
        lowXSet.forEach((inVal) => {

          // console.log("2nd", inVal, lowY)
          if (inVal < outVal) {
            const hor_diff = outVal - inVal;
            if (lowXSet.has(outVal + hor_diff)) {
              var ver_diff = lowY - highY;
              const newY = lowY + ver_diff;
              if (newMap.has(newY) && newMap.get(newY).has(outVal)) {
                counter += 1
              }
            }

          }
        })
      })
    })

  })
  return counter
  // console.log(mapAsc)
  // console.log(newMap)
}

console.log(solution([1, 1, 2, 2, 2, 3, 3],[3, 4, 1, 3, 5, 3, 4]))