/**
 * JavaScript
 *
 * Lenguaje de programación
 *
 * Instrucciones a un computador
 */

/**
 * Datos
 *
 * String, números, booleano, conjuntos de datos, objetos, etc.
 */

// Cadena de texto (String)
console.log("Joan");

// Números
console.log(20);

// Booleanos
console.log(true);
console.log(false);

// Conjunto de catos
console.log(["Joan", 20, true, {}]);

// Objetos
console.log({
  nombre: "Joan",
  apellido: "Diaz del Castillo",
  edad: 32,
  familia: ["Fernando", "Maribel", "Jose", "María", "Owen"],
});

/**
 * Variables
 *
 * Almacenar datos
 *
 * Sintaxis
 *
 * llave nombreVariable = dato;
 */

// Declaración
let color;
let permisos;

// Declaración e inicialización
let nombre = "Joan";

// Modificables
let tamano = 200;

tamano = 500;

// No modificables (constante)
const id = 48309124039281;
const usuario1 = {
  nombre: "Joan",
  apellido: "Diaz del Castillo",
  rol: "admin",
};

/**
 * Comparativos
 *
 * Evaluar la diferencia entre dos datos
 */

console.log(20 > 10);
console.log(usuario1.rol === "admin");
console.log(!!"Joan");
console.log(!!permisos);

/**
 * Lógicas
 *
 * - OR (||)
 * - AND (&&)
 * - NOT (!)
 */

/**
 * Condicionales
 *
 * Sintaxis
 *
 *  if (condición)
 */
if (usuario1.rol === "admin") {
  permisos = "todos";
} else {
  permisos = "restringidos";
}

/**
 * 1. Almacenar en un variable constante con nombre visitante1 un objeto con las siguientes llaves y datos:
 * - nombre: pedro (string)
 * - apellido: musk (string)
 * - membresía: platino (string)
 * - edad: 20 (número)
 *
 * 2. Crear una condicional con la siguiente estructura:
 * - Si la membresía del visitante1 es platino y su edad es mayor o igual a 18, imprimir
 * en la consola el string: tiene acceso a todas las atracciones
 * - De lo contrario  si tiene una membresía igual a oro y su edad es mayor o igual a 18, imprimir
 * en la consola el string: tiene acceso limitado a atracciones para adultos
 * - De lo contrario si tiene una membresía y su edad es menor a 18, imprimir
 * en la consola: tiene acceso a las atracciones infantiles
 * - De lo contrario imprimir en la consola: no tiene acceso al parque de diversiones
 */

/**
 * 1. Declarar tres variables (camelCase) constantes:
 * - presupuesto (número): 150_000
 * - productos (conjunto de datos con múltiples objetos):
 * -- 1. Objeto
 * -- nombre (string): Echo Dot
 * -- precio (número): 70_000
 * -- 2. Objeto
 * -- nombre (string): Fire TV
 * -- precio (número): 60_000
 * - precio total (número): productos.reduce((acc, curr) => acc + curr.precio, 0)
 * 2. Crear una condicional con la siguiente estructura:
 * - Si la variable precio total es menor o igual a la variable presupuesto imprimir en la consola: comprar productos
 * - De lo contrario imprimir en la consola: no comprar productos, supera mi presupuesto
 */
