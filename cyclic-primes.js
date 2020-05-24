function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

function numberOfCyclicP(N) {
  var counter = 0
  var set = new Set()
  for (let i = 2; i <= N; i++) {
    if (isPrime(i)) {
      set.add(i);
      if (i.toString().length === 1) {
        counter++;
      } else {
        var number = i.toString();
        var str = "";
        for (let x = number.length - 1; x >= 0; x--) {
          str += number.charAt(x);
        }
        const new_str = parseInt(str);
        if (set.has(new_str)) {
          if (new_str === i) {
            counter++
          } else {
            counter += 2
          }
        }
      }
    }
  }
  return counter
}

// console.log(numberOfCyclicP(200))
console.log(parseInt("002"))