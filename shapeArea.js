function solution(n) {
    let areaN = n * n + (n-1) * (n-1)
    
    return areaN

}


// given an n-interesting polygon, find the area for it given n
// 1-interesting polygan is a square with a side length of 1
// n-interesting polygon is obtained by taking the n-1-interesting polygon and appending 1-interestingpolygons to each edge, side by side
// amount area increases by increases by 4 with each increment of n
// the area of n = (area of n - 1) + (n * 4)
