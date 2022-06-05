


let errorMsg = document.getElementById("error-msg")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

 function increment() {
    count = count + 1
    countEl.innerText = count

 }


  function save() {
  let countStr = " " + count + " - "
   if ( count == 0) { 
      errorMsg.textContent = "Something Went wrong, please try again"
   } else {

      saveEl.innerText += countStr
      countEl.innerText = 0
      count = 0
   
   }
}


// -------------------------------------------



let num1 = 8
let num2 = 2 
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let totalEl = document.getElementById("total-el")

function add(){
   let result = num1 + num2
  totalEl.textContent = "Total: " +  result
}

function subtract(){
   let result = num1 - num2
   totalEl.textContent  =  "Total: " +  result
 }

 function divide(){
   let result = num1 / num2
   totalEl.textContent  = "Total: " +  result
 }

 function multiply(){
   let result = num1 * num2
   totalEl.textContent  =   "Total: " +  result
 }



 // -------------------------------------------
//  document.getElementById("card1-el").textContent = card1 
//  document.getElementById("card2-el").textContent = card2
 let card1 = 12
 let card2 = 20 
let sum = card1 + card2
let hasBlackJack = false
let isAlive = true
let message = ""


if (sum <= 20) {
   message = "Do you want to draw new card?"
} else if (sum === 21) {
   message = "You've got the blackjack!!"
   hasBlackJack = true
} else {
   message =  "You're out of the game"
   isAlive = false
} 

console.log(message)
