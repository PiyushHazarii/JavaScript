// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>LOOPS ANS STRINGS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// for(let i=1; i<=10; i++) {
//     console.log("babbar");
// }

// let i = 1;
// do{
//     console.log("babbar");
//     //updation
//     i++;
// }while(i<=10);

// let i = 1;
// while(i <= 10) {
//     console.log("babbar");
//     i++;
// }

// for(let i =1; i<6; i++) {
//     console.log(i);
// }

// let i = 1;
// do{
//     console.log(i);
//     //updation
//     i++;
// }while(i<6);


// let i = 1;
// while(i<6) {
//     console.log(i);
//     i++;
// }

// for(let i=5; i>0; i--) {
//     console.log(i);
// }


// let i = 5;
// do{
//     console.log(i)
//     //updation
//     i--;
// }while(i>0);


// let i = 5;
// while(i>0) {
//     console.log(i);
//     i--;
// }


// for(let i=1; i<=6; i++) {
//     if(i == 4) {
//         break;
//     }
//     else {
//         console.log(i);
//     }
// }



// for(let i = 1; i<=4; i++) {
//     if(i == 3) 
//         continue;
//     else   
//         console.log(i);
// }



// let i = 1;
// while(i < 5) {
//     console.log("Inside the loop");
//     if(i==3){
//         i++;
//         continue;
//     }
        
//     else
//         console.log(i);
//     i++;
// }



// let firstName = "Love";
// let lastName = 'Babbar';


// // `` :-this is the keyword that is used to print the string same as that of written 
// // in your macine matlab jaise likha hai niche wala string waise hi print hoga 
// let name = `Love 
// Babbar This is
// my 
// Name
// hello`;

// console.log(name);

// // this is the another way to print the string 
// let firstName = new String("Love babbar");
// console.log(firstName);

// let op1 = 'English ';
// let op2 = 'HINDI ';

// // for concatenation of string 
// console.log(op1+op2);
 

// // for finding the length of a string 
// console.log(op2.length);

// // backtics ke andar koi value access krna ho to bracket lagate hai and $ lagate hai
// // see below
// let finalAns = `${op1}${op2}`;
// console.log(finalAns)

// // let ans = op1 + op2;
// // console.log(ans);


// // console.log(op1.toUpperCase());
// // console.log(op2.toLowerCase())

  
// // kuch part print krna ho to substring use krte hai 
// let str = "Babbar";
// console.log(str.substring(2,4));

// console.log(str.substring(2));



// let sentence = "Hello \\Jee \\Kaise\\ \\ho \\saare";

// let words = sentence.split('\\');

// console.log(words);

// console.log(words.join('-'));



// >>>>>>>>>>>>>>>>>>>>>>>>"for-each", "for-of","for-in" loop<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.forEach((value,index)=>{
//     console.log("Number : "+value+" Index : "+index);
// })


// let obj = {
//     name : "Piyush",
//     age : 20,
//     display: function(){
//         console.log("Hello ji kaise hai");
//     }
// }

// // key means the key value pair in the object array 
// for(let key in obj){
//     console.log(key);
// }

// for(let key in obj){
//     console.log(key," ",obj[key]);
// }



let arr = [1,2,3,4,5,6,7,8,9,10];
for(let value of arr){
    console.log(value);
}

let string = "Hello ji kaise ho";
for(let value of string){
    console.log(value);
}