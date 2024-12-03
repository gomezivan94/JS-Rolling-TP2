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

let nota = parseInt(prompt("Ingrese su nota"))

if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Por favor ingresa una nota valida entre 0 y 10");
} else {
    if (nota >= 9) {
        alert("Calificacion: Excelente");
    } else if (nota >= 7) {
        alert("Calificacion: Muy bien");
    } else if (nota >= 5) {
        alert("Calificacion: Bien");
    } else if (nota >= 3) {
        alert("Calificacion: Suficiente");
    } else {
        alert("Calificacion: Insuficiente");
    }
}