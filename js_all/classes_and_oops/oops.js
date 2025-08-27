const user = {
    username : "Shariq",
    logInCount : 8,
    signedIn: true ,

    getUserDetails : function(){
        console.log("Got User Deatails from Database");
        
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username , logInCount , isLoggedIn){
    this.username = username
    this.logInCount = logInCount
    this.isLoggedIn = isLoggedIn
    return this
}

const userOne = new User("shariqAlam" , 12 , true)
const userTwo = new User("sharo" , 11 , false)
console.log(userOne.constructor);
// console.log(userTwo);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++