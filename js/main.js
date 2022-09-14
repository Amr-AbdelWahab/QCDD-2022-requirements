function load(target, url) {
    var r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
        target.innerHTML = r.responseText;
    };
    r.send();
}

let includes = Array.from(document.querySelectorAll('[data-include]'));
includes.map(include => {
    let file = include.dataset['include'] + '.html';
    load(include, file);
});






let goUp = document.getElementById("goUp");

window.onscroll = function () {
    // console.log(this.scrollY);

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

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

let items = document.querySelectorAll('[data-ID');


for (let i = 0; i < items.length; i++) {
    console.log( items[i]);
}


// -----------------------------------------------------------------------------------------
// ------------------ Ham and Nav Links --------------------------------------
// -----------------------------------------------------------------------------------------

let hamIcon = document.getElementById('ham');
let mobList = document.getElementById('mobList');

hamIcon.addEventListener('click', toggleNavLinks);

function toggleNavLinks () {
    hamIcon.classList.toggle('active');
    mobList.classList.toggle('block');

}






