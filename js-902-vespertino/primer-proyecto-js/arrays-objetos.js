
//array, lista, objeto o vector
// son un conjunto de variables
// los objetos son entidades que tienen atributos, los atributos son todad las caracteristicas que pertenecen al objeto
//ejemplo de como declarar un array
const datos = [1, "hola", true, undefined, null];
const datos2 = new Array(1, "hola", true, undefined, null);
const datos3(3) = new Array(3); // array con llenado posterior a la declarada
datos3[1] = "hola mundo";
datos3[0] = 1;
const datos4 = [datos, datos2, datos3]; //----> lista de listas

//Ejemplos de impresion
console.log(datos);
console.log(datos2);
console.log(datos3);
console.log(datos4);

//Objetos
// ejemplo de objetos
const alunmo ={
    //arributos
    edad:15,
    peso:80,
    nombre: "pedro",
    isBlack; false,
    amistades: ["confi1","confi2","confi3","confi4"]
}
//impresion del objeto
console.log(alunmo);

//impresion especifica
console.log(alunmo.amistades);