function fibonacci(n) {
    let fibonacciSeries = [0,1]; 
    for (let i = 2; i < n; i++) {
        let nextFib = fibonacciSeries[i-1] + fibonacciSeries[i-2];
        fibonacciSeries.push(nextFib);
    }  
    return fibonacciSeries;
}
function imprimirFibonacci(numbers) {
    for (let number of numbers) {
        console.log(number);
    }
}
let n = 1  ; // ING. jeff aqui cambie su numero.
let Fibo = fibonacci(n);
console.log(`Los primeros ${n} números de Fibonacci son:`);
imprimirFibonacci(Fibo);
