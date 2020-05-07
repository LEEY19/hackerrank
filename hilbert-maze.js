function maze(N, map) {
  var positions = [
    [1,1],
    [1,2],
    [1,3],
    [2,3],
    [3,3],
    [3,2],
    [3,1]
  ];

  const type = [0,1,2,3];
  var i = 1;
  if (N == 1) {
    for (let i = 0; i < positions.length; i++) {
      let x = positions[i][0];
      let y = positions[i][1];
      var existing = map.get(y);
      existing[x] = 1;
      map.set(y, existing);
    }
  } else {
    while (i < N) {
      all_array = [];
      var n2 = Math.pow(2,i+1);
      for (let a = 0; a < type.length; a++) {
          
        for (let b = 0; b < positions.length; b++) {
          let x, y;

          switch (type[a]) {
          case 0: /* case A: left-bottom */
              x = positions[b][1]; 
              y = positions[b][0]; 
              break;

          case 1: /* case B: left-upper */
              x = positions[b][0];
              y = positions[b][1] + n2;
              break;

          case 2: /* case C: right-upper */
              x = positions[b][0] + n2;
              y = positions[b][1] + n2;
              break;

          case 3: /* case D: right-bottom */
              y = n2 - positions[b][0];
              x = 2*(n2) - positions[b][1];
              break;
          }
          all_array.push([x, y]);
          if (i == N - 1) {
            var existing = map.get(y);
            existing[x] = 1;
            map.set(y, existing);
          }
        }
      }
      positions = all_array;
      i += 1;
    }
  }
  if (N > 1) {
    const m = Math.pow(2, N);
    var arr1 = map.get(m);
    arr1[1] = 1; arr1[2*m - 1] = 1;
    map.set(m, arr1);
    var arr2 = map.get(m + 1);
    arr2[m] = 1;
    map.set(m + 1, arr2);
  }
  return map;
}

function formMaze(N) {
  var size = Math.pow(2,N+1) + 1;
  var map = new Map()
  for (let i=0; i<size; i++) {
    map.set(i,Array(size).fill(0))
  }
  map = maze(N, map);
  return map;
}

function isValid(x, y, M, map) {
  return (y < M) && (y >= 0) && (x < M) && (x >= 0) && (map.get(y)[x] === 0)
}

function isVisited(x, y, map) {
  var arr = map.get(y);
  arr[x] = 1;
  map.set(y, arr);
  return map;
}

function solution(N, A, B, C, D) {
  const M = Math.pow(2,N+1) + 1;
  var counter = 0;
  var map = formMaze(N);
  map = isVisited(A, B, map);
  var found = false;
  var set = [];
  set.push({coor: [A,B], prevDir: null});
  // {coor: [x,y], prevDir: 'left'}

  // up, down, left, right
  var directions2 = [[0,1,'down'],[0,-1,'up'],[-1,0,'right'],[1,0,'left']];
  outer:
  while (!found) {
    var temp_len = set.length
    counter += 1;
    for (let i=0;i<temp_len;i++) {
      if (!found) {
      let {coor, prevDir} = set[0];
      let x = coor[0];
      let y = coor[1];
      switch (prevDir) {
      case 'up': 
          directions2.splice(0, 1);
          break;

      case 'down':
          directions2.splice(1, 1);
          break;

      case 'left':
          directions2.splice(2, 1);
          break;

      case 'right':
          directions2.splice(3, 1);
          break;
      }
      // var found = found
      // console.log(x , y, v.prevDir, directions2)
      for (let i=0;i<directions2.length;i++) {
        var new_x = x + directions2[i][0];
        var new_y = y + directions2[i][1];
        if (new_x == C && new_y == D) {
          console.log("found")
          found = !found;
          break outer;
        }
        var isitValid = isValid(new_x, new_y, M, map);
        if (isitValid) {
          set.push({coor: [new_x, new_y], prevDir: directions2[i][2]})
          map = isVisited(new_x, new_y, map);
        }
      }
      directions2 = [[0,1,'down'],[0,-1,'up'],[-1,0,'right'],[1,0,'left']];
      set.splice(0,1);
      }
    // console.log(set)
    // console.log(map)
    // console.log("set lop")
    }
  }

  return counter;
}

// N = 3
console.log(solution(3,6,6,10,13))
// N = 2
// console.log(solution(2,2,5,6,6));
// N = 1
// console.log(solution(1,2,1,3,4));
