// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.






function solution(n) {
    //convert integer into array so you can loop over it
    //itterate through loop
    //return true if sum of first half equal sum of second half
    
    
    //convert integer into string then use .split() to turn each char into array
    const numArr = n.toString().split('')

    let firstHalf = 0
    let secondHalf = 0
    
    for (let i = 0; i < numArr.length / 2; i++) {
        // console.log("loop", numArr[i])
        // Number.parseInt() converts to an integer
        firstHalf += Number(numArr[i])
    }
    
    for (let j = numArr.length - 1 ; j >= numArr.length / 2 ; j--) { 
        // variable is length  - 1 to start at the end index of the array
        //condition: as long as the variable is greater that length of array / 2 (to split the array in half)
        // then decrease to move backwards
        // console.log("2nd half", numArr[j])
        secondHalf += Number(numArr[j])
    }
    
    if (firstHalf === secondHalf) {
        return true
    } else {
        return false
    }

}



// knowing it was first half and i had to do something with each of the first half, that makes me think of arrays
// with arrays you can do something to each of the elements of the array
// knowing that i needed to take an input and split it in half and do something with it made me think of array


//first thing to do is pull all relevent information 
//
