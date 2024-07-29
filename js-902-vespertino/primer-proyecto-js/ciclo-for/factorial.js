function factorialIterativo(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
let numero = 10; // profe: jeff aqui cambie su numero
let resultado = factorialIterativo(numero);
console.log(`El factorial de ${numero} es: ${resultado}`);