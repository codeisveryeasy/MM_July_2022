var express = require('express')
var mongoose = require('mongoose')
var category = require('./category')
var cors = require('cors')

var app = express()
app.use(cors())

mongoose.set('debug', true)

mongoose.connect("mongodb://localhost:27017/ecommerce")
var db = mongoose.connection

db.on('error', ()=>{
    console.log("Error connecting to mongodb database")
})

db.on('open', ()=>{
    console.log("Connected to mongodb database")
})


app.get("/welcome", (request, response)=>{
    console.log("Request  recived....");
    response.send("Welcome to express app!!!!")
})



app.get('/get/category/all', (request, response)=>{
    category.find({}, (error, data)=>{
        if(error){
            throw error
        }else{
            console.log(data)
            response.json(data)
        }
    })
})

app.listen(1234, ()=>{
    console.log("Express app listening on port 1234!")
})