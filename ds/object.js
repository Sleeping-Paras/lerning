// singeleton joo contructor se nahi banta 

// object letrels

const user = {

    name: "paras",
    age : 22,
    location : "jaipur",
    email : "paras@google.com",
    islogin : false

} 

// console.log(user["email"]);
// console.log(user.email);//   both of them will work but is case for example user2 

const user2 = {

    name: "paras",
    age : 22,
    location : "jaipur",
    "email" : "paras@google.commm", // if object is like this dot notation will not work
    islogin : false

} 

// console.log(user2.email); // it is working but might not work is older version of js 
// console.log(user2["email"]);
// if we want to change the elements in object we can freez it
// user["age"] = 34 
// console.log(user) ; // here it will change the age 
// Object.freeze(user); 
// user["age"] = 22;
// console.log(user)// but not here 

// now lets add some function 

user.greeting = function(){
    console.log("Hello JS user");
}




