// Créditos finales

let equipo = "TuNombreDeEquipo"; // pon el nombre de tu equipo

// XP por etapa (ejemplo: cambia cada valor por el de tu equipo)
let sesion0 = 30;
let nivel1 = 120;
let nivel2 = 180;
let nivel3 = 170;
let nivel4 = 200;
let jefe = 200;
let cierre = 30;

let total = sesion0 + nivel1 + nivel2 + nivel3 + nivel4 + jefe + cierre;

let rango;
if (total >= 900) {
  rango = "Leyenda del algoritmo";
} else if (total >= 600) {
  rango = "Maestro de bucles";
} else if (total >= 300) {
  rango = "Domador de condiciones";
} else {
  rango = "Aprendiz de consola";
}

console.log(`Equipo: ${equipo}`);
console.log(`XP total: ${total}`);
console.log(`Rango: ${rango}`);
console.log("---------- CRÉDITOS FINALES ----------");
console.log("Decide o repite");
console.log(`Gracias por jugar, ${equipo}.`);
