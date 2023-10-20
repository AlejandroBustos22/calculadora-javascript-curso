// Esta funcion toma el value interno del input (value) y le agrega el valor de cada input y despues lo muestra en pantalla


function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

// Esta funcion se encarga de igualar el value interno de la pantalla en vacio para que haga un efecto de reinicio

function borrar(){
    document.getElementById('pantalla').value = '';
}

// Esta funcion se encarga de poner en una variable(const) el value de la pantalla
// Despues en una variable (const) llamada resultado realizamos una evaluacion(eval) de las operaciones matematicas de la pantalla  
// Despues llamamos al documento html y al value(document) para que muestre en pantalla despues de tocar '=' el resultado matematico 

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado
}