function organizingContainers(container) {
  var row_set = new Set();
  var col_arr = new Array(container.length).fill(0);
  for (let i = 0; i < container.length; i++) {
    row_set.add(container[i].reduce((total, val, ind) => {
      col_arr[ind] = val + col_arr[ind];
      return total + val;
    }, 0));
  };
  
  for (let i = 0; i < col_arr.length; i++) {
    if (row_set.has(col_arr[i])) {
      row_set.delete(col_arr[i]);
    }
  }

  if (!!row_set.size) {
    return "Impossible";
  } else {
    return "Possible";
  }
}

// var arr = [ [ 1, 1 ], [ 1, 1 ] ]
var arr = [ [ 0, 2 ], [ 1, 1 ] ]

// arr[1] = 3
console.log(organizingContainers(arr))