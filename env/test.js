function commonChild(s1, s2) {
  var arr_s1 = s1.split("");
  var arr_s2 = s2.split("");
  const len = arr_s1.length;

  var map_s2 = new Map();
  var done_set = new Set();

  for (let i = 0; i < len; i++) {
    if (map_s2.has(arr_s2[i])) {
      var curr = map_s2.get(arr_s2[i]);
      curr.push(i);
      map_s2.set(arr_s2[i],curr);
    } else {
      map_s2.set(arr_s2[i],[i]);
    }
  }

  var existing_cand = [];

  console.log(map_s2)

  for (let i = 0; i < len; i++) {
    if (map_s2.has(arr_s1[i])) {
      var pos_arr = map_s2.get(arr_s1[i]);
      var deserve = true
      for (let x = 0; x < existing_cand.length; x++) {
        var sub_arr = existing_cand[x];
        var sub_arr_map = sub_arr[0]; 
        var sub_arr_len = sub_arr[1]; 
        var sub_arr_pos = sub_arr[2]; 

        // console.log(pos_arr)
        if (!sub_arr_map.has(arr_s1[i])) {
          if (pos_arr[0] > sub_arr_pos) {
            sub_arr_pos = pos_arr[0];
            sub_arr_len++;
            sub_arr_map.set(arr_s1[i],1)
            sub_arr = [sub_arr_map, sub_arr_len, sub_arr_pos];
            existing_cand[x] = sub_arr;
            deserve = false;
          }
        } else {
          var arr_pos = sub_arr_map.get(arr_s1[i]);
          var next_pos = pos_arr[arr_pos + 1];
          if (next_pos > sub_arr_pos) {
            sub_arr_pos = next_pos;
            sub_arr_len++;
            sub_arr_map.set(arr_s1[i],arr_pos + 1)
            sub_arr = [sub_arr_map, sub_arr_len, sub_arr_pos];
            existing_cand[x] = sub_arr;
            deserve = false;
          }
        }
      }
      console.log(arr_s1[i])
      if (deserve && !done_set.has(arr_s1[i])) {
        done_set.add(arr_s1[i])
        var new_map = new Map()
        new_map.set(arr_s1[i], 1);
        existing_cand.push([new_map, 1, pos_arr[0]]);
      }
    }
  }

  console.log(existing_cand)
  var longest = 0;
  for (let x = 0; x < existing_cand.length; x++) {
    if (existing_cand[x][1] > longest) {
      longest = existing_cand[x][1];
    }
  }

  return longest
}

// var arr = [1,2,3]
// var gg = 1, ggg = 2, gggg = 3
console.log(commonChild("SHINCHAN", "NOHARAAA"))




