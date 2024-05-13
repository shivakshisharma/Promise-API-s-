
"use strict"
const p1=new Promise((resolve,reject)=>{
    // setTimeout(()=> resolve("P1 Success"),3000);
    setTimeout(()=>reject("P1 fail"),3000);

})

const p2=new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P2 Success"),5000);
    setTimeout(()=>reject("P2 fail"),1000);

    
})

const p3=new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P3 Success"),2000);
    setTimeout(()=>reject("P3 fail"),2000);
})

Promise.any([p1,p2,p3]).then(res=>{
    console.log(res);
}).catch((err)=>{               //Never get into the uncaught error always write a catch statement to get the exact error...
    console.error(err);
    console.log(err.errors);
});  


// AggregateError: All promises were rejected

//This keyword

//This is global state
console.log(this);     //global object-- window,global

//this inside a function
function x(){

    //the value depends on strict/non strict mode
    console.log(this);   

}

x();


//this in strict mode-(this substitution)


//If the value of this keyword is undefined or null-->this will be replaced with global object --only in non strict mode



//this value depends on how this is called(window)



//this inside a object's method


//call,apply,bind methods(sharing methods)


//this inside arrow functions


//this inside nested arrow function



//this inside DOM
