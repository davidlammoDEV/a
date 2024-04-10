const btntoggle = document.querySelector ('.Toggle-btn')
console.log(btntoggle)
const outtoggle = document.querySelector ('.outoggle-btn')
console.log(outtoggle)

btntoggle.addEventListener(`click`, function() {
    console.log("clickeado")
    console.log(document.getElementById(`sidebar`).classList.toggle(`active`)); 
    }) ;
outtoggle.addEventListener(`click`, function() {
    console.log("clickeado")
    console.log(document.getElementById(`sidebar`).classList.toggle(`active`)); 
    }) ;
