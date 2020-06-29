function almostSorted(arr) {
  var storage = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1] || arr[i] < arr[i - 1]) {
      storage.push([i, arr[i]])
    }
  }

  // console.log(storage)

  if (storage.length === 0) {
    console.log("yes");
  } else if (storage.length === 1) {
    if (arr[storage[0][0] + 2] > storage[0][1] || !!!arr[storage[0][0] + 2]) {
      console.log("yes");
      console.log("swap " + arr[storage[0][0] + 1] + " " + arr[storage[0][0]]);
    } else {
      console.log("no");
    }
  } else if (storage.length === 2) {
    if (storage[0][0] + 1 === storage[1][0]) {
      if (arr[storage[0][0] + 2] > storage[0][1] || !!!arr[storage[0][0] + 2]) {
        console.log("yes");
        console.log("swap " + arr[storage[0][0] + 1] + " " + arr[storage[0][0]]);
      } else {
        console.log("no");  
      }
    } else {
      if (arr[storage[1][0] + 1] > storage[0][1] && arr[storage[0][0] + 1] > storage[1][1]) {
        console.log("yes");
        console.log("swap " + storage[1][1] + " " + storage[0][1]);
      } else {
        console.log("no");   
      }
    }
  } else {
    var swit = true;
    for (let i = 0; i < storage.length - 1; i++) {
      if (storage[i][0] + 1 !== storage[i + 1][0]) {
        swit = !false
      }
    }

    var start = storage[storage.length - 1][1]
    var end = storage[0][1]

    if (swit) {
      if (storage.length === 3) {
        console.log("yes");
        console.log("swap " + start + " " + end);
      } else {
        console.log("yes");
        console.log("reverse " + start + " " + end);
      }
    } else {
      console.log("no");
    }
  }

}

var arr = [1, 5, 4, 3, 2, 6]
almostSorted(arr)