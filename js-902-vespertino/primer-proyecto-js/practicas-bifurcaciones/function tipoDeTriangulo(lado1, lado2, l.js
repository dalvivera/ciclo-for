function tipoDeTriangulo(lado1, lado2, lado3) {
    let tipo = '';
  
    switch (true) {
      case (lado1 <= 0 , lado2 <= 0 , lado3 <= 0):
        return "Las medidas deben ser mayores que cero.";
      case (lado1 + lado2 <= lado3 , lado1 + lado3 <= lado2 , lado2 + lado3 <= lado1):
        return "Las medidas no forman un triángulo.";
      case (lado1 === lado2 && lado2 === lado3):
        tipo = 'equilátero';
        break;
      case (lado1 === lado2 , lado1 === lado3 , lado2 === lado3):
        tipo = 'isósceles';
        break;
      default:
        tipo = 'escaleno';
    }
  
    switch (tipo) {
      case 'equilátero':
        return "El triángulo es equilátero.";
      case 'isósceles':
        return "El triángulo es isósceles.";
      case 'escaleno':
        return "El triángulo es escaleno.";
      default:
        return "Error desconocido.";
    }
  }
  console.log(tipoDeTriangulo(3, 3, 3));  // aqui modificamos ing jeff
 