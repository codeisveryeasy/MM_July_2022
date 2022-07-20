var score = []

var maxValue = 1000

console.log(score)

for (var i = 0; i < maxValue; i++) {

    //generate random number less than maxValue
    var randomNumber = Math.random() * maxValue
    var randomNumberWithoutDecimal = Math.floor(randomNumber)
    console.log(randomNumberWithoutDecimal)

    //push new random number which is generated
    //to an array called score
    score.push(randomNumberWithoutDecimal)
}

console.log(score)