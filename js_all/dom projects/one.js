const btn1 = document.querySelector(".btn1")
const div1 = document.querySelector(".bg-black")

btn1.addEventListener("click", function(){
    alert("Good You've Clicked The Button");
    div1.innerHTML = "Good You Are Capable To Do Projects On JavaScript"
    div1.style.fontSize = "70px";
    div1.style.height = "100vh";
    div1.style.width = "100%";
    div1.style.display = "flex";
    div1.style.alignItems = "center";
    div1.style.justifyContent = "center";
})
