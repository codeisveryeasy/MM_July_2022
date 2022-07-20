var score = []

//maximum size of an array
var maxValue = 10000

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

//sort the score array using insertionSort
insertionSort=(scoreArray)=>{
    for(var i = 1; i<scoreArray.length; i++){
        //select the element at index 1
        let currentValue = scoreArray[i]
        let inside

        //loop from left to right
        //start from index i - 1 to index 0
        for(inside = i - 1; inside >= 0 && scoreArray[inside]>currentValue; inside-- ){
            //till scoreArray[inside] is greater than currentValue
            //move scoreArray[inside] to right at position scoreArray[inside + 1]
            scoreArray[inside + 1] = scoreArray[inside]
        }

        //place the currentValue at index 0
        //or next to the smaller element
        scoreArray[inside +1] = currentValue
    }

    return scoreArray
}

var sortedScore = insertionSort(score)

var endTime = new Date().getTime()
console.log("End  time: " +  endTime)

//calculate the time it took to sort
var timeTaken = endTime - startTime
console.log("Time taken: " +  timeTaken)

console.log("Sorted score")
console.log(score)
//console.log(score.toString())