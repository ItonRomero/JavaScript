

// initialize the count as 0
// listen for clicks on the increment Button
// increment the count variable when button is clicked
// change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

 function increment() {
    count = count + 1
    countEl.innerText = count

 }


  function save() {
  let countStr = count + " - "
   saveEl.innerText += countStr
    console.log(countStr)

}

//  let name = 25
//  let greeting = "Hi, my name is"
//  let myGreetings = name + "," + greeting + "!"

//  console.log(myGreetings)

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Jayson, "
// let greeting = "What's up "
//  welcomeEl.innerText = welcomeEl.innerText+" " +  name + greeting
//or
//  welcomeEl.innerText += " " + name + greeting








