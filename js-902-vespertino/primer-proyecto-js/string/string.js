//string (cadena de caracteres)

let str_1 = "hola soy un texto en comillas";
let str_2 = 'hola soy un texto con comillas simple';
let str_3 = "comillas dentro de las comillas \"ejemplo\"";
let str_4 = 'comilas dentrio de comillas simple "ejemplo"';
let str_5 = "comillas dentro de comillas 'ejemplo'";

console.log(str_1);
console.log(str_2);
console.log(str_3);
console.log(str_4);
console.log(str_5);

//comillas invertidas (backicks) Alt gr + } x2 ``
let str_6 = `comillas invertidas o backicks`;
console.log(str_6);

let nombre = "Jeffery";
let saludar = `Hola, ${nombre} bienvenido`;

console.log(saludar);

let plantilla = `
<html>
<h3>Pagina web de ${nombre}</h3>
<p>Esto es un parrafo</p>
</html>
`

console.log(plantilla);