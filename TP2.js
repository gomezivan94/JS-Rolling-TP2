// EJERCICIO 1

/* let edad = parseInt(prompt("Ingrese su edad"))

if (isNaN(edad)){
    alert("Ingresa un numero valido")
} else if (edad >= 18){
    alert("Puede conducir") 
} else {
    alert("No puede conducir")
} */

// -------------------------------------------------------------

// EJERCICIO 2

/* let nota;

do {
    let entrada = prompt("Ingrese una nota del 0 al 10");

    if(entrada === null || entrada == ''){
        alert("No se ingreso ninguna nota")
        break;
    }

    nota = +(entrada);

    if(isNaN(nota)){
        alert("Ingresa un numero valido")
    } else if(nota < 0 || nota > 10){
        alert("Numero invalido")
    } else {
        switch(nota){
            case 0:
            case 1:
            case 2:
            alert("Muy deficiente")
            break;
            case 3:
            case 4:
            alert("Insuficiente")
            break;
            case 5:
            case 6:
            alert("suficiente")
            break;
            case 7:
            alert("Bien")
            break;
            case 8:
            case 9:
            alert("Notable")
            break;
            case 10:
            alert("Sobresaliente")
        }
    }


} while(confirm("Desea continuar?")) */

// EJERCICIO 3

// ------------------------------------------------

/* let resultado = '';

do {
    let palabra = prompt("Ingresa una palabra").trim();

    if(palabra === null){
        alert("Ingresa una palabra");
        break;
    } else if(resultado === ''){
        resultado = palabra;
    } else {
        resultado = resultado + '-' + palabra;
    }


} while(confirm("Desea continuar?"))

document.write(resultado || "no se ingresaron palabras"); */


//--------------------------------------------------

// EJERCICIO 4

/* let suma = 0;

do {
    let numero = (prompt("Ingrese un numero"))

    if(numero === null){
        break;
    } else if (!isNaN(numero) && numero.trim() !== ''){
        suma += +(numero);
    } else {
        alert(`${numero} no es un numero valido`)
    }

} while (true)

document.write('total: ' + suma) */

// --------------------------------------- 

// EJERCICIO 5

/* const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

while (true){
    
    let numeroDNI = prompt("Ingrese el numero de DNI")

    if(numeroDNI === null){
        alert("Introduce un numero valido")
        break;
    }

    if(!isNaN(numeroDNI) && numeroDNI >= 0 && numeroDNI <= 99999999){
        numeroDNI = parseInt(numeroDNI);
        
        let resto = numeroDNI % 23;
        let letra = letras[resto];

        alert(`La letra correspondiente al DNI ${numeroDNI} es ${letra}`)
        break;
    
    } else {
        alert("Ingresa un numero valido")
    }

} */

// -----------------------------------------------------

// EJERCICIO 6

/* for (let i = 1; i <= 30; i++) {
    let numero = '';
    for (let adicion = 0; adicion < i; adicion++) {
        numero += i;
    }
    document.write(numero);
    document.write("<br>");
} */

//

// ----------------------------------------

// EJERCICIO 7

/* let entrada = parseInt(prompt("Ingresa un numero"))


if (entrada > 0 && entrada <= 50){

for (let i = entrada; i >= 1; i--) {
    let numero = '';
    for (let sustraccion = 0; sustraccion < i; sustraccion++) {
        numero += i;
    }
    document.write(numero);
    document.write("<br>");
}

} else {
    alert("Ingresa un numero valido")
} */

// ----------------------------------------

// EJERCICIO 8

/* let entrada = parseInt(prompt("Introduce un número (no mayor a 50):"));

// Validar que el número esté entre 1 y 50
if (entrada > 0 && entrada <= 50) {
    // Generar la pirámide
    for (let i = 1; i <= entrada; i++) {
        let linea = '';
        for (let adicion = 1; adicion <= i; adicion++) {
            linea += adicion;
        }
        document.write(linea)
        document.write("<br>")
    }
} else {
    console.log("Por favor, introduce un número válido entre 1 y 50.");
} */

// ----------------------------------------

// EJERCICIO 9


/* let limite = 500;

for (let i = 1; i <= limite; i++) {
    //escribir el numero
    document.write(i)

    // identificar si es multiplo de 
    if(i % 4 === 0){
        document.write(" es multiplo de 4")
    } 
    if (i % 9 === 0){
        document.write(" es multiplo de 9")
    }

    // salto de linea despues de cada numero
    document.write("<br>")

    // Agregar linea cada 5 numeros
    if(i % 5 === 0 ){
        document.write("<hr>")
    }

} */

// -----------------------------------------------------

// EJERCICIO 10

/* let filas = parseInt(prompt("ingrese numero de filas"))
let columnas = parseInt(prompt("ingrese numero de columnas"))


if(isNaN(filas) || filas <= 0 || isNaN(columnas) || columnas <= 0 ){
    alert("Ingrese un numero valido")
} else {
    
    let total = filas * columnas;

    document.write('<table border="1" style="border-collapse; text-align:center;">')

    for (let indiceFila = 0; indiceFila < filas; indiceFila++) {
        document.write('<tr>');

        for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
        document.write('<td>' + total + '</td>');
        total--;
        
        } 

        document.write('</tr>')

    }
    document.write('</table>')
} */

// ----------------------------------------------------------

// EJERCICIO 11

/* let nombre1 = prompt("Primer persona ingrese su nombre");
let nombre2 = prompt("Segunda persona ingrese su nombre");
let nombre3 = prompt("Tercer persona ingrese su nombre");
let edad1 = parseInt(prompt(nombre1 + " ingrese su edad"))
let edad2 = parseInt(prompt(nombre2 + " ingrese su edad"))
let edad3 = parseInt(prompt(nombre3 + " ingrese su edad"))

let mayor = Math.max(edad1, edad2, edad3);

if(mayor === edad1){
    alert("El mayor es " + nombre1)
} else if(mayor === edad2) {
    alert("El mayor es " + nombre2)
} else {
    alert("El mayor es " + nombre3)
} */


// ---------------------------------------------------------

// EJERCICIO 12

/* let numeroRandom = Math.floor(Math.random() * 99) ;

document.write(numeroRandom) */

// ---------------------------------------------------------

// EJERCICIO 13

/* let ingreso = prompt("Ingrese un texto")

let mayusculas = ingreso.toUpperCase()

document.write(mayusculas) */


// ------------------------------------------------------------

// EJERCICIO 14

/* let texto = prompt("Introduce un texto:");

let textoConGuiones = '';

for (let i = 0; i < texto.length; i++) {
    textoConGuiones += texto[i];

    if (i < texto.length - 1) {
        textoConGuiones += '-';
    }
}

document.write(textoConGuiones); */


// ------------------------------------------------------------

// EJERCICIO 15

/* let texto = prompt("Ingrese un texto");


let contador = 0;


texto = texto.toLowerCase();
for (let i = 0; i < texto.length; i++) {
    
    if(texto[i] === "a" || texto[i] === "e" || texto[i] === "i" || texto[i] === "o" || texto[i] === "u"){
        contador++
    }
    
    
}
document.write("La cantidad de vocales encontradas son: " + contador) */

// -------------------------------------------------------------

// EJERCICIO 16

/* let texto = prompt("Introduce un texto");

let textoInvertido = texto.split('').reverse().join('');

document.write(textoInvertido); */

// ----------------------------------------------------------------

// EJERCICIO 17

let texto = prompt("Introduce un texto:");
texto = texto.toLowerCase();

let vocales = ['a', 'e', 'i', 'o', 'u'];

let posicionVocal = -1;

for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
        posicionVocal = i;
        break;
    }
}

if (posicionVocal !== -1) {
    document.write(`La vocal '${texto[posicionVocal]}' está en la posición ${posicionVocal}`);
} else {
    document.write("No se encontraron vocales.");
}