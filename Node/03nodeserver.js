//import inbuilt package from node runtime called http
var http = require('http')

//use http to create first server
//createServer() will use call back function to create new server
var myFirstServer = http.createServer((request, response)=>{
    console.log("#####################start########################")
    //console.log(request)
    console.log("#####################end########################")
    response.writeHead(200, {'Content-Type':'text/html'})
    response.write("<h1>Hello from node server!</h1>")
    response.end()
})

myFirstServer.listen(8888, ()=>{
    console.log("Server is listening on port 8888")
})
