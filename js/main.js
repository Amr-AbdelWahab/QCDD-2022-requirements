



// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------------------
// ------------------ out --------------------------------------
// -----------------------------------------------------------------------------------------

let items = document.querySelectorAll('[data-ID]');
let selectedData;
let selectedIndex;

for ( i = 0; i < items.length; i++) {
  items[i].addEventListener('click', selectMe)
}

function selectMe(e) {
  
    selectedData = e.target.dataset.id;
    // console.log(selectedData);
    console.log(e.target.innerHTML);
    console.log(e.target.dataset.id);

      // for ( j = 0; j < jData.length; j++) {
      //   if ( selectedData == jData[i].dataID) {
      //     console.log(jData[j].title)
      //   }
      // }
  }

// function jDataLoop () {
//   for ( j = 0; j < jData.length; j++) {
//     if ( selectedData == jData[i].dataID) {
//       console.log(jData[j].title)
//     }
//   }
// }




// console.log(item1);
//   function gorun ()  {

//     let putOutHere = document.getElementById('putOutHere');
//     let iframe = document.createElement('iframe');
//     iframe.src = "Data/SPLIT-QCD-22/"+"1.0"+".pdf";
//     putOutHere.appendChild(iframe);
//   }




  


