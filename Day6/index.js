// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ARRAY  &  OBJECT<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let obj = {
//     name : "Piyush",
//     age : 20
// }

// console.log(obj);

// let obj = {
//     name : "Piyush",
//     age : 20,
//     display: function(){
//          console.log("Hello ji kaise hai");
//     }
// }

// console.log(obj);
// obj.display();

// this is the copy of the obj it is just the copy of obj in obj1 
// let obj1 = obj;
// console.log(obj1);

// creation of Array

// let arr = [1,2,3,4,5,6];
// console.log(arr)

// let arr = [1,"gagd", 1.2,5];
// console.log(arr);



// // another way of creating arr 
// let arr = new Array('love', 1,2,3);
// console.log(arr);


// let arr = [1,"love"];

// // right se add hoga
// arr.push("sanju");
// console.log(arr);

// // right se remove hoga 
// arr.pop();
// console.log(arr);

// // left most element remove ho jayega 
// arr.shift();
// console.log(arr);

// // left most elment se add hoga 
// arr.unshift('piyush');
// arr.push("me");
// arr.push("hello");
// console.log(arr);

// // slice krke bahar nikal rahe hai from __ to __
// console.log(arr.slice(1,3));

// // // we can change the content of the array with these
// // agar 1,1 daale to sirf 1 remove hoga 
// // agar 1,2 daale to 1 and 2 mein jo hoga wo remove hoga
// // agar 1,0 daale to 1 index mein jo daalenge wo insert hoga bus remove nhi hofa kuch
// arr.splice(1,1,'kunal');
// console.log(arr);



// let arr = [10,20,30,40,50];

// arr.map((number,index) => {
//     console.log(number+1,index);
// })

// let arrMap = arr.map((number)=>{
//     return number*number;
// })
// console.log(arrMap); 


// let arr = [10,20,30,40,50,11,22,33,54,55,65,67];

// let mod2 = arr.map((number)=>{
//     if(number%2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(mod2);


// let arr = [10,20,30,40,50,11,22,33,54,55,65,67];

// // ye filter krke de dega number jo even hai ussi rakhega mod2 mein baaki ko remove 
// // kr ke result dega
// let mod2  = arr.filter((number)=>{
//     // if(number%2 == 0){
//     //     return true;
//     // }else{
//     //     return false;
//     // }

//     // same as 
//     return number%2==0; 
// });
// console.log(mod2);


  

// // ye filer kr ke dega value 
// let arr = [1,2,'love','me'];

// // yaha pr string ko single quote mein daalna padega tab hi lega

// let arrFiltered = arr.filter((value) =>{
//     if(typeof(value) == 'string'){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(arrFiltered);


// // reduce function : it is used to reduce the array to a single value means 
// it will reduce accorging to the function we provide


// let arr = [1,2,3,4,5,6,7,8,9,10];
// let ans = arr.reduce  ((acc,curr) => {
//     return acc+curr;
// },0); // yaha pr jo 0 provide kr rahehai wo accumulator (acc) ka initial value hai

// console.log(ans);




// this is the sort function if we put a-b then it will sort in ascending order
// and if we put b-a then it will sort in descending order
// let arr = [132,2,3,4343,22,334,21,23,43,54,65,76,87,98,9,0];
// // arr.sort((a,b) => {
// //     return a-b;
// // });
// arr.sort(); // ye accending order mein sort kr dega
// console.log(arr);



// // kon se index pr value hai ye dega
// let arr = [132,2,3,4343,22,334,21,23,43,54,65,76,87,98,9,0];

// console.log(arr.indexOf(22)); // ye 22 ka index dega
// console.log(arr.indexOf(3)); // ye 22 ka index dega starting from 3



// // includes method : ye check krta hai ki kya ye value array mein hai ya nhi
// console.log(arr.includes(22)); // ye true dega kyuki 22 hai array mein


// // ye find krke dega value jo condition satisfy karega means isme 
// // 50 se bada value dega pehela value jo 50 se bada hai
// console.log(arr.find((value) => {
//     return value>50;
// })); 





//>>>>>>>>>>>>>>>>>>>>>>>>>> Arrays with function<<<<<<<<<<<<<<<<<<<<<<<<<<<

let arr = [1,2,3,4,5,6,7,8,9,10];
function totalSum(arr){
    let sum =0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}
let sum = totalSum(arr);
console.log(sum);