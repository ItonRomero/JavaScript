

// initialize the count as 0
// listen for clicks on the increment Button
// increment the count variable when button is clicked
// change the count-el in the HTML to reflect the new count

let countel = document.getElementById("count-el")
let count = 0

 function increment() {
    count = count + 1
    countel.innerText = count
    console.log(count)
 }
