function solution(inputString) {
    // one way of doing it: use .split() method to seperate string, you get back an array
    //loop through array and check if its the same looped backwards
    
    
    //second way of doing it: 
    //use .split('') on inputString to convert string to an array of each seperate char
    //then reverse it
    //then use .join('') to convert an array back into string again
    //Then compare the two to see if it matches or equal to one another
    
    const reversedString = inputString.split('').reverse().join('')
    
    if (reversedString === inputString) {
         return true
    } else {
        return false
    }
    
}
