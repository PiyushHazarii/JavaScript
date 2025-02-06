// >>>>>>>>>>>>>>>>VARIABLE AND DATA-TYPES<<<<<<<<<<<<<<<<<<<<



// if the var is declared in globally means not in a function that it can be declared
// from any where 

// globally scoped var 
var age = 23; 
if(true){
    console.log(age);
}




// when we declare the var in any function then it cannot be accessed from 
// outside the function


// functionally scoped var
function temp(){
    var age = 20;
    console.log(age);
}

// console.log(age);
temp();



// var ko redecalre bhi kr skte hai koi dikkat nhi aayega uske 
var a = 10;
var a = 20;
// ye jo baad mein declare kiye hai wo wala value lega
console.log(a);



// let is blocked scoped means bracket ke andar agar likhenge to uske bahar wo
// access nhi hoga 
{
    let a = 10;
    console.log(a); //then ye error nhi dega kyuki same block mein hai na

}
// then ye error dega 
console.log(a);


// it cannot be modified means redeclare is not allowed in this 
let a = 10;
let a = 20;



// let is a dynamically typed variable means usme kuch bhi daal skte hai 
// koi bhi value daal skte hai usko dynamically typed variable bolte hai usko
let a = 10;
a = true;
a = "Piyush";
a = null;
console.log(a);



// it cannot be redeclared and reinitialised means na hi update hoga value na hi change
// matlab fixed hai ye pura 
const a = 25;
console.log(a);

// nahi hoga error aayega
a =20;
console.log(a);


// Now DATA-Types

// Number: 1, 2, 3,1,3;
// undefined means agar koi value insert nhi hai data mein to wo undefind dega 
let a;
console.log(a);

a= null; // null is an object according to type of
console.log(a);  


// type of just kon sa type ka variable hai wo batayega
console.log(typeof(a));