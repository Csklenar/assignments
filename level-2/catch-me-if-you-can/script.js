//function sum(x, y){
  //check data types first and throw error
//     if(typeof x != "number" || typeof y != "number") {
//         throw "I am not a number"
//     } else {
//           return x + y;
//         }
// }
// try {
//    sum(1, 'number')
// } catch (err) {
//    console.log(err)
// }

let user = {
username: "sam", 
password: "123abc"
};

function login(username, password){
  //check credentials
    if(username !== "sam" || password !== "123abc") {
        throw "neither of the data types match"
    } else {
        console.log("login successfull")
    }
}

try {
    login('color', '123abc')
} catch(err) {
    console.log(err)
}

    

