"use strict"
console.log("Javascript kører!")


function buttonClick(){
  console.log("buttonclick");
  document.querySelector("#myButton").addEventListener("click", showName);
}

buttonClick();

 function showName() {
     console.log("vis navn")
   document.querySelector("#niceName").classList.remove("hidden");
   document.querySelector("#niceName").classList.add("niceName");
    // if (name = Palle)
        // removeClassList("Hidden");
    // }else if (name = Sarah) {
    // }else if (name = Nikolaj) {
    // }else if (name = Jakob) {
    // } else { 
    // }
}