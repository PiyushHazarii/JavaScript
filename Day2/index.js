// if the var is declared in globally means not in a function that it can be declared
// from any where 

// globally scoped var 
// var age = 23; 
// if(true){
//     console.log(age);
// }



// when we declare the var in any function then it cannot be accessed from 
// outside the function


// function scoped var

// function temp(){
//     var age = 20;
//     console.log(age);
// }

// // console.log(age);
// temp();

// var ko redecalre bhi kr skte hai koi dikkat nhi aayega uske 
// var a = 10;
// var a = 20;
// // ye jo baad mein declare kiye hai wo wala value lega
// console.log(a);


// let is blocked scoped means bracket ke andar agar likhenge to uske bahar wo
// access nhi hoga 
{
    let a = 10;
    console.log(a); //then ye error nhi dega kyuki same block mein hai na

}
// then ye error dega 
console.log(a);




