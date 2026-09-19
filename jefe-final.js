// Jefe final: batalla contra el gólem

// Fase 1: la arena
let vidaHeroe = 100;
let vidaGolem = 150;
let pociones = 2;
let turno = 0;
let acciones = ["atacar", "atacar", "atacar", "especial",
                "atacar", "atacar", "curar", "curar"];

// Fase 2: el ciclo de batalla
while (vidaHeroe > 0 && vidaGolem > 0 && turno < acciones.length) {
  let accion = acciones[turno];
  turno++;
  let danio = 0;
  console.log(`--- Turno ${turno}: ${accion} ---`);

  switch (accion) {
    case "atacar":
      danio = 20;
      vidaGolem -= danio;
      console.log(`Golpeas con ${danio}. Gólem: ${vidaGolem}`);
      break;
    case "especial":
      danio = vidaHeroe < 50 ? 60 : 30;
      vidaGolem -= danio;
      console.log(`¡Especial de ${danio}! Gólem: ${vidaGolem}`);
      break;
    case "curar":
      if (pociones > 0) {
        vidaHeroe += 25;
        pociones--;
        console.log(`Te curas. Vida: ${vidaHeroe}`);
      } else {
        console.log("No te quedan pociones");
      }
      break;
    default:
      console.log("Acción desconocida");
  }

  // Fase 3: el gólem contraataca
  if (vidaGolem > 0) {
    let golpe = turno % 3 === 0 ? 35 : 15;
    vidaHeroe -= golpe;
    console.log(`El gólem golpea con ${golpe}. Vida: ${vidaHeroe}`);
  }
}

// Fase 4: veredicto
if (vidaGolem <= 0) {
  console.log("¡VICTORIA! Derrotaste al gólem");
} else if (vidaHeroe <= 0) {
  console.log("GAME OVER. El gólem sigue en pie");
} else {
  console.log("Se acabaron tus acciones. Empate");
}
