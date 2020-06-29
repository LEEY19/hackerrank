function hackerlandRadioTransmitters(x, k) {
  var storage = [];
  var counter = 0;

  x.sort((a,b) => a - b);

  while (x.length > 0) {
    storage.push(x[0]);
    x.splice(0, 1);

    if (x.length === 0) {
      counter++;
    } else {
      if (storage[0] + k < x[0]) {
        counter++;
        // storage = [];
        var swit = true;
        var post = storage[storage.length - 1];
        while (swit) {
          if (post + k >= x[0]) {
            x.splice(0, 1);
          } else {
            swit = !swit;
          }
        }
        storage = [];
      }
      
    }

  }

  return counter;

}