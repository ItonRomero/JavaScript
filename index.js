
// PEOPLE ENTERED COUNT SECTION

let errorMsg = document.getElementById("error-msg")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

// localStorage.setItem("myLeads", "www.examplelead.com")
//console.log( localStorage.getItem("myLeads"))
//localStorage.clear()



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


// ----------------------------------------------------------------------------------
// BASIC CALCULATOR SECTION


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



 // ------------------------------------------------------------------------------
// BLACKJACK SECTION

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")

let player = {
    name: "Iton",
    chips: 154
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
   let randomNumber =  Math.floor(Math.random() * 13) + 1
   if (randomNumber > 10) {
      return 10
   } else if (randomNumber === 1) {
      return 11 
   } else {
      return randomNumber
   }
}
 
function startGame(){
   isAlive = true
   let card1 = getRandomCard()
   let card2 = getRandomCard()
   cards = [card1, card2]
   sum = card1 + card2
   renderGame()

}
function renderGame(){
   cardEl.textContent = "Cards: "
   for ( let i = 0; i < cards.length ; i++ ) {
      cardEl.textContent += cards[i] + " "
   }
   sumEL.textContent = "Sum: " + sum
if (sum <= 20) {
   message = "Do you want to draw new card?"
} else if (sum === 21) {
   message = "You've got the blackjack!!"
   hasBlackJack = true
} else {
   message =  "You're out of the game"
   isAlive = false
} 
   messageEl.textContent = (message)
}

function newCard(){
   if ( isAlive === true && hasBlackJack === false)   {
   let card = getRandomCard()
   sum += card
   cards.push(card)
   renderGame()
   } else {
      console.log("unable")
   }

}


// ----------------------------------------------------------------------------------
// CHROMER EXTENSION SECTION  chrome://extensions/
let myLeads = []  
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
const saveBtn = document.getElementById("save-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

saveBtn.addEventListener("click", function(){
  console.log("save")
})


function render(Leads){
   let listItems = ""
   for (let i = 0; i < Leads.length; i++) {
      //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
      listItems += `
                  <li>
                        <a target='_blank' href='${Leads[i]}'>${Leads[i]}</a>
                  </li>
                   `
   } 
      ulEl.innerHTML = listItems
   }
   

deleteBtn.addEventListener("click", function(){
   localStorage.clear()
   myLeads = []
   render(myLeads)
})

inputBtn.addEventListener("click", function(){
   myLeads.push(inputEl.value)
    inputEl.value = ""
    
   localStorage.setItem("myLeads", JSON.stringify(myLeads))
   render(myLeads)

   console.log( localStorage.getItem("myLeads"))
})
 






const welcomEL = document.getElementById("welcome-el")

//                  parameters
function greetUser(greeting, name) {
welcomEL.textContent =  `${greeting}, ${name} `

}
//         arguments
greetUser("wazuup-iton")


//          parameters
function add(num1, num2) {
   return num1 + num2
}
//       arguments
console.log( add(3, 4 ) )



function getFirst(arr){
   return arr[0]
}

let firstCard = getFirst([10, 2, 5])
console.log(firstCard)