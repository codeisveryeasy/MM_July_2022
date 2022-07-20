//get the sum of all numbers till n

// n = 10
// 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2  +1
//n = 20
// 20 + 19 +18+17+16+15+14+13+12+11+10+9+8+7+6+5+4+3+2+1
var n = 1000000
var sum = 0

console.log("Sum of all numbers till " + n  +": " )

while(n > 0){
    sum = sum + n
    n = n - 1
}

console.log(sum)

// is n=10 greater than 0
// sum = 10 = 0 + 10
// n   = 9  = 10 - 1
 
// is n=9 greater than 0
// sum = 19 = 10 + 9
// n   = 8  = 9 - 1

// is n=8 greater than 0
// sum = 27 = 19 + 8
// n   = 7  = 8 - 1
function sumTillN(n1) {
    if (n1 < 1){ 
        return 0
        }    // exit condition
    return n1  + sumTillN(n1 - 1); // return value plus result of recursive call
}

console.log(sumTillN(1000000))