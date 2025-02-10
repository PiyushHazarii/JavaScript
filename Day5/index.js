// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FUNCTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// function sayMyName(){
//     console.log("Piyush");
// }
// sayMyName();


// function loop(){
//     for(let i=0; i<10; i++){
//         console.log(i);
//     }
// }
// loop();


// this is parametric function 
// function me(a){
//     console.log(a);
// }
// me(5);


// function divide(a,b){
//     console.log(a/b);
// }
// divide(20,3);


function returns(a,b){
    let sum = a+b;
    return sum;
}
const ans = returns(20,30);
console.log(ans);


let ans = getSum(1,2,3);
console.log("Printing Sum: ", ans);

function getMyName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
    // unreachable statements beacuse it return already
    let a = 10;
    let b= 15;
    let sum = a + b;
    console.log(sum);
}

let fullName = getMyName(7, 7);
console.log("Full Name: ", fullName);



const getMultiplication = function (a,b) {
    return a*b;
}


console.log(getMultiplication(2,20));


// functoin exression 
let squareNumber = function(num) {
    let ans = num**2;
    return ans;
}


// let ans = squareNumber(5);
console.log(ans);


// Arrow funtion  Major people use this 
let getExp = (x,y) => {
    let ans = x**y;
    return ans;
}

console.log(getExp(29,29));