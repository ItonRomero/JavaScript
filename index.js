


let countMsg = document.getElementById("error-msg")
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
      let msgError = "Unable to save the 0(Zero), please click Increment button"
      countMsg.textContent = msgError
      console.log(msgError)

   } else {
   
   saveEl.innerText += countStr
   countEl.innerText = 0
   count = 0
   }
}








