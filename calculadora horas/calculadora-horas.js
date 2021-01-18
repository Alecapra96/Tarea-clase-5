let $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function GetHoursMinutesSeconds()
{
    let arraysegundos = [];
    let $arraysegundos = document.getElementsByClassName("segundos");
    for (i=0;i<$arraysegundos.length;i++)
    {
        let verSegundos = $arraysegundos[i];
        arraysegundos.push(Number(verSegundos.value))
    }
    let arrayminutos = [];
    let $arrayminutos = document.getElementsByClassName("minutos");
    for (i=0;i<$arrayminutos.length;i++)
    {
        let verminutos = $arrayminutos[i];
        arrayminutos.push(Number(verminutos.value))
    }
    let arrayhoras = [];
    let $arrayhoras = document.getElementsByClassName("horas");
    for (i=0;i<$arrayhoras.length;i++)
    {
        let verhoras = $arrayhoras[i];
        arrayhoras.push(Number(verhoras.value))
    }

 //aca checkeo que me guarde los valores dentro de la funcion
 console.log("horas "+arrayhoras);
 console.log("minutos "+arrayminutos);
 console.log("segundos "+arraysegundos);

 let totalHoras = 0 ; 
    for (i=0;i<arrayhoras.length;i++){
        totalHoras += arrayhoras[i];
    }
    console.log(totalHoras);

 let totalMinutos = 0 ; 
    for (i=0;i<arrayminutos.length;i++){
        totalMinutos += arrayminutos[i];
    }
    console.log(totalMinutos);
   
let totalSegundos = 0 ; 
    for (i=0;i<arraysegundos.length;i++){
        totalSegundos += arraysegundos[i];
    }
    console.log(totalSegundos);

// Aca transformo segudos a minutos
let restoSegundos = 0;
if (totalSegundos > 60){
    restoSegundos = totalSegundos / 60 ;
}

console.log(restoSegundos +"Es el resto en segundos");
totalMinutos = totalMinutos + restoSegundos;
console.log(totalSegundos + "Es el total segundos");

let restoMinutos = 0;
if (totalMinutos > 60){
    restoMinutos = totalMinutos / 60 ;
}
restoMinutos=restoMinutos.toFixed(2);

console.log(restoMinutos+"Es el resto en minutos");
totalHoras = totalHoras + restoMinutos;
console.log(totalMinutos+"Es el total en minutos");
console.log(totalHoras+"es el total horas");


removerEnteros(restoSegundos);
console.log(restoSegundos +"resto");



let resultado = document.querySelector('#resultado');


// resultado.textContent = 'La cantidad total son '+ totalHoras +' horas, '+ totalMinutos +" minutos, "+ totalSegundos+" segundos." ;
// document.querySelector("#resultado").style.visibility = 'visible';

}

function removerEnteros(numeroEntero){
    let numeroEnteroFixeado = Math.floor(numeroEntero);
    let resultado;
    console.log(numeroEntero +"-"+numeroEnteroFixeado);
    resultado = numeroEntero - numeroEnteroFixeado;
    numeroEntero=resultado;
    numeroEntero.toFixed(3);
    console.log(numeroEntero+"esto es lo que rturn");
    return numeroEntero;
}
