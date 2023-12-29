/*
  ¿Cómo tipifico un conjunto de datos?

  Sintaxis
*/

/*
  Alternativa 1
  
  Si todos los datos del conjunto de datos son iguales
  llave nombreDelConjuntoDeDatos: tipoDeDato[] = [
    dato1: tipoDeDato, dato2: tipoDeDato, datoX: tipoDeDato
  ]
*/

let grupoDePersonas: string[] = ["Joan", "Fernando", "María", "Andrés"];

/* 
  Alternativa 2
  
  Si quiero una cantidad de datos específicos o si quiero especificar que tipo de dato se
  debe colocar en cada indice del conjunto de datos
*/
let coordenadas1: [latitud: number, longitud: number] = [3893, 839];
let coordenadas2: [number, number] = [3893, 839];

let datos: [
  { nombre: string; apellido: string },
  { nombreDeProducto: string; precioDeProducto: number }
] = [
  { nombre: "Joan", apellido: "Diaz del Castillo" },
  { nombreDeProducto: "iPhone", precioDeProducto: 5000000 },
];
