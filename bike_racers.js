function dist(A, B) {
  return Math.pow(A[0] - B[0],2) + Math.pow(A[1] - B[1],2);
}

function bikeRacers(bikers, bikes, k) {
  var N = bikers;
  var M = bikes;
  var smaller = null, bigger = null;
  if (N < M) {
    smaller = N;
    bigger = M;
  } else {
    smaller = M;
    bigger = N
  }
  var sm_set = new Set(smaller);
  var bi_set = new Set(bigger);

  var dist_array = [];

  sm_set.forEach((sm_val) => {
    var curr_lowest_dist = Math.pow(10,14);
    var closest_point = null;
    bi_set.forEach((bi_val) => {
      var distance = dist(sm_val, bi_val);
      if (distance < curr_lowest_dist) {
        curr_lowest_dist = distance;
        closest_point = bi_val;
      };
    });

    dist_array.push(curr_lowest_dist);
    bi_set.delete(closest_point);
  });

  dist_array.sort((a,b) => a-b);
  // console.log(dist_array)
  return dist_array[k-1];
  
}

var bikers = [[0,1],[0,2],[0,3]];
var bikes = [[100,1],[200,2],[300,3]];
var k = 2;

var bikers = [[145,862],[533,105],[34,192],[897,656]];
var bikes = [[902,518],[78,108],[658,369],[127,364]];
var k = 2;
var this_set = new Array(1,2,3);
var then_set = new Array(...this_set)
// then_set.add(4)
console.log(then_set)

// console.log(dist([897,656], [902,518]))

// for (let i = 0; i < bikes.length; i++) {
//   console.log(dist([897,656],bikes[i]))
// }