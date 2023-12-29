/*
  Class
  
  Estructura de datos que voy a reutilizar múltiples veces

  Sintaxis  

  class NombreClase {
    propiedadX;
    propiedadY;
    
    constructor(propiedadX, propiedadY) {
      this.propiedadX = propiedadX;
      this.propiedadY = propiedadY;
    }

    funciónX() {
      ...instrucciones;
    }

    funciónY() {
      ...instrucciones;
    }
  }
*/

class Humano {
  nombre;
  añoDeNacimiento;

  constructor(nombre, añoDeNacimiento, sexo) {
    console.log("Creando estructura");
    this.nombre = nombre;
    this.añoDeNacimiento = añoDeNacimiento;
    this.sexo = sexo;

    console.log("Finalizo la creación de la estructura");
  }

  saludar(nombre) {
    console.log("¡Hola, " + nombre + "! ¿cómo estás?");
  }

  darBienvenida() {
    console.log("¡Bienvenido! Mi nombre es " + this.nombre);
  }

  decirEdad() {
    console.log("Mi edad es " + this.edad);
  }

  get edad() {
    const fechaActual = new Date();
    return fechaActual.getFullYear() - this.añoDeNacimiento;
  }
}

/*
  Crear y almacenar una nueva instancia de la clase
  
  Sintaxis
  const nombreInstancia = new NombreClase();
*/
const fernando = new Humano("Fernando", 1965, "Masculino"),
  maria = new Humano("María", 1992, "Femenino");

/*
  ¿Como asignar un dato en la instancia de la clase después de creada?
  
  nombreInstancia.nombrePropiedad = nuevoDato;
*/
fernando.edad = 23093;
fernando.rol = "Admin";

/*
  ¿Como acceder a una propiedad de una instancia de una clase?
*/
console.log(fernando.rol);
console.log(fernando.edad);

/*
  Ejercicio para JavaScript

  1. Declarar una clase con nombre "Animal"
  2. Dentro de la clase "Animal" adicionar propiedades nombre y especie;
  3. Dentro de la clase "Animal" definir el constructor para que reciba las 
  propiedades nombre y especie, dentro de las instrucciones del constructor asignar 
  estas propiedades a las propiedades de la instancia (estructura);
  4. Dentro de la clase "Animal" definir un método (función) correr que ejecute la siguiente instrucción:
     - Imprimir en la consola un string que concatene la propiedad nombre de la instancia y " esta corriendo".
  5. Crear una instancia de la clase "Animal" con los siguientes datos:
     - nombre: "Owen"
     - especie: "Perro"
*/
