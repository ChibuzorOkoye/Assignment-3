//1 
let con = document.getElementById("container")
console.log(con);
//2
con = document.querySelector("#container")
console.log(con);
//3
con = document.getElementsByClassName("second")
console.log(con);
//4
con = document.querySelector("ol .third")
console.log(con);
//5
// con = document.getElementById("container")
// con.innerText = "Hello!"
//6
let foot = document.querySelector(".footer")
foot.classList.add("main")
//7
con.classList.remove("main")
//8
let nLi = document.createElement("li")

//9
nLi.innerText = "four"

//10
nUl = document.querySelector("ul")
nUl.appendChild(nLi)

//11
let something = document.querySelector("ol li")
for(let i = 0; i < something.length; i++)
something[i].style.backgroundColor ="green"

//12
con = document.querySelector(".footer")
con.remove()