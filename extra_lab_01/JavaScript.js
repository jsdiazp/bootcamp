/* 
variables

sintaxis
llave nombreVariable = dato;
*/

// modificables
let color = "red";

// ¿Cómo se modifican?
color = "blue";

// constantes
const id = 4329874893;

// string
const name = "Joan";

// number
const edad = 32;

// boolean
const esColombiano = true;

/*
  conjunto de datos (array)
  llave nombreDeConjunto = [data1,dato2,...datos];
*/
const familia = ["Fernando", "Maribel", "Jose", "María", "Owen"];
const años = [2019, 2020, 2021, 2023];

// ¿Cómo acceder a un dato del conjunto de datos?
console.log(familia[1]);

familia[4] = "Lucky";

console.log(familia);

// bucles

/* 
  for

  for (iterador; condición; incrementoIterador) {
    ...instrucciones;
  }
*/

for (let i = 0; i < 8; i++) {
  console.log("Repetición: " + (i + 1));
}

for (let i = 0; i < familia.length; i++) {
  console.log(familia[i]);
}

/*
  while

  while (condición) {
    ...instrucciones;
  }
*/
let condition = true;
let i = 0;
const familia = ["Fernando", "Maribel", "Jose", "María", "Owen"];

while (condition) {
  console.log(familia[i]);
  if (familia[i] === "Jose") {
    condition = false;
  }
  i++;
}

/*
  Comparativos
*/

// números

// Mayor que
console.log(20 > 12);

// Menor que
console.log(20 < 12);

// Mayor o igual que
console.log(20 >= 12);

// Menor o igual que
console.log(20 <= 12);

// number, string, boolean, ..any

// Es igual
console.log(20 === 12);

// Es diferente
console.log("joan" !== "pedro");

/*
  Condicionales

  if, else y else if
*/

/*
  if (condición) {
    ...instrucciones;
  }
*/
const edadJuan = 30;
if (edadJuan >= 18) {
  console.log("Mayor de edad");
  console.log("Déjelo entrar");
}

/* 
  if..else 

  if (condición) {
    ...instrucciones;
  } else {
    ...instrucciones;
  }
*/
const edadLuciana = 6;
if (edadLuciana >= 18) {
  console.log("Mayor de edad");
  console.log("Déjelo entrar");
} else {
  console.log("Menor de edad");
  console.log("No entra");
}

/*
  else if
*/
const contrasena = "12345a";
let intento = 1;

if (contrasena === "password5012") {
  console.log("Acceso autorizado");
} else if (intento > 3) {
  console.log("Bloqueado por 2 horas");
} else {
  console.log("Contraseña errada");
  intento++;
}

let x = 12,
  y = 12;

if (x === y) {
  console.log("x es igual a y");
} else if (x > y) {
  console.log("x es mayor a y");
} else {
  console.log("x es menor de y");
}

// lógicas AND, OR y NOT

// AND
let userAge, userCountry;

if (userAge >= 18 && userCountry == "Colombia") {
  console.log("Autorizado para ingresar");
  console.log("Habilitados precios en pesos");
}

// OR
let attempt,
  ip,
  blockedIps = [];

if (attempt > 3 || blockedIps.includes(ip)) {
  console.log("User blocked");
}

// NOT
let estrato = 4;

if (!(estrato >= 4)) {
  console.log("Cumple filtro de la encuesta");
}

let creditCard;

if (!creditCard) {
  console.log("Credit card required.");
} else {
  console.log("Processing payment.");
}

/*
  Funciones

  Sintaxis declaración
  function nombreDeFunción(propiedad1, propiedad2, ...propiedadN) {
    ...instrucciones;
  }

  llave nombreDeFunción = (propiedad1, propiedad2, ...propiedadN) => {
    ...instrucciones;
  };

  Sintaxis ejecución
  nombreFunción();
*/

let users = [
  { id: 438928, name: "Fernando" },
  { id: 9857983, name: "Joan" },
];

function esMiembro(id) {
  const filteredUsers = users.filter((user) => {
    return user.id === id;
  });

  if (filteredUsers.length) {
    return true;
  } else {
    return false;
  }
}

console.log(esMiembro(438928));

function esMultiplo(numero, divisor) {
  const residuo = numero % divisor;

  return residuo === 0;
}

console.log(esMultiplo(4, 8));

// nombreFunción = saludo
// instrucción: Imprimir "¡Hola!" en la consola
function saludo() {
  console.log("¡Hola!");
}

/* 
  nombreFunción: multiplicación

  Instrucciones:
  1. recibir propiedades x, y;
  1. almacenar resultado de multiplicación x * y en constante llamada resultado;
  2. retornar resultado de multiplicación;
*/
function multiplicacion(x, y) {
  const resultado = x * y;

  return resultado;
}

console.log(multiplicacion(10, 2));
console.log(multiplicacion(43, 39));

/*
  nombreFunción: saludo
  propiedades:
    1. Usuario: Objeto con las llaves: ID y nombre
  instrucciones:
    1. Imprima en la consola una concatenación "¡Hola " + variable nombre del usuario + "!"
*/

function saludo(usuario) {
  console.log("¡Hola " + usuario.nombre + "!");
}

let joan = {
  id: 38032,
  rol: "admin",
};

saludo(joan);

/*
  nombreFunción: esAdministrador
  propiedades:
    1. usuario: Objeto con las llaves: ID, rol y nombre
  instrucciones:
    1. si no ingresa usuario, detener función
    2. realizar comparación para determinar si el rol del usuario es igual a "admin", almacenar comparación en constante resultado
    3. retornar constante resultado
*/
function esAdministrador(usuario) {
  if (!usuario) {
    return;
  }

  const resultado = usuario.rol === "admin";

  return resultado;
}

console.log(esAdministrador(20));

/*
  nombreFunción: división
  propiedades:
    1. x
    2. y
  instrucciones:
    1. si no ingresa x o y, imprimir en consola, "no ingreso propiedades"
    2. almacenar división de x / y en constante con nombre resultadoDivision
    3. imprimir en consola dato almacenado en constante resultadoDivision
    4. retornar constante resultadoDivision
*/
