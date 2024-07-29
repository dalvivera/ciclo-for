function letraCalificacion(calificacion) {
    let letra;
  
    if (calificacion >= 90 && calificacion <= 100) {
        letra = 'A';
    } else if (calificacion >= 80 && calificacion <= 89) {
        letra = 'B';
    } else if (calificacion >= 70 && calificacion <= 79) {
        letra = 'C';
    } else if (calificacion >= 60 && calificacion <= 69) {
        letra = 'D';
    } else if (calificacion >= 0 && calificacion <= 59) {
        letra = 'F';
    } else {
        return "Calificación inválida.";
    }
  
    return `La calificación es ${letra}.`;
}
console.log(letraCalificacion(95)); // aqui modificamos ing jeff
