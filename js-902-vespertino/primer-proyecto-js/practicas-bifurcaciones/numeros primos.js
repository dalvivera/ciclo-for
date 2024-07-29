console.log("Los números primos en el rango de 1 a 100 son:");

// Recorre el rango de números
for (let i = 2; i <= 100; i++) {
  // Verifica si el número es primo
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  // Muestra el número primo si lo es
  if (isPrime) {
    console.log(i, "- Es un número primo");
  }
}