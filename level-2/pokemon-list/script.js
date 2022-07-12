const xhr = new XMLHttpRequest()
//xhr.open() opens the request for the method, url, and if it's async
xhr.open("GET", "https://api.vschool.io/pokemon", true)
//xhr.send() will send the request
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data)
        console.log(data.objects[0])
        showData(data.objects[0].pokemon)
    } 
}

// response text
/*puts the data we have requested or puts errors that have occured */
function showData(arr) {
    for(let i = 0; i < arr.length; i++) {
        const h2 = document.createElement('h2')
        h2.textContent = arr[i].name
        document.body.appendChild(h2)
    }
}