//every recursive function MUST know where to stop
//OR
//every recursive function MUST have stop criteria

var counter = 1

welcomeCounter = () =>{
    if(counter === 100){
        return
    }
    console.log("Your welcome number is: " + counter)
    counter++
    welcomeCounter()
}

welcomeCounter()