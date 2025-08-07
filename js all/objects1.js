// Singletons
// Object.create

// Object Literals
const mySym = Symbol("key1")


const jsUser = {
    name: "Shariq",
    "Full Name": "Shariq Alam",
    mySym: "mykey1",
    age: 18,
    location: "pakistan",
    email: "sharo4192@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday" ]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full Name"]);
// console.log(jsUser[mySym]);

jsUser.email = "sharo4192@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "Shariq@gmail.com"
// console.log(jsUser);


jsUser.greetings = function(){
    console.log("Hello JS User"); 
}

jsUser.greetingtwo = function(){
    console.log(`Hello JS User , ${this.name}`); 
}
console.log(jsUser.greetings());
console.log(jsUser.greetingtwo());

///////////////////////////////////////////////////////////