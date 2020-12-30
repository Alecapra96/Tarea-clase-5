
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
let $botonCalcular = document.getElementById("botonCalcular");
$botonCalcular.onclick = function ClickenCalcular(){

const lista = document.querySelectorAll('li');
const array =[];
for(let i=0; i<lista.length; i++){
    array.push(Number(lista[i].innerText));
}
console.log(array);

function promedio (array){
    let sum=0;
    for(let i=0; i<array.length;i++){
        sum +=array[i];
    }
    let promedioCalculado = sum / array.length;
    return promedioCalculado;
}
let promedioCalculado = promedio(array);


function numeroMasPequeño(array){
    let iViejo= array[0];
    for(let i=0; i<array.length;i++){ 
        if (array[i] < iViejo){
            iViejo= array[i];     
        }
    }
    return iViejo
}
let numeroMasChico = numeroMasPequeño(array);


function numeroMasGrande(array){
    let iViejo= array[0];
    for(let i=0; i<array.length;i++){ 
        if (array[i] > iViejo){
            iViejo= array[i];     
        }
    }
return iViejo
}
let numeroMasGrande1 = numeroMasGrande(array);


function numeroMasRepite(array){
    let frecuente;
    let max=0;
     for(let i=0; i<array.length;i++){ 
         let vecesRepetidos = 0;
         for(let j=0; j<array.length;j++){    
             if(array[j] === array[i]){    
                 vecesRepetidos++;
             }
             if (vecesRepetidos>max){
                 frecuente = array[j];
                 max=vecesRepetidos;     
             }
         }       
     }
     return frecuente;
}
let numeroQueMasSeRepite = numeroMasRepite(array); 

let resultado0 = document.querySelector('#resultado0');
resultado0.textContent = "El promedio es "+promedioCalculado ;
document.querySelector("#resultado0").style.visibility = 'visible';

let resultado1 = document.querySelector('#resultado1');
resultado1.textContent = "El numero mas pequeño es el "+numeroMasChico ;
document.querySelector("#resultado1").style.visibility = 'visible';

let resultado2 = document.querySelector('#resultado2');
resultado2.textContent = "El numero mas grande es el "+numeroMasGrande1 ;
document.querySelector("#resultado2").style.visibility = 'visible';

let resultado3 = document.querySelector('#resultado3');
resultado3.textContent = "El numero que mas se repite es el "+numeroQueMasSeRepite ;
document.querySelector("#resultado3").style.visibility = 'visible';
}