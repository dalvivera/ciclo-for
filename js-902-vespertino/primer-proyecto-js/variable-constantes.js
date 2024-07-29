//variables
//Que es una varable?? es un contenedor que pude tener un valor ,puede ser borrado,etc

//declarar variables
var variableVAR; //unavariable de estacia es una variable qeu se deaclara en cual quier parte ddel codigo
let variableLET;//variable local

//ejemplo
for(let i = 3; i < 5; i++){
    console.log(i)
}

var i = 9;
console.log(i) //i es una variable de intancia
               //independiente de i dentro del for

//como se declaran las variables
var x;
x = 0;
console.log(x)

var z = 8;
console.log(z)

let s;
s = 7;
console.log(s)

let f =17;
console.log(17)

//variable let declarada o redudante
var variable = "soy una variable VAR";
let variable1 = "soy una varaible LET";
for(let i = 3; i < 5; i++){//i es una variablelocal
    let varaible1 = "soy una variable let reutilizada";

}

//variable let declarada despues de utilizarla
var variable = "soy una variable VAR";
for(let i = 3; i < 5; i++){//i es una variable local
    let varaible1 = "soy una variable let";
}
let variable1 = "soy una variable  let";
