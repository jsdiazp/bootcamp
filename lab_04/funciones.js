/*
  Funciones
  
  - Agrupar instrucciones que voy a utilizar múltiples veces
  - Pueden o no recibir unos parámetros
  - Pueden o no retornar un dato

  Sintaxis

  function nombreFunción(parámetro1?, parámetro2?, ...parámetroX?) {
    ...instrucciones;
    return dato; // Opcional
  }
*/

function permitirAcceso(usuario) {
  console.log(usuario);
  if (usuario.rol === "admin") {
    return true;
  } else {
    return false;
  }
}

/*
  ¿Cómo llamar una función
  nombreFunción();
 */
let argumentos = {
  rol: "editor",
};
console.log(permitirAcceso({ rol: "admin" }));
console.log(permitirAcceso(argumentos));

function errorDeAutenticacion() {
  console.log("Datos incorrectos");
  console.log("No permitir acceso");
}

console.log(errorDeAutenticacion());
