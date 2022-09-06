
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

solution(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]





function solution(picture) {
    
    let boarderLength = picture[0].length + 2
    let astrik = "*".repeat(boarderLength) //gives you string with that many characters in it
    
    console.log(boarderLength)
    
    for (let i = 0; i < picture.length; i++) {
        let array = picture[i].split("")
        array.unshift("*")
        array.push("*")
        picture[i] = array.join('')
        
        console.log(picture[i])
    }
    
    picture.unshift(astrik)
    picture.push(astrik)
    
    console.log(picture)
    
    return picture

}
