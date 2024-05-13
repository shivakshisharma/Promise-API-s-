"use strict"


// AggregateError: All promises were rejected

//This keyword

//This is global state
console.log(this);     //global object-- window,global

//this inside a function
function x(){

    //the value depends on strict/non strict mode
    console.log(this);   

}





//this in strict mode-(this substitution)


//If the value of this keyword is undefined or null-->this will be replaced with global object --only in non strict mode



//this keyword  value depends on how this is called(window)
x();           //when called without reference
window.x();  //by reference

//this inside a object's method

const student={
    age:10,
    name:"Akshay",
    printName:function(){         //now x is a method as it is inside an object ,x is the method of an object obj..
      console.log(this.name+" of age "+this.age);   //this here refers to the object obj..
    },
};

student.printName();

const student2={
    age:20,
    name:"Deepika",

}


//call,apply,bind methods(sharing methods)


student.printName.call(student2);    //value of this can be modified using call,apply and bind

//this inside arrow functions

const obj1={
    a:10,
    x:()=>{
        console.log(this);   //   it will behave as it is inside the global space
    },
};
obj1.x();
//this inside nested arrow function



//this inside DOM
