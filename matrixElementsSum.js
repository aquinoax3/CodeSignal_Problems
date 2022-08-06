After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0)


function solution(matrix) {
    let totalSum = 0
// iterate vertically
// think like a graph x will be j and y will be i 

for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        console.log(matrix[j][i])
        if (matrix[j][i] === 0) {
            break;
        } else {
            totalSum += matrix[j][i]
        }
        
    }
    
    
}
// nested for loop, if you get 0 move on to the next iteration
// first for loop would access the first array
//matrix[j][i]

return totalSum

}
