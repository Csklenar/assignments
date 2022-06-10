const form = document["form-1"]

form.addEventListener("submit", function(event) {
    event.preventDefault()
    const firstNumber = form.firstNumber.value
    const secondNumber = form.secondNumber.value
    form.firstNumber.value = ""
    form.secondNumber.value = ""

    const h1 = document.createElement("h1")
    h1.textContent = firstNumber + " " + secondNumber
    document.getElementsByTagName("body")[0].append(h1)

    

    // console.log(firstNumber + " " + secondNumber)
})

const formTwo = document["form-2"]

formTwo.addEventListener("submit", function(event){
    event.preventDefault()
    const thirdNumber = formTwo.thirdNumber.value
    const fourthNumber = formTwo.fourthNumber.value
    formTwo.thirdNumber.value = ""
    formTwo.fourthNumber.value = ""

    const h2 = document.createElement("h2")
    h2.textContent = thirdNumber + " " + fourthNumber
    document.getElementsByTagName("body")[0].append(h2)

    // console.log(thirdNumber + " " + fourthNumber)
})

const formThree = document["form-3"]
formThree.addEventListener("submit", function(event) {
    event.preventDefault()
    const fifthNumber = formThree.fifthNumber.value
    const sixthNumber = formThree.sixthNumber.value
    formThree.fifthNumber.value = ""
    formThree.sixthNumber.value = ""

    const h3 = document.createElement("h3")
    h3.textContent = fifthNumber + " " + sixthNumber
    document.getElementsByTagName("body")[0].append(h3)

    // console.log(fifthNumber + " " + sixthNumber)
})


