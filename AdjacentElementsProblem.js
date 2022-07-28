// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function solution(inputArray) {
    //itterate throuh array with nested for loop multiplying the indices adjacent
    // set a variable to -1000 to check it against
    // return the product
    
    let largestProduct = -1000
    
    for (let i = 0; i < inputArray.length; i++) {
        let currentProduct = (inputArray[i] * inputArray[i + 1])
        if (currentProduct > largestProduct) {
            largestProduct = currentProduct 
        }
    }
    
    return largestProduct
}
