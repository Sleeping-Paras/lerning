// const apiKey = "0595de16225a394dd4dcfcc2ce60bc71"; // Replace with your real key

// fetch(`https://data.fixer.io/api/latest?access_key=${apiKey}`)
//   .then(response => response.json())
//   .then(data => {
//     console.log("Exchange rates:", data.rates);
//     console.log("EUR to USD:", data.rates["USD"]);
//   })
//   .catch(error => {
//     console.error("Error fetching exchange rates:", error);
//   });


//   let x = fetch(`https://data.fixer.io/api/latest?access_key=${apiKey}`);


//   console.log(x);

//   async function getdata(){
//     console.log("aa raha hai ... 2min");
//     let response = await fetch(`https://data.fixer.io/api/latest?access_key=${apiKey}`);// JSON formet 
//     let data = await response.json();
//     // console.log(data[0]);
//     return data;
//   } 


//   getdata().then(data => {
//     let st = "AMD"
//     console.log("Got data of " , st , data["rates"][st]);
// });



  // If we directly print data will not under stand it so we have to know some things 

//   AJAX  is asyncronous JS ans XML :- at very begning data used to come in XML formet 
// but currently it comes in JSON formet 

// JSON id JS object Notation


// for testing perpus only !!!


// async function sendPostData() {
//     const url = "https://reqres.in/api/users"; // test API
//     const postData = {
//         name: "Paras",
//         job: "Developer"
//     };

//     try {
//         const response = await fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(postData)
//         });

//         const data = await response.json();
//         console.log("POST response:", data);
//     } catch (error) {
//         console.error("POST request failed:", error);
//     }
// }

// sendPostData();
