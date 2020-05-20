
  AOS.init();


let ubicacionPrincipal= window.pageYOffset;

window.addEventListener("scroll", function(){
    let desplazamientoActual=window.pageYOffset;
    if(ubicacionPrincipal>= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top="0px";}
    else{
        document.getElementsByTagName("nav")[0].style.top="-100px";
    }
        ubicacionPrincipal=desplazamientoActual;
    }
)
// MENUUUU

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo=true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer i")[0].style.color="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer i")[0].style.color="rgb(243, 57, 113)";
        semaforo= true;
    }
    enlacesHeader.classList.toggle("menudos")
})