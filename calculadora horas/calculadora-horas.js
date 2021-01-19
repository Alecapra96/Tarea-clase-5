let $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function GetHoursMinutesSeconds()
{
    //agarro los valores que inserto el usario y los meto en un array
    let arraysegundos = [];
    let $arraysegundos = document.getElementsByClassName("segundos");

      
    for (i=0;i<$arraysegundos.length;i++){
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
// Sumo las horas totales
let totalHoras = 0 ; 
    for (i=0;i<arrayhoras.length;i++){
        totalHoras += arrayhoras[i];
    }
    console.log(totalHoras);
// Sumo las minutos totales
 let totalMinutos = 0 ; 
    for (i=0;i<arrayminutos.length;i++){
        totalMinutos += arrayminutos[i];
    }
    console.log(totalMinutos);
// Sumo las segundos totales
let totalSegundos = 0 ; 
    for (i=0;i<arraysegundos.length;i++){
        totalSegundos += arraysegundos[i];
    }
    console.log(totalSegundos);

   
// transformo segundos  a minutos
let decimalesSegundos = 0;
let enteroSegundo = 0;
if (totalSegundos>60){
    let restoSegundos = totalSegundos / 60;
    enteroSegundo = Math.floor(restoSegundos);

    decimalesSegundos = removerEnteros(restoSegundos);
    decimalesSegundos = convertTime(decimalesSegundos);
    console.log(decimalesSegundos);
}else{
    decimalesSegundos = Number(totalSegundos) + Number(decimalesSegundos);
    console.log(decimalesSegundos);
    
}
// transformo minutos  a horas

console.log(enteroSegundo); // segundos pasados a minutos sobrantes
totalMinutos = Number(totalMinutos) + Number(enteroSegundo);
let decimalesMinutos = 0;
let enteroMinuto = 0;
if (totalMinutos>60){
    let restoMinutos =totalMinutos/60;
    enteroMinuto = Math.floor(restoMinutos); 
    decimalesMinutos = removerEnteros(restoMinutos);
    decimalesMinutos = convertTime(decimalesMinutos);
    console.log(decimalesMinutos);

}else{
    decimalesMinutos = Number(totalMinutos) + Number(decimalesMinutos);
    console.log(decimalesMinutos);
    
}
// transformo horas
console.log(enteroMinuto);
totalHoras= Number(totalHoras) + Number(enteroMinuto);

//________________________________________________________________________________________________________________
// // Aca transformo segudos a minutos
// let restoSegundos = 0;
// if (totalSegundos > 60){
//     restoSegundos = totalSegundos / 60 ;
// }
// restoSegundosCalculados = convertTime(restoSegundos);
// console.log(restoSegundosCalculados +" Segundos finales");

// // Aca transformo minutos a horas
// totalMinutos = Number(totalMinutos) + Number(restoSegundos);
// let restoMinutos = 0;
// if (totalMinutos > 60){
//     restoMinutos = totalMinutos / 60 ;
// }
// let restoMinutosCalculados = convertTime(restoMinutos);
// let restoHorasCalculadas = removerEnteros(totalHoras);
// restoHorasCalculadas = restoHorasCalculadas * 60;
// restoHorasCalculadas = restoHorasCalculadas.toFixed();
// restoMinutosCalculados = Number(restoMinutosCalculados) + Number(restoHorasCalculadas);
// console.log(restoMinutosCalculados + " resto minutos calculados");

// // Aca transformo horas a horas bien
// totalHoras = Number(totalHoras) + Number(restoMinutos);
// totalHoras = totalHoras.toFixed();
// console.log(totalHoras+ " total horas");
//________________________________________________________________________________________________________________
// Resultado
let resultado = document.querySelector('#resultado');
 resultado.textContent = 'La cantidad total son '+ totalHoras +' horas, '+ decimalesMinutos +" minutos, "+ decimalesSegundos+" segundos." ;
 document.querySelector("#resultado").style.visibility = 'visible';

}

function removerEnteros(numeroEntero){
    let numeroEnteroFixeado = Math.floor(numeroEntero);
    let resultado;
    resultado = numeroEntero - numeroEnteroFixeado;
    numeroEntero=resultado;
    numeroEntero.toFixed(3);
    return numeroEntero;
}
function convertTime(resto){
    let restoTimeCalculado = removerEnteros(resto);
    restoTimeCalculado = restoTimeCalculado * 60;
    restoTimeCalculado = restoTimeCalculado.toFixed();
    return restoTimeCalculado;
}