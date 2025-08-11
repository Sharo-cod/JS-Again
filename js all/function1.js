


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
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(val1 , val2 ,...num1){
    return num1

}

// console.log(calculateCartPrice(200, 300 ,500, 2000));



const user = {
    userName: "Shariq",
    prices: 199
}
function handleObject(anyobject){
    console.log(`UserName Is ${anyobject.userName} And Price Is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    userName: "Shariq",
    Price: 399
})

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 ,600 , 600]));


//  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////