Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function solution(sequence) {
    // create counter variable to keep track of number of drops
    let dropCounter = 0
    
    // for loop for iterating
    for (let i = 0; i < sequence.length; i++){
        
        // conditional to determine if current element is less than previous element
        // if it is, we know we need a drop
        if (sequence[i] <= sequence[i - 1]){
            dropCounter++
            
            // conditional to to determine if the dropCounter has exceeded 1
            if (dropCounter > 1){
                return false
            }
            
            // conditional to determine if the current element is less than or equal to the element 2 indexes prior
            // AND if the next element is less than or equal to the previous element
            if (sequence[i] <= sequence[i - 2] && 
                sequence[i + 1] <= sequence[i - 1]){
                return false
            }
        }
    }
    return true
}
