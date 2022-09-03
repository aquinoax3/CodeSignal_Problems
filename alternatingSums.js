
Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.






function solution(a) {

//divide into two teams
//the first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
// Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

const result = []
let team1 = 0
let team2 = 0

for (let i = 0; i < a.length; i++) {
    // if index equals 0 or if index is even number
    if (i === 0 || i % 2 === 0) {
        team1 += a[i]
    } else {
        team2 += a[i]
    }
}

// console.log("team1:", team1)
// console.log("team2:", team2)

result.push(team1)
result.push(team2)



return result

}
