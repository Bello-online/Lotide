// Tail function is used to get all of the element in the array except from the head

function tail(arr){
    if(arr.length === 1){
        console.log("This array has no tail 😡")
    }
    else(arr.length> 1)
        return arr.slice(1,arr.length)       // Return the slice from 1 to the end of the array
}

// console.log(tail([1,2,3]));  Test