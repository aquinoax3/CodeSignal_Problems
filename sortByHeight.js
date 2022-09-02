Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
  
  
  
  function solution(a) {
    
    // setting s as the result of calling filter on a
    // filter method returns an array of all numbers greater than 0
    // then a sort method is called on the array which orders those items lowest to highest
    // a-b is telling the sort function to go from lowest to highest
    
    let s = a.filter(h => h > 0).sort((a, b) => a - b) 
    
    // return a map of a where as long as p (current value in the iteration) is not equal to 1, then shift removes the first element in s and returns it, setting the current value equal to the shifted value
    return a.map(p => {
        if (p !== -1) {
            return s.shift();
        }
        // return -1 in all cases where the current value is -1
        return -1;
    })
}
