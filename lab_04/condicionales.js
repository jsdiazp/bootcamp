/*
  Condicionales

  Se ejecuta una instrucción si se cumple una condición
*/

/*
  if (condición) {
    ...instrucciones;
  }

  ¿Qué puede ser una condicional?
    - Comparativo
    - Lógica
*/
let intentosDeAcceso = 2,
  ip = 43210939;

if (intentosDeAcceso >= 3 || ip === 43210939 || ip === 439208032) {
  console.log("Bloqueado");
}

let x = 10,
  y = 20;

if (x > y) {
  console.log("X es mayor a Y");
}

/*
  if ... else

  Sintaxis
  if (condición) {
    ...instrucciones;
  } else {
    ...instrucciones;
  }
*/

let errores = 0,
  cc = 4938023;

if (errores > 3 || cc === 4938023) {
  console.log("No entra");
} else {
  console.log("Entra");
}

let usuario = {
  rol: "Admin",
};

if (usuario.rol === "Admin") {
  console.log("Puede acceder a todo.");
} else {
  console.log("Acceso limitado.");
}

/*
  else if
*/
let usuario2 = {
  tipo: "personal",
};

if (usuario2.tipo === "personal") {
  console.log("Acceso a todas las zonas.");
} else if (usuario2.tipo === "miembro") {
  console.log("Acceder a: Piscina, Restaurantes, Bar y el Parque.");
} else {
  console.log("Accede solo al Lobby");
}

/*
  Ejemplo con lógica NOT
*/

// Declarar variable sin asignar
let name;

// Declara variable y asignarla
let surname = "Diaz del Castillo";

let nombre = "Joan",
  correo;

console.log(nombre);
console.log(!!nombre);

if (!nombre || !correo) {
  console.log("Ingresar todos los datos requeridos: Nombre y Correo");
} else {
  console.log("Formulario enviado");
}

if (nombre && correo) {
  console.log("Formulario enviado");
} else {
  console.log("Ingresar todos los datos requeridos: Nombre y Correo");
}
