for (let multiplicando = 1; multiplicando <= 10; multiplicando++) {
    console.log(`Tabla de multiplicar del ${multiplicando}:`);
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        const resultado = multiplicando * multiplicador;
        console.log(`${multiplicando} X ${multiplicador} = ${resultado}`);
    }

  }