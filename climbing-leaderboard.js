
function climbingLeaderboard(scores, alice) {
	var score_map = new Map();
	var rank = 1
	for (let i = 0; i < scores.length; i++) {
		if (!score_map.has(scores[i])) {
			score_map.set(scores[i], rank)
			rank++;
		}
	}

	var arr = new Array();

	score_map.forEach((rank, score) => {
		arr.unshift({score, rank})
	});

	console.log(arr)

	var alice_rank = new Array();
	var score_pos = 0;
	
	for (let i = 0; i < alice.length; i++) {
		var found = false;
		while (!found) {
			// console.log(arr[score_pos])
			if (!arr[score_pos]) {
				// console.log("HIT")
				alice_rank.push(1);
				found = !found
			} else {
				if (alice[i] < arr[score_pos].score) {
					alice_rank.push(arr[score_pos].rank + 1);
					found = !found
				} else if (alice[i] === arr[score_pos].score) {
					alice_rank.push(arr[score_pos].rank);
					found = !found
				} else {
					score_pos++;
				}
			}
		}
	}

	return alice_rank

}

var scores = [100, 100, 50, 40, 40, 20, 10]
var alice = [5, 25, 50, 120]

console.log(climbingLeaderboard(scores, alice))