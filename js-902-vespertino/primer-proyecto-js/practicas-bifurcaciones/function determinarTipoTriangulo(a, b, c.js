function determinarTipoTriangulo(a, b, c) {
    if (a === b && b === c) {
        console.log("El triángulo es equilátero");
    } else if (a === b ,b === c , a === c) {
        console.log("El triángulo es isósceles");
    } else {
        console.log("El triángulo es escaleno");
    }
}


const n1 = 5;
const n2 = 5;
const n3 = 5;
determinarTipoTriangulo(n1, n2,n3);