"use strict"
console.log("Javascript kører!")


function buttonClick() {
document.querySelector("#button").addEventListener("click", showName())
}


function showName() {
    console.log("vis navn")
    document.querySelector("button onclick").removeClassList("hidden");
    if (fullname = Palle) {
        niceName()
    }else if (fullname = Sarah) {
        okName()
    }else if (fullname = Nikolaj) {
        okName()
    }else if (fullname = Jakob) {
        okName()
    } else { 
        badName()
    }
};