var score = [5 , 4, 1, 9, 6, 3, 2]

merge=(left, right)=>{
    console.log("--------------------------")
    console.log(left + ", " + right);
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
    console.log(leftArray)
    const rightArray = scoreArray
    console.log(rightArray)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

var sorted = mergeSort(score)

console.log(sorted)
