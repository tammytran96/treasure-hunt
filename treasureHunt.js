alert("this page is connected")
const joker = Math.floor(Math.random() * 8)
var counter = 3 
const ace = Math.floor(Math.random() * 8)
if(joker === ace){
    const joker = Math.floor(Math.random() * 8)
    const ace = Math.floor(Math.random() * 8)
    
}
const emojiMaker = (id) => {
    counter = counter - 1
    document.getElementById("counter").innerHTML = `Tries Remaining: ${counter}`
    if(id === joker) {
        document.getElementById(id).innerHTML = "🃏"
        setTimeout(100000000)
        alert("You lose")
    } else if (id === ace){
        document.getElementById(id).innerHTML = "♠️"
        setTimeout(100000000)
        alert("You Win")
    } else if (counter === 0){
        alert("Out of tries")
     } else {
        document.getElementById(id).innerHTML = "♥️"
    }
  }