/* 
  Comparativos

  - Evaluar diferencias entre dos datos
  - Retorna un booleano
*/

// Números

// Mayor que (>)
console.log(50 > 10);

// Mayor o igual que (>=)
console.log(60 >= 50);

// Menor que (<)
console.log(10 < 5);

// Menor o igual que (<=)
console.log(5 <= 12);

// Números, strings, booleanos

// Es el dato igual que
const usuario = {
  rol: "editor",
};
console.log(usuario.rol == "editor");
console.log(20 == "20");

// Es el dato y el tipo de dato igual que (recomendado)
console.log(20 === 20);

// Es el dato diferente que
const usuario2 = {
  tipo: "niño",
};
console.log(usuario2.tipo != "adulto");
console.log(20 != "20");

// Es el dato y el tipo de dato diferente que (recomendado)
console.log(20 !== 20);
