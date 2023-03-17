"use strict";
window.addEventListener("load", start);

console.log("Javascript kører!");

function start() {
  console.log("startfunktion kører");
  document.querySelector("#myButton").addEventListener("click", showName);
}

function showName() {
  console.log("vis navn");
  document.querySelector("#badName").classList.remove("hidden");
  if (document.querySelector("#input").value == "Palle") {
    document.querySelector("#niceName").classList.remove("hidden");
    document.querySelector("#badName").classList.add("hidden");
  } else if (document.querySelector("#input").value == "Sarah") {
    document.querySelector("#niceName").classList.remove("hidden");
    document.querySelector("#badName").classList.add("hidden");
  } else if (document.querySelector("#input").value == "Jakob") {
    document.querySelector("#niceName").classList.remove("hidden");
    document.querySelector("#badName").classList.add("hidden");
  } else if (document.querySelector("#input").value == "Nikolaj") {
    document.querySelector("#niceName").classList.remove("hidden");
    document.querySelector("#badName").classList.add("hidden");
  } else {
  }
  startResetAll();
}

function startResetAll() {
  console.log("Viderestil til nulstil navne");
  document.querySelector("#resetButton").addEventListener("click", resetAll);
}

function resetAll() {
  console.log("Nulstil navne");
  document.querySelector("#badName").classList.add("hidden");
  document.querySelector("#niceName").classList.add("hidden");
  document.querySelector("#okName").classList.add("hidden");
}
