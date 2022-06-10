const myForm = document.myForm

myForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const checkedInputs = []
    for(let i = 0; i < myForm.diet.length; i++) {
        if(myForm.diet[i].checked) {
            checkedInputs.push(myForm.diet[i].value)
        }
    }
    alert(
    "First Name: " + myForm.firstName.value + "\n" + 
    "Last Name: " + myForm.lastName.value + "\n" + 
    "Age: " + myForm.age.value + "\n" +
    "Gender: " + myForm.gender.value + "\n" + 
    "Location: " + myForm.location.value + "\n" + 
    "Diet: " + checkedInputs)
    
    
    
    
    // console.log(checkedInputs)
    // console.log(myForm.gender.value)
    // console.log(myForm.firstName.value)
    // console.log(myForm.lastName.value)
    // console.log(myForm.age.value)
    // console.log(myForm.location.value)
})