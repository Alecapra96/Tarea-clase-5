let $botonCalcular = document.getElementById("boton-calcular");
$botonCalcular.addEventListener("click",IngresoBar);
function IngresoBar(){
    event.preventDefault(); //Esta linea nomas se agrega

    let $nombreUsuario= document.querySelector('#nombre-usuario').value;
    let $edadUsuario= document.querySelector("#edad-usuario").value;
    let edadAutorizada = 18;
    let textoResultado;    
    
    if ($edadUsuario >= edadAutorizada)
    {
       
        textoResultado= "Hola "+$nombreUsuario +", puedes ingresar"
    }
    else
    {
        textoResultado= "Hola "+$nombreUsuario +", no puedes ingresar"

    }
    document.querySelector("#resultado-ingreso-bar").innerText=textoResultado;

}



