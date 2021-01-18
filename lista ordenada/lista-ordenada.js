
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
let $botonCalcular = document.getElementById("boton-calcular");
$botonCalcular.onclick = function determinarPromedios(){

const lista = document.querySelectorAll('li');
const array =[];
for(let i=0; i<lista.length; i++){
    array.push(Number(lista[i].innerText));
}
console.log(array);


let promedioCalculado = promedio(array);
let numeroMasChico = numeroMasPequeño(array);
let numeroMasGrande = numeroMasGrandeFuncion(array);
let numeroQueMasSeRepite = numeroMasRepite(array); 

let resultado = document.querySelector('#resultado-promedio');
resultado.textContent = "El promedio es "+promedioCalculado ;
document.querySelector("#resultado-promedio").style.visibility = 'visible';

let resultado1 = document.querySelector('#resultado-numero-chico');
resultado1.textContent = "El numero mas pequeño es el "+numeroMasChico ;
document.querySelector("#resultado-numero-chico").style.visibility = 'visible';

let resultado2 = document.querySelector('#resultado-numero-grande');
resultado2.textContent = "El numero mas grande es el "+numeroMasGrande ;
document.querySelector("#resultado-numero-grande").style.visibility = 'visible';

let resultado3 = document.querySelector('#resultado-mas-repite');
resultado3.textContent = "El numero que mas se repite es el "+numeroQueMasSeRepite ;
document.querySelector("#resultado-mas-repite").style.visibility = 'visible';
}

function promedio (array){
    let sum=0;
    for(let i=0; i<array.length;i++){
        sum +=array[i];
    }
    let promedioCalculado = sum / array.length;
    return promedioCalculado;
}
function numeroMasPequeño(array){
    let numeroChico= array[0];
    for(let i=0; i<array.length;i++){ 
        if (array[i] < numeroChico){
            numeroChico= array[i];     
        }
    }
    return numeroChico
}
function numeroMasGrandeFuncion(array){
    let numeroGrande= array[0];
    for(let i=0; i<array.length;i++){ 
        if (array[i] > numeroGrande){
            numeroGrande= array[i];     
        }
    }
return numeroGrande
}
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