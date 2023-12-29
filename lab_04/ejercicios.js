/*
  Ejercicio Nº 1

  1. Declarar función con las siguientes especificaciones:
    nombre función (camelCase): puedo pasar la calle
    parámetros (camelCase):
      - color semáforo
    instrucciones:
      1. si el semáforo esta en rojo o amarillo retornar false;
      2. de lo contrario si el semáforo esta en verde retornar true;
      3. de lo contrario retornar false;
*/

/*
  Ejercicio Nº 2

  1. Declarar función con las siguientes especificaciones:
  
    nombre de función (camelCase): qué películas puedo ver
    parámetros (camelCase):
      - edad
      - país
    instrucciones:
      1. si su edad es mayor o igual a 18 años y es de Colombia retornar un conjunto de datos con los siguientes datos: 
        - adultos
        - comedia
        - romance
        - infantil
      2. de lo contrario si su edad es mayor o igual 18 años retornar un conjunto de datos con los siguientes datos:
        - romance
        - infantil
      3. de lo contrario retornar un conjunto de datos con los siguientes datos:
        - infantil

  2. ejecutar la función con los siguientes parámetros:
    2.1 edad 17 y país Colombia
    2.2 edad 23 y país Rusia
    2.3 edad 18 y país Colombia
*/

/*
  Ejercicio Nº 3

  1. Declarar función con las siguientes especificaciones:

    nombre de función (camelCase): saludar
    parámetros (camelCase):
      - hora
      - nombrePersona
    instrucciones:
      1. Si la hora es menor a 12 imprimir en la consola la concatenación de:
      "Buenos días " y el parámetro nombrePersona
      2. Si la hora es mayor o igual 12 y menor a 18 imprimir en la consola la concatenación de:
      "Buenas tardes " y el parámetro nombrePersona
      3. Si la hora es mayor o igual a 18 imprimir en la consola la concatenación de:
      "Buenas noches " y el parámetro nombrePersona

  2. Ejecutar la función con los siguientes parámetros:
    2.1 hora 19 y nombrePersona Jorge
    2.2 hora 14 y nombrePersona Nicolas
    2.3 hora 4 y nombrePersona Amanda
*/

// Declaración de función

function saludar(hora, nombrePersona) {
  if (hora < 12) {
    console.log("Buenos días" + nombrePersona);
  }
  if (hora >= 12 && hora < 18) {
    console.log("Buenas tardes" + nombrePersona);
  }
  if (hora >= 18) {
    console.log("Buenas noches" + nombrePersona);
  }
}

console.log(saludar(19, "Jorge"));
console.log(saludar(14, "Nicolas"));
console.log(saludar(4, "Amanda"));
