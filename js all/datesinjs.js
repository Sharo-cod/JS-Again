// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// // let mycreatedDate = new Date(2025 , 0 , 23)
// let mycreatedDate = new Date("01-14-2025")
// // console.log(mycreatedDate.toLocaleString());
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate =  new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// ${newDate.getDay()} and the time

newDate.toLocaleString('default' , {
    weekday: "long",
})