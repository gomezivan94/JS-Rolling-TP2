// EJERCICIO 1

/* let edad = parseInt(prompt("Ingrese su edad"))

if (isNaN(edad)){
    alert("Ingresa un numero valido")
} else if (edad >= 18){
    alert("Puede conducir") 
} else {
    alert("No puede conducir")
} */


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

// EJERCICIO 4

let suma = 0;

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

document.write('total: ' + suma)