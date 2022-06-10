// const form = document.myForm 

// form.addEventListener("submit", function(event) {
//     event.preventDefault()

//     const goomba = form.goomba.value
//     const bobOmb = form.bobOmb.value
//     const cheepCheep = form.cheepCheep.value
//     form.goomba.value = ""
//     form.bobOmb.value = ""
//     form.cheepCheep.value = ""
    
//     console.log(goomba + " " + bobOmb + " " + cheepCheep)
//     const h2 = document.createElement("h2")
//     h2.textContent = "Total Price: " + goomba + " " + bobOmb + " " + cheepCheep;
//     document.getElementsByTagName("body")[0].append(h2)
// })



    function totalPrice() {
    return (document.getElementById("goombaTotal").value * 5) +
    (document.getElementById("bobOmbTotal").value * 7) +
    (document.getElementById("cheepCheepTotal").value * 11) 
}

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault()
    document.getElementById("total").value = totalPrice() + " coins"
})




