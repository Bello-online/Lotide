// Head function to get the first Element in an array


function assertEqual(actual,expected){
    if(actual === expected){
        console.log("Assertion passed 😄 ");
    }else{
        console.log("Assertion failed 😡 ");
    }
}



function head(arr){
 return arr[0];
}

assertEqual(head([1,2,3]),1);

