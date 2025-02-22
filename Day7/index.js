// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>CALL STACK && HOISTING<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// // Hoisting:- it means that the variable and function declaration are moved 
// // to the top of their containing scope during the compilation phase.
// // matlab agar koi variable ya function niche bhi declare kiya hai to bhi
// // uska declaration upar ho jaata hai.


// // eg:-ye funtion upar ho jaayega compilation ke time pe ussi ho hoisting kehte hai
// display();

// function display() {
//     console.log("Hello ji kaise hai");
// }


// // similarly for variable also

// console.log(name);

// var name = "Piyush";// yaha pr sirf variable declaration upar shift ho 
                    // raha hai uska value nahi upar shift ho raha hai.

// using let and const we can't use hoisting only var will use hoisting.
// let and const will give error if we use them before declaration.




// // here if we use var/let/const then it will not do hoisting and will give error 
// display();
// var a = function(){
//     console.log("Hello ji kaise hai");
// }


// class level hoisting is also not possible in javascript.


// // function ko kaise variable mein assign karenge 
// let a = function(){
//     console.log("Hello ji kaise hai");
// };
// a(); // this is how we can call the function using variable.



// function greet(){
//     console.log("Hello ji kaise hai");
// }

// function greetMe(greet,fullName){
//     console.log(fullName);
//     greet();
// }
// greetMe(greet,"Piyush");



// const arr = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     },
//     function(a,b){
//         return a/b;
//     }
// ];

// // this is one way to call the function directly.
// // let a = arr[0](2,3);//


// // this is one way to assign the function to a variable and then call it.
// let a = arr[1];
// let ans = a(5,2);
// console.log(ans);



 let obj = {
    age: 20,
    name: "Piyush",
    address: "Delhi",
    greet:()=>{
        console.log("Kaise hai aap log");
    }
 }

 console.log(obj.age);
 obj.greet();