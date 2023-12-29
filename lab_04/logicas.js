/*
 Lógicas

 Retorna booleanos
*/

/*
  AND (&&)
  Evalúa si se cumplen ambos comparativos
*/
let usuario = {
  edad: 15,
  pais: "Colombia",
};
console.log("Condición 1: ", usuario.edad >= 18);
console.log("Condición 2: ", usuario.pais === "Colombia");
console.log(
  "Condición (AND): ",
  usuario.edad >= 18 && usuario.pais === "Colombia"
);

/*
  OR (||)
  Evalúa si se cumple alguno de los comparativos
*/
let intentosDeAcceso = 2,
  ip = 43210939;

console.log("Condición 1: ", intentosDeAcceso >= 3);
console.log("Condición 2: ", ip === 43210939);
console.log("Condición (OR):", intentosDeAcceso >= 3 || ip === 43210939);

/*
  NOT (!)
  Invierto el booleano
*/
let esMenorEdad = 20 <= 18;
console.log(esMenorEdad);
console.log(!esMenorEdad);

let inputNombre;
console.log(!inputNombre);

/*
  ¿Cómo volver datos booleanos?
  Antepongo dos signos de admiración de cierre (!!)
*/
console.log(!!"false");
