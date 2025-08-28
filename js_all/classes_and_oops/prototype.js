// let myName = "Shariq     "
// let myName2 = "chai     "


// console.log(myName.trueLength);



let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderMan: "sling",

    getSpiderpower: function(){
        console.log(`Spidy Power Is ${this.spiderMan}`);
    }
}

Object.prototype.Shariq = function(){
    console.log(`Shariq is present in all objects`);
}



Array.prototype.heyShariq = function(){
    console.log(`Shariq says Hello`);
}

// heroPower.Shariq()
// myHeros.Shariq()
// myHeros.heyShariq()
// heroPower.heyShariq()




// Inheritance 

const user = {
    name : "Shariq Alam",
    email : "Sharo4192@gmail.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TAsupport= {
    makeAssignment : 'JS Assignments',
    fullTime : true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// Modern Syntax

Object.setPrototypeOf(teachingSupport, teacher)



let anotherUsername = "ShariqAlam    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}


anotherUsername.trueLength()
"shariq".trueLength()
"icetea".trueLength()


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++