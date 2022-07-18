var http = require("http")
var url = require("url")
var fs= require('fs')

var server = http.createServer((request, response)=>{
    //write header
    response.writeHead(200, {'Content-Type':'text/html'})
    console.log("Working with query params!")
    //console.log(request)
    console.log("Request is coming from....")
    console.log(request.url)
    //use url package import in line 2 
    //to extract query params from url
    var queryParamObject = url.parse(request.url, true).query
    console.log("Extracted queryparams from request.url")
    console.log(queryParamObject)

    
    response.write("<br>")
    response.write("Name: " + queryParamObject.name)
    response.write("<br>")
    response.write("Location: " + queryParamObject.location)
    response.write("<br>")
    response.write("Topic: " + queryParamObject.topic)

    var message = "Name: " + queryParamObject.name + "\n" + "Location: " + queryParamObject.location + "\n" + "Topic: " + queryParamObject.topic

    fs.writeFile("detail.txt", message, (error)=>{
        if(error){
            throw error
        }
        console.log("File write success!!!!")
    })


    response.write("Query params received and written to file!")

    response.end()
})

server.listen(1234, ()=>{
    console.log("Listening on port 1234")
})