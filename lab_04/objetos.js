/*
  Objetos

  Sintaxis

  llave nombreObjeto = {
    llave: dato,
  }
*/
let usuario = {
  apellido: "Abril",
  edad: 6,
};

// Acceder a dato dentro del objeto (utiliza llave)
console.log(usuario.apellido);

// Modificar dato dentro del objecto
usuario.edad = 7;
console.log(usuario.edad);
console.log(usuario);
