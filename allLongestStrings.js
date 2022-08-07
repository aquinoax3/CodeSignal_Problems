Given an array of strings, return another array containing all of its longest strings.


// given array of strings
// return another array containing all longest strings

// iterate through array with a variable to store the length of the longest string
// iterate again to filter out all strings shorter than that length

function solution(inputArray) {
    
    // length tracker
    let longestLength = 0
    
    // loop to determine longest length of string within the array
    for (let i = 0; i < inputArray.length; i++){
        // console.log(inputArray)
        if (inputArray[i].length > longestLength){
            longestLength = inputArray[i].length
            
            // console.log(longestLength)
        }
    }
    
    // filter the inputArray according to string length to return an array of 
    // strings that have a matching longestlength
    let answer = inputArray.filter(string => string.length === longestLength)
    
    // console.log(answer)
    
    return answer
}
