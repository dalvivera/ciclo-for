// aqui modifique los numeros ing jef
const num1 = 1;
const num2 = 5;

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division;

if (num2 !== 0) {
    division = num1 / num2;
} else {
    console.log("No se puede dividir entre cero.");
}
console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multiplicacion}`);
if (division !== undefined) {
    console.log(`División: ${division}`);
}
