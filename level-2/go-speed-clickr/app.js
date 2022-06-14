const form = document.getElementById("myForm")
const output = document.getElementById("output")
let numberOfClicks = 0;
let btn = document.getElementById("btn")
let record = document.getElementById("record")
output.value = numberOfClicks
let timerDisp = document.getElementById("timer")
let refreshBtn = document.getElementById("refresh")
timerDisp = 10

record.append(localStorage.getItem("clicks"))

function clicked() {
    numberOfClicks++
    
}

form.addEventListener("submit", event => {

})

form.addEventListener("submit", event => {
    event.preventDefault()
    
    clicked(true)
    output.value = ""
    output.append(numberOfClicks)
    localStorage.setItem("clicks", numberOfClicks)
    
})

function stopClicking () {
    alert("Times up!")
    output.value = 0;
    numberOfClicks = 0;
    record.value = "";
    record.append(localStorage.getItem("clicks"))
}

function timer (){
    timerDisp.value -= 0   
}

function stopTimer (){   
    clearInterval(interval)
    h1 = document.createElement("h1")
    h1.textContent = "TIMES UP!"
    record.append(h1)
    btn.remove()
} 

let interval = setInterval(timer,1000)

setTimeout(stopTimer,10000);

