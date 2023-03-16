"use strict";
window.addEventListener("load", start);

console.log("Javascript kører!");



// let firstName = input.value;
// let lastName = "Hansen";

// Nedenstående to måder kan man sætte variabler sammen på:
// let fullName = `${firstName} ${lastName}`;
// let fullName = firstName +" "+ lastName

// console.log(fullName);

function start() {
  console.log("startfunktion kører");
  document.querySelector("#myButton").addEventListener("click", showName);
}

//  buttonClick();

function showName() {
  console.log("vis navn");
  document.querySelector("#niceName").classList.remove("hidden");
  if (document.querySelector("#input").value !== "Palle") {
    document.querySelector("#badName").classList.remove("hidden");
    document.querySelector("#niceName").classList.add("hidden");
  }
}
// removeClassList("Hidden");
// }else if (name = ) {
// }else if (name = ) {
// }else if (name = ) {
// } else {
// }

