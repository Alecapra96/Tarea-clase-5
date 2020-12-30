//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>


let $botonSueldo = document.querySelector("#botonSueldo");


$botonSueldo.onclick = function(){
    let sueldoIngresado = document.querySelector("#sueldoIngresado").value;
    const months = 12 ;
    let sueldoCalculado = sueldoIngresado * months;
    document.querySelector("#resultado").innerText = "Tu sueldo anual es de $"+sueldoCalculado;
    const precioRutini=1000;
    let botellasRutini = parseInt(sueldoIngresado/precioRutini);
    document.querySelector("#resultadoRutini").innerText = "Te puedes comprar "+botellasRutini+ " botellas de Rutini con tu sueldo mensual";

}