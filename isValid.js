function isValid(s) {
  var arr = s.split("");
  var map = new Map();
  var set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      var existing = map.get(arr[i]);
      map.set(arr[i], existing + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  var another_map = new Map();

  map.forEach(val => {
    set.add(val);
    if (another_map.has(val)) {
      var existing = another_map.get(val);
      another_map.set(val, existing + 1);
    } else {
      another_map.set(val, 1);
    }
  })

  // var sorted_map = new Map([...another_map.entries()].sort((a, b) => b[1] - a[1]));

  var pairs = [];
  another_map.forEach((val, key) => {
    pairs.push([key, val]);
  })


  pairs.sort((a,b) => {
    return b[0] - a[0]
  });

  console.log(pairs)
  if (set.size >= 3) {
    return "NO"
  } else if (set.size === 1) {
    return "YES"
  } else {
    if ((pairs[0][1] === 1) && (pairs[0][0] - 1 === pairs[1][0])) {
      return "YES";
    } else if (pairs[1][1] === 1 && (pairs[1][0] + 1 === pairs[0][0] || pairs[1][0] - 1 === 0)) {
      return "YES";
    } else {
      return "NO"
    }
  }
}


console.log(isValid("ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"))