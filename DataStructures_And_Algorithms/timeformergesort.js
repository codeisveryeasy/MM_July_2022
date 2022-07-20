var score = []

//maximum size of an array
var maxValue = 100000

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

//sort the score array using mergeSort
merge=(left, right)=>{
    //console.log("--------------------------")
    //console.log(left + ", " + right);
    let sortedScore = []
    while(left.length && right.length){
     if(left[0] < right[0]){  
        sortedScore.push(left.shift())
    }else{
        sortedScore.push(right.shift())
    }
}

return [...sortedScore, ...left, ...right]
}

mergeSort=(scoreArray)=>{

    const center = scoreArray.length/2
    //use stop condition to stop recursion
    //when the size of array is less than or equal to 1
    //OR when there is only 1 element in an array
    if(scoreArray.length <= 1){
        return scoreArray
    }

    const leftArray = scoreArray.splice(0, center)
    //console.log(leftArray)
    const rightArray = scoreArray
    //console.log(rightArray)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

var sorted = mergeSort(score)



//capture the time when sorting is done
var endTime = new Date().getTime()
console.log("End  time: " +  endTime)

//calculate the time it took to sort
var timeTaken = endTime - startTime
console.log("Time taken: " +  timeTaken)

console.log("Sorted score")
console.log(sorted)
//console.log(score.toString())