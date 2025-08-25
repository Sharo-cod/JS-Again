const promiseOne = new Promise(function(resolve , reject){
    // Do an Async Task
    // DB calls, cryptography , network
    setTimeout(function(){
        console.log("Async Task Is Complete");
        resolve()      
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        
    }, 1000)
}).then(function(){
    console.log("Asyns 2 Resolved");
    
})



const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username: "Shariq" , email : "Shariq@gamil.com" })
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour =  new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "ShariqAlam" , password: "123"})
        }else {
            reject("Error: SomeThing Went Wrong")
        }
    } , 1000)
})


promiseFour.then((user) => {
    console.log(user)
    return usern.username    
}).then( (username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The Promise Is Either Resolved Or Rejected"));




const promiseFive =  new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "JavaScript" , password: "123"})
        }else {
            reject("Error: JS Went Wrong")
        }
    } , 1000)
})

async function comsumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}
