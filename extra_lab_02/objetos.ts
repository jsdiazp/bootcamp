/*
  ¿Cómo tipifico los objetos?
  
  Sintaxis
  llave nombreDelObjecto: {
    llave1: TipoDeDato;
    llave2: TipoDeDato;
    llaveX: TipoDeDato;
  } = {
    llave1: data1,
    llave2: dato2,
    llaveX: datoX
  }
*/

/*
  Alternativa 1

  Si solo lo voy a tipificar una vez
*/
let smartphone: {
  marca: string;
  referencia: string;
} = {
  marca: "Xiaomi",
  referencia: "MI 9",
};

/*
  Alternativa 2
  
  Si voy a utilizar la misma tipificación múltiples veces
*/

/*
  interface
  
  Me permite almacenar la tipificación de un objeto
*/
interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  sexo?: string;
}

let joan: Persona = {
    nombre: "Joan",
    apellido: "Diaz del Castillo",
    edad: 31,
  },
  fernando: Persona = {
    nombre: "Fernando",
    apellido: "Diaz del Castillo",
    edad: 58,
    sexo: "Masculino",
  };

interface Planta {
  tipo: string;
  zonaDeTenencia: string[];
}

let garrita: Planta = {
  tipo: "suculenta",
  zonaDeTenencia: ["semi sombra", "sol parcial", "tierra calida"],
};

interface Persona2<TD> {
  edad: TD;
  nombre: string;
  apellido: string;
}

const andres: Persona2<string> = {
  nombre: "Andres",
  apellido: "Abril",
  edad: "12",
};
