
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
solution(inputArray) = 3.


function solution(inputArray) {
    
    let maxDiff = 0
    
    for (let i = 0; i < inputArray.length; i++) {
        
        let diff = Math.abs(inputArray[i] - inputArray[i + 1])
        
        if (diff > maxDiff) {
            maxDiff = diff
        }
    }
   
    return maxDiff

}
