/**
 * Conjunto de datos
 */

/**
 * Ejercicio Nº 1.1
 *
 * 1. Declarar una variable modificable con nombre 'grupoDeTrabajo' e inicializarla con el siguiente conjunto de datos:
 * - Joan
 * - Fernando
 *
 * 2. Adicionar tres (3) integrantes al final del conjunto de datos almacenado en la variable 'grupoDeTrabajo':
 * - Andrés
 * - María
 * - Maribel
 *
 * 3. Imprimir la variable 'grupoDeTrabajo' en la consola
 */

/**
 * Objetos
 */

/**
 * Ejercicio Nº 2.1
 *
 * 1. Declara una variable con nombre 'teléfono' que almacene el siguiente objeto:
 * - puedeLlamar: verdad;
 * - puedeRecibirLlamada: verdad;
 * - tieneGPS: verdad;
 * 2. Declarar una variable con nombre 'iPhone' que almacene el siguiente objeto:
 * - extender variable teléfono
 * - referencia: 15 pro max
 * - añoDeCompra: 2023
 * - precio: 6_000_000
 * 3. Imprimir en la consola la variable con nombre 'iPhone'
 */

/**
 * Comparativos
 */

/**
 * Ejercicio Nº 3.1
 *
 * 1. Declarar una variable con nombre 'niño1' que almacene el siguiente objeto:
 * - edad (número): 12
 * - pesoKg (número): 40
 * - nombre (cadena de texto): John
 * - apellido (cadena de texto): Hernandez
 *
 * 2. Realizar las siguientes comparaciones e imprimirlas en la consola:
 * - es el peso del 'niño1' menor o igual a 30
 * - es la edad del 'niño1' mayor o igual a 12
 */

/**
 * Lógicas
 */

/**
 * Ejercicio Nº 4.1
 *
 * 1. Declara una variable con nombre 'viajero1' que almacene el siguiente objeto:
 * - categoría (string): oro
 * - edad (número): 20
 *
 * 2. Imprimir en la consola las siguientes lógicas:
 * - es el 'viajero1' categoría platino y su edad es mayor o igual a 18
 * - es el 'viajero1' categoría oro o es el viajero uno categoría platino
 */

/**
 * Condicionales
 */

/**
 * Ejercicio Nº 5.1
 *
 * 1. Declara una variable con nombre 'visitante1' que almacene el siguiente objeto:
 * - santoYSeña (string): lasvacasvuelanenelrocio
 * 2. Evaluar las siguientes condiciones:
 * - Si el santoYSeña del 'visitante1' es igual a "lasvacasvuelanenelrocio" imprimir en la consola: puedes ingresar
 * - De lo contrario imprimir en la consola: Santo y seña invalido, no puedes ingresar
 */

/**
 * Funciones
 */

/**
 * Ejercicio Nº 6.1
 *
 * 1. Declarar una función con nombre 'puedeIngresarAlParqueadero',
 * la función debe contener lo siguiente:
 *
 * Parámetros (camelCase):
 * - residente
 *
 * Instrucciones:
 * - Si el parámetro residente tiene una llave con nombre 'códigoDeParquedero' y
 * es un número mayor a 100 realizar las siguiente instrucciones:
 *   * Imprimir en la consola: puede ingresar
 *   * Retornar verdadero (booleano)
 * - De lo contrario imprimir realizar las siguientes instrucciones:
 *   * Imprimir en la consola: acceso no autorizado
 *   * Retornar falso (booleano)
 *
 * 2. Declarar una variable constante con nombre 'residente1' que almacene un objeto con las siguientes
 * llaves (camelCase) y sus respectivos datos:
 * - nombre (string): Pedro
 * - apellido (string): Molina
 * - código de parqueadero: 329039
 *
 * 3. Ejecutar la función 'puedeIngresarAlParqueadero' pasando como parámetro la variable constante 'residente1'
 *
 * 4. Ejecutar la función 'puedeIngresarAlParqueadero' pasando como parámetro un objeto con
 * las siguientes llaves (camelCase) y sus respectivos datos:
 * - nombre (string): Mary
 * - apellido (string): Molina
 * - edad (número): 38
 * - código de parqueadero: 39
 */

/**
 * Ejercicio Nº 6.2
 *
 * 1. Declarar una función con nombre (camelCase) 'queIngredientes', la función debe contener lo siguiente:
 *
 * Parámetros (camelCase):
 * - receta
 *
 * Instrucciones:
 * - Si el parámetro receta es igual a "huevos en perico", realizar la siguiente instrucción:
 *   * Retornar un conjunto de datos con los siguientes datos (strings):
 *     - 2 huevos
 *     - 1 tomate
 *     - 1 cebolla
 * - De lo contrario si el parámetro receta es igual a "ensalada cesar", realizar la siguiente instrucción:
 *   * Retornar un conjunto de datos con los siguientes datos (strings):
 *     - 1 lechuga
 *     - 1 tomate
 *     - 1 cebolla
 *     - 1kg de pollo
 * - De lo contrario realizar la siguiente instrucción:
 *   * Imprimir en la consola: la receta no se encuentra almacenada
 *
 * 2. Ejecutar la función 'queIngredientes' pasando como parámetro el string: "piña colada"
 *
 * 3. Ejecutar la función 'queIngredientes' pasando como parámetro el string: "huevos en perico"
 *
 * 4. Ejecutar la función 'queIngredientes' pasando como parámetro el string: "ensalada cesar"
 */

/**
 *  Ejercicio Nº 6.3
 *
 *  1. Declarar una función con nombre (camelCase) 'esMultiploDe', la función debe contener lo siguiente:
 *
 *  Parámetros (camelCase):
 *  - numero
 *  - multiplo
 *
 *  Instrucciones:
 *  - Si el parámetro `numero` es múltiplo del parámetro 'multiplo', realizar la siguiente instrucción:
 *    * Retornar verdadero (booleano)
 *  - De lo contrario realizar las siguientes instrucciones:
 *    * Retornar falso (booleano)
 *
 *  2. Ejecutar la función 'esMultiploDe' pasando como parámetros los siguientes valores:
 *  - numero: 15
 *  - multiplo: 3
 *
 *  3. Ejecutar la función 'esMultiploDe' pasando como parámetros los siguientes valores:
 *  - numero: 20
 *  - multiplo: 7
 *
 *  4. Ejecutar la función 'esMultiploDe' pasando como parámetros los siguientes valores:
 *  - numero: 100
 *  - multiplo: 10
 */

/**
 * Ejercicio Nº 6.4
 *
 * 1. Crear una función llamada (camelCase) 'catalogo', la función debe contener lo siguiente:
 *
 * Parámetros (camelCase):
 * - tipo
 * - país
 *
 * Instrucciones:
 * - Si el parámetro 'tipo' es igual a "entretenimiento" y el país es igual a "Colombia", realizar
 * las siguientes instrucciones:
 *   * Imprimir en la consola: productos de entretenimiento encontrados
 *   * Retornar un conjunto de datos con los siguientes objetos:
 *     - Primer objeto
 *       * nombre (cadena de texto): PS5
 *       * precio (número): 2_500_000
 *     - Segundo objeto
 *       * nombre (cadena de texto): Echo Show 5
 *       * precio (número): 180_000
 *     - Tercer objeto
 *       * nombre (cadena de texto): Fire TV
 *       * precio (número): 80_000
 * - De lo contrario si el parámetro 'tipo' es igual a "sonido" y el país es igual a "Colombia", realizar las siguientes
 * instrucciones:
 *   * Imprimir en la consola: productos de sonido encontrados
 *   * Retornar un conjunto de datos con los siguientes objetos:
 *     - Primer objeto:
 *       * nombre (cadena de texto): Echo Studio
 *       * precio (número): 850_000
 *     - Secundo objeto:
 *       * nombre (cadena de texto): Sonos One
 *       * precio (número): 1_200_000
 *     - Tercer objeto:
 *       * nombre (cadena de texto): JBL Flip 6
 *       * precio (número): 450_000
 * - De lo contrario si el parámetro 'tipo' es igual a "tarjetas de regalo", realizar las
 * siguientes instrucciones:
 *   * Imprimir en la consola: productos digitales encontrados
 *   * Retornar un conjunto de datos con los siguientes objetos:
 *     - Primer objeto
 *       * nombre (cadena de texto): Amazon Card
 *       * precio (número): 150_000
 *     - Segundo objeto
 *       * nombre (cadena de texto): Netflix Card
 *       * precio (número): 350_000
 * - De lo contrario, realizar las siguientes instrucciones:
 *   * Imprimir en la consola: no existe disponibilidad de los productos indicados
 *
 * 2. Ejecutar la función 'catalogo' pasando como parámetros los siguientes valores:
 *   - tipo (cadena de texto): ropa
 *   - país (cadena de texto): Noruega
 *
 * 3. Ejecutar la función 'catalogo' pasando como parámetros los siguientes valores:
 *   - tipo (cadena de texto): entretenimiento
 *   - pais (cadena de texto): Colombia
 *
 * 4. Ejecutar la función 'catalogo' pasando como parámetros los siguientes valores:
 *   - tipo (cadena de texto): tarjetas de regalo
 *   - pais (cadena de texto): Colombia
 *
 * 5. Ejecutar la función 'catalogo' pasando como parámetros los siguientes valores:
 *   - tipo (cadena de texto): sonido
 *   - pais (cadena de texto): Bélgica
 */

/**
 * Ejercicio Nº 6.5
 *
 * 1. Crear una función llamada (camelCase) 'pagoDenegado', la función debe contener lo siguiente:
 *
 * Parámetros (camelCase):
 *   - usuario
 *
 * Instrucciones:
 *  - Imprimir en la consola la concatenación de: llave nombre del parámetro usuario y
 *    el string ", por favor revisa los datos de tu tarjeta e intenta de nuevo o contacta con soporte"
 *
 * 2. Crear una función llamada (camelCase) 'procesarPago', la función debe contener lo siguiente:
 *
 * Parámetros (camelCase):
 *  - usuario
 *
 * Instrucciones:
 * - Almacenar en una variable constante llamada (camelCase) 'numeroAleatorio' lo siguiente:
 *   Math.round(Math.random())
 * - Pasar dos (2) parámetros a la función console.log:
 *   * String "Número aleatorio:"
 *   * Variable constante 'numeroAleatorio'
 * - Si el parámetro 'usuario' tiene la llave 'métodoDePago' y la constante 'numeroAleatorio' es igual a 1,
 *   realizar las siguientes instrucciones:
 *   * Imprimir en la consola: pago recibido con éxito
 *   * Imprimir en la consola: pedido en proceso de alistamiento
 * - De lo contrario realizar las siguientes instrucciones:
 *   * Ejecutar la función 'pagoDenegado'
 *
 * 3. Almacenar en una variable constante con nombre 'usuario6' un objeto con las
 *    siguientes llaves (camelCase) y datos:
 * - nombre (cadena de texto): Elon
 * - apellido (cadena de texto): Musk
 * - método de pago (objeto):
 *     * número de tarjeta (número): 3412847902841
 *     * fecha de expiración (cadena de texto): 12/29
 *
 * 4. Llamar la función 'procesarPago' y pasar como parámetro la constante 'usuario6'
 *
 * 5. Llamar la función 'procesarPago' y pasar como parámetro un objeto con las
 *    siguientes llaves (camelCase) y datos:
 * - nombre (cadena de texto): Johann
 * - apellido (cadena de texto): Bach
 * - método de pago (objeto):
 *   * número de tarjeta (número): 4813492432893
 *   * fecha de expiración (cadena de texto): 6/27
 *
 * 6. Llamar la función 'procesarPago' y pasar como parámetro un objeto vacío.
 */
