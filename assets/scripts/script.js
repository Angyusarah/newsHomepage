const menuEl = document.getElementById("menu")
const hamburger = document.querySelector(".hamburger")

hamburger.onclick =  function () {
    if (menuEl.className == "active"){
        menuEl.className = "menu"
    } else {
        menuEl.className = "active"
    }
}

console.log(menuEl)