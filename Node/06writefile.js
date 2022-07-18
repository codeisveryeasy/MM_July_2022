var fs= require('fs')

var message = "I can write to file using fs package in node"

fs.writeFile("myfile.txt", message, (error)=>{
    if(error){
        throw error
    }

    console.log("written to file with success")
})