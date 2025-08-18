const form = document.querySelector('form')
// This UseCase Will give you rmpty value
// const height = parseInt(document.querySelector('#height').value)s

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    const height = parseInt(document.querySelector('#height').value) 
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    
    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Please Give A Valid Height ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please Give A Valid Weight ${weight}`;
    } else{
        const BMI = (weight / ((height*height) / 10000)).toFixed(2)
        //  NOW SHOW THE RESULT
        result.innerHTML = `RESULT : ${BMI} `
    }
})