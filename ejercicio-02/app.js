// Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

let total = 0;

imprimirTotal(total);

function imprimirTotal(total){
    let resultado = document.getElementById("total");
    resultado.innerHTML = total;
}

function suma(suma){
    total = total + suma;
    imprimirTotal(total);
}