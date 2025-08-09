


function sayMyName() {
            console.log("S");
            console.log("H");
            console.log("A");
            console.log("R");
            console.log("I");
            console.log("Q");
}

// sayMyName() // Execution Must

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2); 
// }

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result 
}

const result = addTwoNumbers(3,5)
// console.log("Result : " , result);

function loginUserMessage(username){
    if (!username) {
        console.log("Please Enter A Username");
        return
    }

    return `${username} Just Logged In`
}
console.log(loginUserMessage());
