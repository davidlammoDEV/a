const btntoggle = document.querySelector (`.barra-btn`)
console.log(btntoggle)
const outtoggle = document.querySelector (`.outoggles-btn`)
console.log(outtoggle)

btntoggle.addEventListener(`click`, function() {
    console.log("clickeado")
    console.log(document.getElementById(`sidebar`).classList.toggle(`.active`)); 
    }) ;
outtoggle.addEventListener(`click`, function() {
    console.log("clickeado")
    console.log(document.getElementById(`sidebar`).classList.toggle(`.active`)); 
    }) ;

    function logear()
    {
    let user=document.getElementById("usuario").value;
    let clave=document.getElementById("contraseña").value;
    
    
    if(user=="admin" && clave=="a"){
     window.location="index.html"
     console.log("acceso cumplido")
    }
    else{
        alert("datos incorrectos")
        console.log("acceso negado")
    }
    }