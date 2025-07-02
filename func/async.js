
// SYNC :- the program runs in an perticular sequnce 
// ASYNC :- when they are not 


// but we go throgh some time delay in js so js can be ASYNC as well 
// ans these ASYNC behaver can cause some discontnuty in program we will see it 


// Asyns sys 
// function dpi(){
//     console.log("jii");
// }

// setTimeout(dpi,2000);// creates a time delay of 2000ms ;

// // CALLBACK :- koi assa function joo kisi dusere kaa argument hoo 

// function sum(a,b){
//     console.log(a+b);
// }

// function sumj(a,b,s){// here sum function is an argument soo sum is callback
//     s(a,b);
// }

// let a = 2 ;
// let b = 3 ;

// sumj(a,b,sum);



//////////////////////////// CALLBACK HELL \\\\\\\\\\\\\\\\\\\\\\\\


// when we have soo many nested callbacks it creates an callback hell

// now lets understand it first lets create mini data base which takes 2s to give data ;

// function database(id){
//     setTimeout(()=>{
//         console.log(id);
//     },2000);
// }


// // now first I want data at id 1 then 2 and 3

// // if I do this 

// database(1);
// database(2);
// database(3);// they will all return simuntenusly but I want data 1 then 2s wait and ten data 2 and so on.


// so we can use callback to do that ;


// soo let's do that 

// function get(id , func){
//     setTimeout(()=>{
//         console.log(id);
//         if(func){// if callback is present then only call
//             func();
//         }
//     })
// }

// now we do this if I want data 1 and then data 2 

// get(1,()=>{
//     get(2);
// })// to do 1 and 2 


// if want 1 , 2, 3 ,4 


// get(1,()=>{
//     get(2,()=>{
//         get(3,()=>{
//             get(4);
//         });
//     });
// });// what if it 10 of the things its not good to go like this code becomes very lengthy


//////////// NOW TO OVERCOME THE CALLBACK HELL WE CAME UP WITH PROMISES\\\\\\\\\\\\\\\

// promise is an object in java script

// let pro = new Promise((resolve , reject)=>{
//     console.log("hiii");
//     resolve("ok hee jii");
// });

// console.log(pro);


// generally the API returns a promise and is data is fully transwered it will say resolve 
// lets make an functon representing ans API who gives promis

// function getapi(id , func ){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`${id} aa gai hai`);
//             resolve("success");
//             if(func){
//                 func();
//             }
//         },5000);
//     });
// }
// let get = getapi(1000);


// it will return data after 5s so before 5s perpus is not fulfilled but after 5s it will be fullfilled (watch on consul at crome cant be done here )
// les solve the callback hell with promes chaining 


// function get(id){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log(id);
//         resolve("hoo gaya jii");

//     },3000);
// });
// }
// this is not real promise chain ;
// console.log("loding data 1 ......");
// get(1).then(()=>{
//     console.log("loding data 2 ......");
//     get(2).then(()=>{
//         console.log("loding data 3 ......");
//         get(3).then(()=>{
//             console.log("loding data 4 ......");
//             get(4);
//         })
//     })
// })

// this is real chne 
// console.log("loding data 1 ......");
// get(1).then(()=>{
// console.log("loding data 2 ......");
//     return get(2);
// }).then(()=>{
//     console.log("loding data 3 ......");
//     return get(3);
// }).then(()=>{
// console.log("loding data 4 ......");
//    return get(4)
// }).then(()=>{
//     console.log("success");
// });
// this also is not that good 

//////////////////////////////////  ASINC AND AWAIT  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


function get(id){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
        console.log(id);
        resolve("hoo gaya jii");

    },3000);
});
}

async function getkero() {
    console.log("loding data 1 ......");
    await get(1);
    console.log("loding data 2 ......");
    await get(2);
    console.log("loding data 3 ......");
    await get(3);
    console.log("loding data 4 ......");
    await get(4);
    console.log("success");

}

getkero();// this is the most simplest of all

