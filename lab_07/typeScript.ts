/**
 * Lenguaje de tipificado duro
 *
 * Indicar el tipo de dato que se debe utilizar
 *
 * Beneficios
 *
 * - Minimizo el riesgo de errores al garantizar la calidad de los datos
 * - Al evitar procesos al computador, aceleramos la ejecución del código
 * - Similitud en los lenguajes de tipificado duro
 * - Le facilito la contextualización a mi yo del futuro
 */

/**
 * TypeScript
 *
 * Adiciona tipificación a JavaScript
 */

/**
 * Variables
 *
 * Sintaxis
 * llave nombreVariable: tipoDeDato = dato;
 */

let nombre; // sin tipificar
let edad: number; // tipificado

nombre = "Joan";
edad = 32;

/**
 * Ejercicio Nº 1.1
 *
 * 1. Declarar variable modificable con nombre 'apellido' y tipo de dato 'string'
 * 2. Declarar variable modificable con nombre 'añoDeNacimiento' y tipo de dato 'number'
 * 3. Inicializar la variable 'apellido' con su propio apellido
 * 4. Inicializar la variable 'añoDeNacimiento' con su propio año de nacimiento
 */

/**
 * Conjunto de datos
 */

/**
 * Alternativa 1
 *
 * - Si todos los tipos de datos son iguales
 * - No hay un límite de datos
 *
 * Sintaxis
 *
 * llave nombreVariable: tipoDeDato[] = [dato1, dato2, ...];
 */
const IDs = [21, 45, 35, 65, 87]; // sin tipificar
const grupoDeTrabajo: string[] = ["Fernando", "María", "Andrés"]; // tipificado

/**
 * Alternativa 2
 *
 * - Si los tipos de datos son diferentes
 * - Limitada la cantidad de datos
 *
 * Sintaxis
 * llave nombreConjunto: [tipoDeDato, tipoDeDato, ...] = [data1, dato2, ...];
 */
let vectores = [2, 4]; // sin tipificar

let config1: [
  "absolute" | "relative" | "fixed",
  "center" | "center top" | "center bottom"
];

config1 = ["relative", "center"];

let coordenadas: [latitud: number, longitud: number]; // tipificado

coordenadas = [173294, 4382184302];

/**
 * Objetos
 *
 * Sintaxis
 *
 * llave nombreObjeto: { nombre: string; apellido: string; edad: number } = objeto;
 */

const persona1 = {
  nomb: "María",
  apell: "Posso",
  ed: 389,
  gen: "fem",
}; // sin tipificar

const persona2: {
  nombre: string;
  apellido: string;
  edad: number;
  genero?: "masculino" | "femenino" | "prefiero no indicarlo"; // opcional
} = { nombre: "Joan", apellido: "Diaz", edad: 32, genero: "femenino" }; // tipificado

/**
 * Ejercicio 2.1
 *
 * 1. Declarar una variable constante con nombre 'objectosPersonales' y tipificarla como un conjunto de objetos, el objeto
 * debe tener la siguiente tipificación:
 * - nombre: string
 * - precio (opcional): number
 * - antigüedad: number
 *
 * 2. Inicializar la variable 'objectosPersonales' con por lo menos tres (3) objetos.
 * */

/**
 * Ejercicio 2.2
 *
 * 1. Declarar una variable constante con nombre 'paisUsuario', tipificada como un conjunto de datos con dos (2) datos
 * en especifico, tipificar cada dato de la siguiente manera:
 *
 * - dato1 tipificado como un string, nombrarlo como país
 * - dato2 tipificado como un objeto, nombrarlo como usuario y tipificarlo de la siguiente manera:
 *   * nombre: string
 *   * rol: string
 *
 * 2. Inicializar la constante 'paisUsario' con datos de muestra según la tipificación
 */

/**
 * Ejercicio 2.3
 *
 * 1. Declarar una variable constante con nombre 'servicio', tipificada
 * como un objeto con la siguiente estructura:
 *
 * - nombre: cadena de texto
 * - descripción: cadena de texto
 * - precio: número
 * - categoría (opcional): "tecnología", "telecomunicaciones", "entretenimiento"
 * - países: conjunto de cadenas de texto
 *
 * 2. Inicializar la variable 'servicio' con un dato de muestra según la tipificación
 */

/**
 * Llaves {}:
 *   - Escenarios:
 *     1. Objetos
 *     2. Agrupar instrucciones
 * Corchetes []:
 *   - Escenarios:
 *     1. Conjuntos de datos
 * Paréntesis ():
 *   - Escenarios:
 *     1. Funciones (agrupan parámetros)
 *     2. Condicionales (agrupan condiciones)
 */

/**
 * Tipos
 *
 * Almacenar tipos de datos
 *
 * Sintaxis
 * type NombreTipo = tipoDeDato;
 */
type Persona = {
  nombre: string;
  apellido: string;
  edad: number;
  genero?: "masculino" | "femenino" | "prefiero no indicarlo"; // opcional
};

const persona3: Persona = { nombre: "Andrés", apellido: "Abril", edad: 28 };

const persona4: Persona = {
  nombre: "María",
  apellido: "Díaz del Castillo",
  edad: 31,
};

let personas: Persona[] = [
  persona2,
  persona3,
  persona4,
  { nombre: "Fernando", apellido: "Díaz del Castillo", edad: 58 },
];

/**
 * Ejercicio 3.1
 *
 * 1. Almacenar la siguiente tipificación de un objeto en un tipo llamado 'Servicio':
 *   - nombre: cadena de texto
 *   - descripción: cadena de texto
 *   - precio: número
 *   - categoría (opcional): "tecnología", "telecomunicaciones", "entretenimiento"
 *   - países: conjunto de cadenas de texto
 * 2. Crear una variable constante con nombre servicios tipificada como un conjunto de Servicios, e inicializarla
 * con por lo menos con 3 servicios.
 *
 * 3. Imprimir en la consola el primer índice, de la llave 'países' del segundo índice de la constante 'servicios'
 */

/**
 * Ejercicio 3.2
 *
 * 1. Almacenar la siguiente tipificación de un objeto en un tipo llamado 'Smartphone':
 *   - marca: "Xiaomi", "Redmi", "Apple", "Samsung", "Poco"
 *   - referencia: cadena de texto
 *   - precio: número
 *   - especificaciones: conjunto de cadenas de texto
 *   - procesador (opcional): cadena de texto
 *
 * 2. Almacenar la siguiente tipificación de un objeto en un tipo llamado 'Tienda':
 *   - dirección: cadena de texto
 *   - país: cadena de texto
 *   - código?: número
 *
 * 3. Almacenar la siguiente tipificación de un conjunto de datos en un tipo llamado 'Ítem':
 *   - Índice (0): Smartphone
 *   - Índice (1): Tienda
 *
 * 4. Declarar e inicializar al menos tres (3) variables tipificadas como 'Smartphone';
 *
 * 5. Declarar e inicializar al menos dos (2) variables tipificadas como 'Tienda';
 *
 * 6. Declarar una variable constante con nombre 'items' y tipificarla como un conjunto de Ítems,
 *    inicializar usando los datos almacenados en el punto 4 y 5.
 */
type Smartphone = {
  marca: "Xiaomi" | "Redmi" | "Apple" | "Samsung" | "Poco";
  referencia: string;
  precio: number;
  especificaciones: string[];
  procesador?: string;
};

type Tienda = {
  dirección: string;
  país: string;
  código?: number;
};

type Item = [Smartphone, Tienda];

const smartphone1: Smartphone = {
  marca: "Xiaomi",
  referencia: "Mi 11 Lite",
  precio: 300,
  especificaciones: ['6.55" AMOLED', "Snapdragon 732G", "64 MP"],
};

const smartphone2: Smartphone = {
  marca: "Samsung",
  referencia: "Galaxy S21",
  precio: 800,
  especificaciones: ['6.2" AMOLED', "Exynos 2100", "64 MP"],
};

const smartphone3: Smartphone = {
  marca: "Apple",
  referencia: "iPhone 13",
  precio: 1000,
  especificaciones: ['6.1" OLED', "A15 Bionic", "12 MP"],
};

const tienda1: Tienda = {
  dirección: "Calle 100 # 19-61",
  país: "Colombia",
  código: 110111,
};

const tienda2: Tienda = {
  dirección: "Carrera 7 # 72-41",
  país: "Colombia",
};

const items: Item[] = [
  [smartphone3, tienda1],
  [smartphone2, tienda2],
];

/**
 * Ejercicio 3.3
 *
 * 1. Almacenar la tipifiación de un objeto en un tipo 'Rol':
 *   - nombre: cadena de texto
 *   - puedeContratar: booleano
 *   - puedeComprar: booleano
 *   - tieneEquipoDePersonas: booleano
 *
 * 2. Almacenar la tipificación de un objeto en un tipo 'Empleado':
 *   - nombre: cadena de texto
 *   - apellido: cadena de texto
 *   - añoDeContratación: número
 *   - roles: conjunto de Roles
 *   - equiposDeOficina: conjunto de cadenas de texto
 *
 * 3. Declarar e inicializar al menos dos (2) variables constantes tipificadas como 'Rol'
 *
 * 4. Declarar e inicializar al menos tres (3) variables constantes tipificadas como 'Empleado'
 *
 * 5. Declarar una constante con nombre 'empleados', tipificada como un conjunto de Empleados,
 *    almacenar en ella todos los empleados declarados en el punto 3.
 */

/**
 * Ejercicio 3.4
 *
 * 1. Almacenar la tipificación de un objeto en un tipo llamado 'Agente':
 *   - nombre: cadena de texto
 *   - apellido: cadena de texto
 *   - númeroDeCalificaciones: número
 *
 * 2. Almacenar la tipificación de un objeto en un tipo llamado 'Ciudad':
 *   - país: "Países Bajos", "Bélgica", "Luxemburgo"
 *   - nombre: cadena de texto
 *   - población?: número
 *
 * 3. Almacenar la tipificación de un objeto en un tipo llamado 'Propiedad':
 *   - dirección: cadena de texto
 *   - ciudad: Ciudad
 *   - para: "renta", "venta"
 *   - precio: número
 *   - agente: Agente
 *   - especificaciones: conjunto de cadenas de texto
 *
 * 4. Declarar e inicializar al menos dos (2) variables constantes tipificadas como 'Agente'
 *
 * 5. Declarar e inicializar al menos tres (3) variables constantes tipificadas como 'Ciudad'
 *
 * 6. Declarar e inicializar al menos dos (4) variables constantes tipificadas como 'Propiedad'
 *
 * 7. Declarar una constante con nombre 'propiedades', tipificada como un conjunto de objetos con
 *    la siguiente estructura:
 *   - visible: booleano
 *   - propiedad: Propiedad
 *
 *    Inicializar la constante utilizando las propiedades del punto 6.
 */

/**
 * Bucles
 *
 * Proceso que se repite
 */

/**
 * for
 *
 * Sintaxis
 * for (declararIterador; condiciónParaSeguirIterando; incrementoDelIterador) {
 *  instrucciones;
 * }
 */
for (let iterador = 0; iterador < 10; iterador++) {
  const repetición = iterador + 1;
  console.log("Iteración " + repetición);
}

type Materia = {
  nombre: string;
  calificación: number;
};

type Niño = {
  calificaciones: Materia[];
};

const luciana: Niño = {
  calificaciones: [
    {
      nombre: "Matemáticas",
      calificación: 8,
    },
    {
      nombre: "Programación",
      calificación: 10,
    },
    {
      nombre: "Filosofía",
      calificación: 9.5,
    },
  ],
};

let calificaciónPromedio: number;
let sumaDeCalificaciones: number = 0;

const cantidadDeMaterias = luciana.calificaciones.length;

for (let iterador = 0; iterador < cantidadDeMaterias; iterador++) {
  console.log("Iterador:", iterador);

  const materia = luciana.calificaciones[iterador];

  console.log("Materia:", materia);

  sumaDeCalificaciones += materia.calificación;

  console.log("Suma calificación:", sumaDeCalificaciones);
}

calificaciónPromedio = sumaDeCalificaciones / cantidadDeMaterias;

console.log("Calificación promedio:", calificaciónPromedio);

/**
 * Ejercicio 4.1
 *
 * 1. Declarar una constante nombre 'dimensiones', tipificada como un conjunto de números con solo
 * tres (3) índices, nombrar cada índice de la siguiente manera:
 * - Índice (0): alto
 * - Índice (1): ancho
 * - Índice (2): largo
 *
 * 2. Inicializar la constante 'dimensiones' con los siguientes datos:
 * - Índice (0): 20
 * - Índice (1): 35
 * - Índice (2): 20
 *
 * 3. Declarar una variable con nombre 'm3' tipificada como un número
 *
 * 4. Calcular los metros cúbicos en una variable con nombre 'm3' utilizando un bucle 'for'
 */

const dimensiones: [alto: number, ancho: number, largo: number] = [20, 35, 20];
let m3: number = 1;
// const cantidadDeDimensiones = dimensiones.length;
for (let iterador = 0; iterador < dimensiones.length; iterador++) {
  // m3 = m3 * dimensiones[iterador];
  m3 *= dimensiones[iterador];
}
console.log("m3 (for):", m3);

// ¿Qué hace el computador?
{
  let iterador = 0;
  let m3: number = 1;
  // Antes de ejecutar las instrucciones dadas
  if (iterador < 3) {
    m3 *= dimensiones[iterador]; // 1 * 20
    iterador++;
  } else {
    // break;
  }
  if (iterador < 3) {
    m3 *= dimensiones[iterador]; // 20 * 35
    iterador++;
  } else {
    // break;
  }
  if (iterador < 3) {
    m3 *= dimensiones[iterador]; // 700 * 20
    iterador++;
  } else {
    // break;
  }
  console.log("m3 (for explicado)", m3);
}

/**
 * Ejercicio 4.2
 *
 * 1. Declarar una constante con nombre 'carritoDeCompras' tipificada como un conjunto de objetos,
 * el objeto debe ser tipificado así:
 * - nombre: cadena de texto
 * - precio: número
 *
 * 2. Inicializar la constante 'carritoDeCompras' con al menos tres (3) objetos
 *
 * 3. Declarar una variable con nombre 'precioTotal' tipificada como un número
 *
 * 4. Calcular el precio total utilizando un bucle 'for'
 *
 * 5. Imprimir en la consola la variable 'precioTotal'
 */

/**
 * Ejercicio 4.3
 *
 * 1. Almacenar la siguiente tipificación de un objeto en un tipo llamado 'Alumno':
 * - nombre: cadena de texto
 * - apellido: cadena de texto
 * - edad?: número
 * - calificaciónSaber11: número
 *
 * 2. Declarar una constante con nombre 'colegioNuevaGranada' tipificada como un conjunto de Alumnos,
 * e inicializarla con los siguientes Alumnos:
 * - Índice (0):
 *   * nombre: Pedro
 *   * apellido: Ruiz
 *   * calificaciónSaber11: 500
 * - Índice (1):
 *   * nombre: Camilo
 *   * apellido: Rueda
 *   * calificaciónSaber11: 750
 * - Índice (2):
 *   * nombre: Rosario
 *   * apellido: Tijeras
 *   * calificaciónSaber11: 900
 * - Índice (3):
 *   * nombre: Patricia
 *   * apellido: Castro
 *   * calificaciónSaber11: 300
 *
 * 3. Declarar una variable con nombre 'acumuladorCalificacionesNuevaGranada' tipificada como un número,
 * e inicializarla con 0
 *
 * 4. Declarar una constante con nombre 'cantidadDeAlumnosNuevaGranada', tipificada como un número,
 * e inicializarla con la cantidad del alumnos del colegio nueva granada.
 *
 * 5. Acumular la calificación de los alumnos del colegio nueva granada
 * en la variable 'acumuladorCalificacionesNuevaGranada' utilizando un bucle 'for'
 *
 * 6. Declarar una constante con nombre 'promedioSaber11AlumnosNuevaGranada' tipificada como un número,
 * inicializarla con el calculo de 'acumuladorCalificacionesNuevaGranada' sobre 'cantidadDeAlumnosNuevaGranada'
 */

/**
 * Funciones
 *
 * Alt. 1
 *
 * Sintaxis
 * function nombreFunción(
 *   parámetro1: tipoDeDato,
 *   parámetro2: tipoDeDato,
 *   parámetroX: tipoDeDato
 * ): tipoDeDatoDelRetorno {
 *  instrucciones
 * }
 */

// @ts-ignore
function pasoElAñoV1(niño) {
  let calificaciónPromedio;
  let cantidadDeMaterias = niño.calificaciones.length;
  let acumuladorDeCalificaciones = 0;

  for (let iterador = 0; iterador < cantidadDeMaterias; iterador++) {
    acumuladorDeCalificaciones =
      acumuladorDeCalificaciones + niño.calificaciones[iterador].calificación;
  }

  calificaciónPromedio = acumuladorDeCalificaciones / cantidadDeMaterias;

  if (calificaciónPromedio >= 6) {
    return true;
  } else {
    return "false";
  }
} // Sin tipificar

type Asignatura = {
  nombre: string;
  calificación: number;
};

type Estudiante = {
  calificaciones: Asignatura[];
};

function pasoElAñoV2(niño: Estudiante): boolean {
  let calificaciónPromedio: number;
  let cantidadDeCalificaciones: number = niño.calificaciones.length;
  let acumuladorDeCalificaciones: number = 0;

  for (let iterador = 0; iterador < cantidadDeCalificaciones; iterador++) {
    acumuladorDeCalificaciones =
      acumuladorDeCalificaciones + niño.calificaciones[iterador].calificación;
  }

  calificaciónPromedio = acumuladorDeCalificaciones / cantidadDeCalificaciones;

  if (calificaciónPromedio >= 6) {
    return true;
  } else {
    return false;
  }
}

let pedroJose: Estudiante = {
  calificaciones: [
    { nombre: "Matemáticas", calificación: 8 },
    { nombre: "Robótica", calificación: 2 },
  ],
};

/**
 * Ejercicio 5.1
 *
 * 1. Declarar un función con nombre 'multiplicar', tipificada de la siguiente manera:
 *
 * Parámetros:
 * - x: número
 * - y: número
 *
 * Retorno: número
 *
 * 2. Colocar las instrucciones necesarias dentro de la función 'multiplicar' para retornar la
 * multiplicación de x por y;
 *
 * 3. Ejecutar e imprimir en la consola el resultado de la función 'multiplicar'
 * con los siguientes parámetros:
 * - x: 40
 * - y: 70
 *
 * 4. Ejecutar e imprimir en la consola el resultado de la función 'multiplicar'
 * con los siguientes parámetros:
 * - x: 10
 * - y: 5
 */

/**
 * Ejercicio 5.2
 *
 * 1. Almacenar la siguiente tipificación de un objeto en un tipo con nombre 'Plato':
 * - nombre: cadena de texto
 * - ingredientes: conjunto de cadenas de texto
 * - categoria: "asiática", "mexicana", "colombiana"
 * - precio: número
 *
 * 2. Declarar una constante con nombre 'menu', tipificada como un conjunto de Platos,
 * e inicializarla con por lo menos tres (3) Platos por cada categoría, para un
 * total de nueve (9) platos.
 *
 * 3. Declarar un función con nombre 'filtrarMenuPorCategoria' tipificada de la siguiente
 * manera:
 *
 * Parámetros
 * - platos: conjunto de Platos
 * - categoria: "asiática", "mexicana", "colombiana"
 *
 * Retorno: conjunto de Platos
 *
 * 4. Almacenar las siguientes instrucciones en la función 'filtrarMenuPorCategoria':
 * - Declarar una constante con nombre 'acumuladorDePlatos' tipificada como un conjunto
 * de Platos, e inicializada como un conjunto de datos vacío
 * - Bucle 'for' que itere sobre el parámetro 'platos' y añada al conjunto de la constante
 * 'acumuladorDePlatos' los platos que cumplan la condición de pertenecer a la categoría indicada
 * en el parámetro 'categoría'
 * - Retornar la constante 'acumuladorDePlatos'
 *
 * 5. Ejecutar e imprimir en la consola el resultado de la función 'filtrarMenuPorCategoria'
 * con los siguientes parámetros:
 * - platos: constante 'menu'
 * - categoria: "asiática"
 *
 * 6. Ejecutar e imprimir en la consola el resultado de la función 'filtrarMenuPorCategoria'
 * con los siguientes parámetros:
 * - platos: constante 'menu'
 * - categoria: "mexicana"
 *
 * 7. Ejecutar e imprimir en la consola el resultado de la función 'filtrarMenuPorCategoria'
 * con los siguientes parámetros:
 * - platos: constante 'menu'
 * - categoria: "colombiana"
 *
 * 8. Enviar código del ejercicio al correo jsdiazp@icloud.com
 */
