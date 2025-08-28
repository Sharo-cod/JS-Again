class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username , email , password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A New Course Was Added By ${this.username}`);
        
    }
}

const chai  = new teacher("chai" , "chai@email.com" , "123")

chai.addCourse()


const masalaChai  = new user("masalaChai")
masalaChai.logMe()

console.log(chai instanceof user);
