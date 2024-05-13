// Tipo de dato complejo - Paso por referencia

let frutas = {
    naranja : '🍊'
};

let vegetales = frutas;

vegetales.naranja = '🥦';

console.log(frutas);

let ropa =  {
    blusa: '👚'
}
// Existe un recurso en JS Garbage collector 


ropa.pantalon = '👖';

console.log(ropa);
console.log(ropa.blusa);
console.log(ropa.pantalon);

