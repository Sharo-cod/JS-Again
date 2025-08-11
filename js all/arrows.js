    const user = {
        username: "Shariq",
        price: 999,

        welcomeMessage: function(){
            // console.log(`${this.username} Welcome To Website`);
            // console.log(this);
        }
    }

    // user.welcomeMessage()
    // user.username = "Sharo"
    // user.welcomeMessage()

    // console.log(this);


    // function chai(){
    //     let userName = "Shariq"
    //     console.log(this.userName);
    // }

    // chai()


    // const chai = function(){
    //     let userName = "Shariq"
    //     console.log(this.userName);
    // }

    // chai()

    const chai = () => {
        let userName = "Shariq"
        console.log(this);
    }

    // chai()


    const addTwo = (num1 , num2) => num1 + num2

    console.log(addTwo(3,4));

    const myArray = [ 2 , 5 , 3 , 7 , 8 ]

    myArray.forEach()


    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////