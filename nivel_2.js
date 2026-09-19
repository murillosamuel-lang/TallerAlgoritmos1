// Nivel 2: El portero del festival

// Predicciones relámpago
let a = true;
let b = false;
console.log(a && !b); // true

let n = 2;
switch (n) {
  case 1: console.log("uno");
  case 2: console.log("dos");
  case 3: console.log("tres");
} // dos, tres (no hay break)

let hp = 0;
let estado = hp > 0 ? "vivo" : "game over";
console.log(estado); // game over

// Práctica guiada: el Rango SS va primero
let puntaje = 100;
if (puntaje === 100) {
  console.log("Rango SS");
} else if (puntaje >= 90) {
  console.log("Rango S");
} else if (puntaje >= 70) {
  console.log("Rango A");
} else if (puntaje >= 50) {
  console.log("Rango B");
} else {
  console.log("Sigue practicando");
}

// Reto flash: "moneda" o "monedas"
let monedas = 99;
let faltan = 100 - monedas;
console.log(`Te faltan ${faltan} ${faltan === 1 ? "moneda" : "monedas"}.`);

// Reto 2.1: Taquilla del cine
let dia = "miércoles";
let esEstudiante = false;
let precio = 18000;
if (dia === "miércoles" || esEstudiante) {
  precio = precio / 2;
}
console.log(`Pagas ${precio}`); // 9000

// Reto 2.2: Piedra, papel o tijera
let jugador1 = "piedra";
let jugador2 = "tijera";
if (jugador1 === jugador2) {
  console.log("Empate");
} else if (
  (jugador1 === "piedra" && jugador2 === "tijera") ||
  (jugador1 === "tijera" && jugador2 === "papel") ||
  (jugador1 === "papel" && jugador2 === "piedra")
) {
  console.log("Gana jugador 1");
} else {
  console.log("Gana jugador 2");
}

// Reto 2.3: Control del videojuego
let tecla = "w";
switch (tecla) {
  case "w":
    console.log("Arriba");
    break;
  case "a":
    console.log("Izquierda");
    break;
  case "s":
    console.log("Abajo");
    break;
  case "d":
    console.log("Derecha");
    break;
  default:
    console.log("Tecla sin función");
}

// Reto 2.4: Ternario express
let puntos = 850;
let mensaje = puntos >= 1000 ? "Nivel desbloqueado" : "Sigue jugando";
console.log(mensaje);

// Cazabugs: notas.js corregido
let nota = 4.5;
if (nota < 0 || nota > 5) {
  console.log("Nota inválida");
} else if (nota >= 4.5) {
  console.log("Excelente");
} else if (nota >= 3.0) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}