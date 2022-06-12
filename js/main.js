
let goUp = document.getElementById("goUp");

window.onscroll = function () {
    console.log(this.scrollY);

    this.scrollY >= 700 
    ? goUp.classList.add("show") 
    : goUp.classList.remove("show"); 
}

goUp.onclick = function () {
    window.scrollTo ({
        top : 0,
        behavior : "smooth",
    });
}
