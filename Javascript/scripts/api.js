console.log("API Client in JS")

//promise based api client library
//then
//two scenarios -> success or failure
// fetch("https://jsonplaceholder1.typicode.com/posts")
//         .then(iWillDealWithSuccess)
//         .catch(iWillDealWithFailure)


// function iWillDealWithSuccess(response){
//     console.log(response.json())
// }

// function iWillDealWithFailure(error){
//     console.log(error)
// }

var data = []
console.log("Data: ")
console.log(data)

var userListRef = document.getElementById("userlist")
//create new ol
var newolNew = document.createElement("ol")


async function getDataFromAPI(){

    //let response  = await fetch("https://jsonplaceholder.typicode.com/users")
    let response  = await fetch("http://localhost:1234/get/category/all")
    console.log(response)
    //console.log(response.json())
    data = await response.json()
    console.log(data)
    console.log("Count of values received in response: ")
    console.log(data.length)
    data.map(function(category){
        console.log(category)
        console.log(category.name)
        //console.log(user.address.city)
        //console.log(user.address.geo.lng)
        //create a new li
        var newli = document.createElement("li")
        //add text to newli
        newli.innerText = category.name
        //append newli as a child to newol
        newolNew.appendChild(newli)



    })
    console.log(newolNew)

}

getDataFromAPI()

userListRef.appendChild(newolNew)


