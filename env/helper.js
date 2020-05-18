var fs = require('fs');


//line by line
function readLines(input, funcString) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      funcString(line);
      index = remaining.indexOf('\n');
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      funcString(remaining);
    }
  });
}

//few lines by few lines 
function readFewLines(input, no_of_lines) {
  var remaining = '';
  var arr = new Array(no_of_lines);

  input.on('data', function(data) {
    remaining += data;
    var index = 1;
    while (index > -1) {
      for (let i = 0; i < no_of_lines; i++) {
        var index = remaining.indexOf('\n');
        var line = remaining.substring(0, index);
        arr[i] = line;
        remaining = remaining.substring(index + 1);
      }
      if (index > -1) {
        numberAndArray(arr);
      }
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      arr[no_of_lines - 1] = remaining
      numberAndArray(arr);
    }
  });
}

function outputLine(string1, string2) {
  // console.log(toIntegerArray(string));
}


var input = fs.createReadStream('lines.txt');

// readLines(input, funcString);
readFewLines(input, 2);

//Helper functions
function funcString(string) {
  console.log(toIntegerArray(string));
}

function toIntegerArray(string) {
  return string.split(" ").map((val) => parseInt(val));
}

function numberAndArray(arr) {
  console.log([parseInt(arr[0]), toIntegerArray(arr[1])])
}

//




