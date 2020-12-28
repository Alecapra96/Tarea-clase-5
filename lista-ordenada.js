
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
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
    let promediocalculado = sum / array.length;
    return promediocalculado;
}
let promediocalculado = promedio(array);
console.log(promediocalculado);

function numeroMasPequeño(array){
    let iviejo= array[0];
    for(let i=0; i<array.length;i++){ 
        if (array[i] < iviejo){
            iviejo= array[i];     
        }
    }
return iviejo
}
let numeromaschico = numeroMasPequeño(array);
console.log(numeromaschico);

function numeroMasGrande(array){
    let iviejo= array[0];
    for(let i=0; i<array.length;i++){ 
        if (array[i] > iviejo){
            iviejo= array[i];     
        }
    }
return iviejo
}
let numeromasgrande = numeroMasGrande(array);
console.log(numeromasgrande);