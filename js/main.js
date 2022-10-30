



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
let putOutHere = document.getElementById('putOutHere');
let iframe = document.createElement('iframe');

for ( i = 0; i < items.length; i++) {
  items[i].addEventListener('click', selectMe)
}

function selectMe(e) {

  for (j=0; j< jData.length; j++) {
      if (jData[j].dataID == e.target.dataset.id) {

        document.getElementById('output').classList.remove('disNon');
        document.getElementById('mainH3Title').innerText = jData[j].mainTitle;
        document.getElementById('mainH4Title').innerText = jData[j].title;
        if (e.target.dataset.mainindex){
          iframe.src = "Data/"+jData[j].fileName;
        }else{
          iframe.src = "Data/SPLIT-QCD-22/"+jData[j].fileName;
        }
        putOutHere.appendChild(iframe);
      }
    }
  }


  document.getElementById('goToIndex').addEventListener('click', goToIndex);

  function goToIndex(){
    setTimeout(()=>{
      iframe.src = "";
      console.log(iframe.src);
      document.getElementById('output').classList.add('disNon');
      document.getElementById('mainH3Title').innerText = "";
      document.getElementById('mainH4Title').innerText = "";
      },1000)
  }





// ********