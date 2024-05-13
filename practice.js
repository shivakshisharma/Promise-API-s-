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



