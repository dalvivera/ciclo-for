function fibonacciNumbers(n) {
    let fibSeq = []; 
    if (n >= 1) {
        fibSeq.push(0);
    }
    if (n >= 2) {
        fibSeq.push(1);
    }
    for (let i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }   
    return fibSeq;
}
const n = 2; 
const fibNumbers = fibonacciNumbers(n);
console.log(`Los primeros ${n} números de Fibonacci son:`);
console.log(fibNumbers.join(', ')); 
