var score = []

//maximum size of an array
var maxValue = 100000000

//console.log(score)

//run the loop maxValue times. In each iteration
//generate one random number less than maxValue and
//insert/push it in score array
for (var i = 0; i < maxValue; i++) {

    //generate random number less than maxValue
    var randomNumber = Math.random() * maxValue
    var randomNumberWithoutDecimal = Math.floor(randomNumber)
    //console.log(i + ":" + randomNumberWithoutDecimal)

    //push new random number which is generated
    //to an array called score
    score.push(randomNumberWithoutDecimal)
}

//print the new score array to console
//console.log(score)
//console.log(score.toString())

//capture the time before starting to sort

var startTime = new Date().getTime()
console.log("Start  time: " +  startTime)

//sort the score array using inbuilt sort() function
score.sort((n1, n2)=>{
    return n1-n2
})

var endTime = new Date().getTime()
console.log("End  time: " +  endTime)

//calculate the time it took to sort
var timeTaken = endTime - startTime
console.log("Time taken: " +  timeTaken)