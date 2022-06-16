// function total(arr) {
//     const result = arr.reduce(function(final, num){
//         final += num
//         return final
//     })
//     console.log(result)
// }

// console.log(total([1,2,3])); // 6



function stringConcat(arr) {
       const result = arr.reduce((final, str) => {
        return `${final}${str}`
    })
    return result
    
}


console.log(typeof stringConcat([1,2,3])); // "123"

