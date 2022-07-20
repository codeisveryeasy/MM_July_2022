var score = [5 , 4, 1, 9, 6, 3, 2]

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


console.log(insertionSort(score))