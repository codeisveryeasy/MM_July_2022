console.log("Creating new elements in DOM!")

var listRef = document.getElementById("list")
console.log(listRef)

var newol = document.createElement("ol")

var newli = document.createElement("li")
newli.innerText = "First"
newol.appendChild(newli)

var newli1 = document.createElement("li")
newli1.innerText = "Second"
newol.appendChild(newli1)

var newli2 = document.createElement("li")
newli2.innerText = "Third"
newol.appendChild(newli2)



console.log(newol)




//newol.appendChild(newli)
listRef.appendChild(newol)



