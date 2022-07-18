
//named function
function welcome(){
    console.log("Hello from node function!")
}

welcome()

//arrow function
welcomeArrow =()=>{
    console.log("Hello from arrow function");
}

welcomeArrow()

//variable function

welcomeVariable = function(){
    console.log("Hello from variable function!!!!")
}

welcomeVariable()

welcomeMessage=(message)=>{
    console.log("Message: " + message)
}

welcomeMessage("Hello, node is easy!")
