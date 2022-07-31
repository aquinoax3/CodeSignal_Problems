function solution(statues) {
    
    for (let i = 0; i < statues.length; i++) {
        for (let j = 0; j < statues.length; j++) {
            if (statues[j] > statues[j + 1]) {
                // for the first iteration temp = 2
                let temp = statues[j + 1]
                // the next number down the line becomes next number at current index so 2 becomes 6
                statues[j + 1] = statues[j]
                // number at current index becomes number at the next index 6 becomes 2
                statues[j] = temp
            }
            
        }
    }
    
    //after these 2 for loops are done interating the array is now sorted [2,3,6,8]
    
    // counter variables indicates our number of statues needed
    let counter = 0
    
    for (let i = 0; i < statues.length; i++) {
        // currentNum will equal 2 and nextNum equals 3, difference will be 1
        // but they're in order so we l
        let currentNum = statues[i]
        let nextNum = statues[i + 1]
        
        let difference = nextNum - currentNum
        
        //it iterates again and currentNum equals 3 and nextNum equals 6, difference will be 3
        // which means you'll need 2 statues, then you subtract difference -1 and get 4 and 5
        // counter increases by 2 because that's the number of statues needed to get them in order 
        if (difference >= 2) {
            counter += difference -1
        }
        
    }
    
    return counter

}




//  statues = [6,2,3,8]
// subtract smaller number from bigger number
// take num at next index minus number at current
