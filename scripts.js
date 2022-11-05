console.log ("tp js ok");

const InputNombre = document.getElementById("inputNombre");

const InputApellido = document.getElementById("inputApellido");

const InputEmail = document.getElementById("inputEmail");

const InputCantidad = document.getElementById("cantidad");

const InputCategoria = document.getElementById("inputCategoria");

const inputTotalPagar= document.getElementById("inputTotalPagar");


const pMensajeNombre = document.getElementById("mensajeNombre");

const pMensajeApellido = document.getElementById("mensajeApellido");

const pMensajeEmail = document.getElementById("mensajeEmail");

const pMensajeCantidad = document.getElementById("mensajeCantidad");

const botonResumen = document.getElementById("resumen");

const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
const precio= 200



console.log(precio);



function validarNombre( ) {
    if ( InputNombre.value.length < 3) {
        pMensajeNombre.innerHTML= "Ingrese un nombre válido";

    }
    else{
        pMensajeNombre.innerHTML = "Nombre correcto!!";
    }
    
}

function validarApellido( ) {
    if ( InputApellido.value.length < 3) {
        pMensajeApellido.innerHTML= "Ingrese un apellido válido";

    }
    else{
        pMensajeApellido.innerHTML = "Apellido correcto!!";
    }
    
}
// cdo se hace click en enviar u objetose ejectuta la fc
botonResumen.addEventListener("click", validarNombre);
botonResumen.addEventListener("click", validarApellido);
botonResumen.addEventListener("click", validarEmail);
botonResumen.addEventListener("click", validarCantidad);
botonResumen.addEventListener("click", montoTotal);
botonResumen.addEventListener("click", totalPagar);


function validarEmail(){
    if(!expRegular.test (InputEmail.value)) {
        pMensajeEmail.innerHTML = "El email no es válido";
    }
    else {
        pMensajeEmail.innerHTML = "Email correcto";
    }

}

function validarCantidad() {
    if ( InputCantidad.value < 1) {
        pMensajeNombre.innerHTML= "Ingrese cantidad válida";

    }
    else{
        pMensajeNombre.innerHTML = "Cantidad correcta";
    }
 }
function montoTotal( ) {
  var monto= (InputCantidad.value
  * precio);
  return (monto);
}

function totalPagar() { 
 
    var montoPagar = 0; 
switch(InputCategoria.value) {
    case "0":
   //return (montoTotal() * 1);
   document.getElementById("inputTotalPagar").value="Total a pagar: $ " + montoTotal() * 1;
    break;
    case "1":
   // return ( montoTotal() * 0.20 );
   document.getElementById("inputTotalPagar").value="Total a pagar: $ " + montoTotal() * 0.20;
    break;   
    case "2":
   // return ( montoTotal() * 0.50 );
   document.getElementById("inputTotalPagar").value="Total a pagar: $ " + montoTotal() * 0.50;
    break;
    case "3":
   // return ( montoTotal() * 0.85 );
   document.getElementById("inputTotalPagar").value="Total a pagar: $ " + montoTotal() * 0.85;

    break;
    default: return"Total a pagar: $"
    

}
} 



