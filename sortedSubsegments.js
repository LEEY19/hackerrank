function sortedSubsegments(k, a, queries) {
  for (let i = 0; i < queries.length; i++) {
    var first = a[queries[i][0]];
    var second = a[queries[i][1]];
    console.log(first, second)
    // console.log(second)

    a.splice(queries[i][0], 1, second);
    a.splice(queries[i][1], 1, first);
    console.log(a)
  }
  return a[k];
}

// var arr = [
//    500556062, -318433847, -308711627,  626864582,    7560063,  747603140,
//   -978050991,  493791453,  120293313, -684384425, -237121804,  671599611,
//   -745988438, -391644008, -987541986, -883318261,  398329848,  541220856,
//    929419299,  284946685,  463226319, -192892452, -787047859, -703696971,
//   -730274966,   17413072,  956962091, -274014501,   30770761,  391345111,
//   -717584150, -169787452, -639815898, -431184591,  279169691,  -63235311,
//   -565549718,   89982323,  416851061, -688457547, -556478536,  -21646692,
//    991764067, -260588013,  741233410,  483979516,   62265369, -315789854,
//   -160007501,  129880273,  569339654,  847890632,  673915246, -568788078,
//     22395649, -340370587,  432595319,   35807087, -803780864,  137904163,
//    263119077,  527269616,  547473075,  -27717949,    8982456,  768874604,
//    810449344,  -71163226, -836727032, -137822481,  211887346,  451527210,
//   -565694581, -520343635,  182227608,  528316993, -698325580, -786941111,
//   -679013421,   69709990,  519360087,  502481880,  747815101, -705629642,
//   -266831300, -836921481, -783814589, -899022171, -446392579, -633057986,
//    746343863,  416820612,  773685747, -519149420,  699691111,  213965749,
//    935664845,   59709162, -784175432, -806734378
// ]

// var q = [
//   [ 29, 42 ],
//   [ 12, 57 ],
//   [ 18, 32 ],
//   [ 7, 56 ],
//   [ 13, 64 ],
//   [ 4, 84 ],
//   [ 43, 67 ],
//   [ 0, 84 ],
//   [ 50, 67 ],
//   [ 6, 99 ],
//   [ 8, 46 ],
//   [ 48, 77 ],
//   [ 38, 78 ],
//   [ 76, 86 ],
//   [ 66, 68 ],
//   [ 54, 61 ],
//   [ 23, 86 ],
//   [ 36, 41 ],
//   [ 72, 84 ],
//   [ 59, 80 ],
//   [ 4, 25 ],
//   [ 37, 39 ],
//   [ 41, 83 ],
//   [ 46, 51 ],
//   [ 42, 89 ],
//   [ 15, 83 ],
//   [ 63, 74 ],
//   [ 34, 44 ],
//   [ 37, 45 ],
//   [ 47, 48 ],
//   [ 26, 48 ],
//   [ 9, 87 ],
//   [ 4, 48 ],
//   [ 6, 52 ],
//   [ 2, 90 ],
//   [ 24, 73 ],
//   [ 33, 86 ],
//   [ 16, 82 ],
//   [ 47, 49 ],
//   [ 39, 60 ],
//   [ 47, 92 ],
//   [ 8, 59 ],
//   [ 49, 67 ],
//   [ 81, 88 ],
//   [ 25, 62 ],
//   [ 39, 86 ],
//   [ 15, 94 ],
//   [ 26, 49 ],
//   [ 52, 56 ],
//   [ 2, 30 ],
//   [ 63, 88 ],
//   [ 20, 60 ],
//   [ 40, 45 ],
//   [ 82, 85 ],
//   [ 27, 48 ],
//   [ 33, 97 ],
//   [ 46, 81 ],
//   [ 62, 70 ],
//   [ 57, 64 ],
//   [ 33, 59 ],
//   [ 10, 34 ],
//   [ 52, 66 ],
//   [ 90, 97 ],
//   [ 8, 30 ],
//   [ 3, 9 ],
//   [ 49, 97 ],
//   [ 51, 96 ],
//   [ 5, 30 ],
//   [ 61, 74 ],
//   [ 36, 85 ],
//   [ 81, 96 ],
//   [ 6, 84 ],
//   [ 17, 58 ],
//   [ 53, 97 ],
//   [ 25, 95 ],
//   [ 69, 74 ],
//   [ 21, 70 ],
//   [ 13, 56 ],
//   [ 17, 60 ],
//   [ 4, 70 ],
//   [ 6, 75 ],
//   [ 19, 53 ],
//   [ 39, 85 ],
//   [ 0, 83 ],
//   [ 50, 79 ],
//   [ 19, 61 ],
//   [ 68, 87 ],
//   [ 21, 56 ],
//   [ 50, 82 ],
//   [ 2, 47 ],
//   [ 39, 95 ],
//   [ 0, 27 ],
//   [ 1, 13 ],
//   [ 50, 93 ],
//   [ 18, 67 ],
//   [ 0, 89 ],
//   [ 20, 30 ],
//   [ 54, 81 ],
//   [ 89, 96 ],
//   [ 70, 85 ]
// ]

var arr = [4, 3, 2, 1]
var q = [[0,2], [1,3]]

console.log(sortedSubsegments(0, arr, q))