
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.


function solution(s) {
  var ss=s.split("").sort(),r=0
  while(ss.length){
    var t=ss.shift()
    if(t===ss[0]) ss.shift()
    else r++
  }
  return r<2
}
