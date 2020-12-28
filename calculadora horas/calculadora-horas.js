let $botonCalcular = document.querySelector("#botonCalcular");

$botonCalcular.onclick = function ClickenCalcular()
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
let resultado = document.querySelector('#resultado');

resultado.textContent = 'La cantidad total son '+ totalHoras +' horas, '+ totalMinutos +" minutos, "+ totalSegundos+" segundos." ;
document.querySelector("#resultado").style.visibility = 'visible';


}

