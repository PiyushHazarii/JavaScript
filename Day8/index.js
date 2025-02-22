// >>>>>>>>>>>>>>>>>>>>>Variable scoping and temporal dead zone<<<<<<<<<<<<<<<<<<<<<<

// globally scoped variable 
// var me = "Piyush" // isko hum kahi bhi access kar sakte hai



// var greet = "Hello World";
// console.log(greet)


// var me = function() {
//     console.log("Namaste Dunia");
// }
//  me();




// function scoped variable : function ke andar wale variable ko hum function
//  scoped variable bolte hai and isko hum sirf function ke andar hi access 
//  kar sakte hai uske bahar nahi
// function sayMyName() {
//     let finalName = "Piyush"
//     console.log(finalName);
// }
// sayMyName();
// console.log(finalName);// error aayega kyuki finalName function scoped variable hai




// agar block ke andar variable declare kiya hai to usko block scoped
//  variable bolte hai
// agar var hai to wo bahar bhi access ho sakta hai
// agar let hai to wo sirf block ke andar hi access hoga
// agar const hai to wo sirf block ke andar hi access hoga
// {
//     var age = 25;
// }
// console.log(age);




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>TEMPORAL DEADZONE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 


// line 51 to 54 tak temporal deadzone hai kyuki name niche declare kiya hai
// aur upar use kiya hai isliye error aayega to uske beech ka area hi temporal
//  deadzone hota hai
console.log(name);
console.log("Piyush");
console.log("Piyush1");
let name = "Hindi";