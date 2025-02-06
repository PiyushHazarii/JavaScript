// >>>>>>>>>>>>>>>>>>>>>>>>>OPERATORS ABD CONDITIONALS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// arithmetic operator

let a = 2;
let b = 5;


// a = a +10;
a += 10;
console.log(a);

// a = a-2;
a -= 2;
console.log(a);


console.log(a**b);  // means a to the power b

console.log('5' == 5); // this will give the boolean value and ye sirf value
                        //  check krta hai uska type nhi to ye true dega 


console.log('5' === 5); //then your value will be same and 
                        //   the data that it holds it also same. ans:- false 



// this is ternary operator 
let age = 5;
let status1 = (age > 18) ? 'I can vote' : 'I cannot Vote';

console.log(status1);



let ans = (true && false && true)

let ans = (false || false || false);
let ans = !(false);
console.log(ans);


// isme 7 print hoga kyuki 7 ek truthy value hai esii liye wo aage check hi nhi karega
console.log(false || 7 || 11 || 18);


console.log(2 ^ 2);

// left shift mein n*2 kar do answer wahi hoga and 
// right shift mein n/2 kr do answer wahi hoga agaar shift 1 se zyda hai
// to n*(2*shift); hoga

console.log(10 << 1); // ans = 10*2 = 20
console.log(10>>2); // ans = 10/2*2 = 2




// CONDITIONALS


let age = 30;
if(age >= 18 ) {
    console.log('can vote');
}


let number = 5;


if(number == 1) {
    console.log('A');
}
else if(number == 2) {
    console.log('B');
}
else if(number == 3) {
    console.log('C');
}
else if(number == 4) {
    console.log('D');
}
else {
    console.log('F');
}

let num = 3;



switch(num) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    case 4: console.log('D');
    break;
    default: console.log('F');
}
