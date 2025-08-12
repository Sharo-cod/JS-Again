// var c = 400 // We dont use var

let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30          // We dont use var
//    console.log("Inner :", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


//  =========================================================================================================================================

function one(){
    const userName = "Shariq"
    function two(){
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website);
    
    two()
}
// one()

if (true) {
    const userName = "Sharo"
    if (userName === "Sharo") {
        const website = "Google"
        // console.log(userName + website);
    }
    // console.log(website); // Error 1
}

// console.log(userName); // Error 2


// ++++++++++++++++++++++++++  Intresting ++++++++++++++++++++++++++++++++++++++

function addone(num){
    return num + 1
}
console.log(addone(5));
 


const addTwo = function(num){
    return num + 2
}

addTwo(5)