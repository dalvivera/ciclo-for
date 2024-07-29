function letraCalificacion(calificacion) {
    let letra;
  
    switch (true) {
      case (calificacion >= 90 && calificacion <= 100):
        letra = 'A';
        break;
      case (calificacion >= 80 && calificacion <= 89):
        letra = 'B';
        break;
      case (calificacion >= 70 && calificacion <= 79):
        letra = 'C';
        break;
      case (calificacion >= 60 && calificacion <= 69):
        letra = 'D';
        break;
      case (calificacion >= 0 && calificacion <= 59):
        letra = 'F';
        break;
      default:
        return "Calificación inválida.";
    }
  
    return `La calificación es ${letra}.`;
  }
  
  console.log(letraCalificacion(95)); // aqui modificamos ing jeff
  