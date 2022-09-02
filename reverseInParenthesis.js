Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.




solution = s => {
    //if the first par doesn't exist return string as is
    if (s.indexOf('(') == -1) return s;
    
    //split at first paren, pop removes last element
    
    //split ignores what 
    
    const rev = s.split('(').pop().split(')')[0];
    
    // console.log("this is what rev is doing:", rev)
    
    // replace what's in ( ) with  rev.split....]
    s = s.replace('(' + rev + ')', rev.split("").reverse().join(""));
    
    return solution(s);
}
