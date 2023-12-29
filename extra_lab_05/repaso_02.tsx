/*
  Variable

  Almacenan datos
*/

// Declarar
let apellido: string;

// Declarar y inicializar
const edad = 40; // sin tipificar
const nombre: string = "Joan"; // tipificada

/*
  Tipos

  Almacenan tipos de datos
*/
type Usuario = {
  nombre: string;
  edad: number;
  apellido: string;
  rol: "admin" | "editor";
};

/*
  Objeto
  
  Almacena datos con llaves
*/

let portatil = {
  marca: "Apple",
  referencia: "MacBook Pro",
}; // sin tipificar

let usuario1: Usuario = {
  nombre,
  edad,
  apellido: "Diaz del Castillo",
  rol: "admin",
}; // tipificado

/* 
  Conjuntos de datos

  Almacenan datos con índices
*/

let familia = ["Joan", "Maribel", "Fernando", "María"]; // sin tipificar

let usuarios: Usuario[] = [
  usuario1,
  {
    nombre: "Fernando",
    edad: 58,
    apellido: "Diaz del Castillo",
    rol: "editor",
  },
]; // tipificado

/*
 Función

 Almacenan instrucciones

 Contienen:
  - Parámetros (opcionales): Variables sin inicializar
  - Retorno (opcional): Detiene la función o retorna un dato
  - Instrucciones
*/

function errorDeAutenticacion() {
  console.log("Datos incorrectos");
  console.log("Acceso denegado");
} // sin tipificar

function esAdminAlt1({ rol }: Usuario): boolean {
  if (rol === "admin") {
    return true;
  } else {
    return false;
  }
} // tipificada

type EsAmin = (usuario: Usuario) => boolean;

const esAdminAlt2: EsAmin = function (usuario) {
  if (usuario.rol === "admin") {
    return true;
  } else {
    return false;
  }
};

/*
  1. Almacenar la tipificación de una función

    Nombre del tipo (PascalCase): Retornar índice
  
    Tipificación de parámetros (camelCase):
      1. Conjunto: Conjunto de strings
      2. Indice: Número

    Tipificación del retorno: string
  
  2. Crear una función cumpla la tipificación del tipo RetornarIndice
*/

/*
  1. Almacenar la tipificación de una función

    Nombre del tipo (PascalCase): elevar
  
    Tipificación de parámetros (camelCase):
      1. numero: número 
      2. elevadoA: número

    Tipificación del retorno: número
  
  2. Crear una función cumpla la tipificación del tipo RetornarIndice
*/

/*
  Componentes

  Función que retorna código HTML

  Parámetros:
    - props: Objeto de las propiedades que debo recibir como atributos en 
    componente como etiqueta HTML

  Retorna:
    - Código HTML
*/

type ServicioProps = {
  nombre: string;
  precio: number;
};

const Servicio = ({ nombre, precio }: ServicioProps) => {
  return (
    <div>
      <div>{nombre}</div>
      <div>{precio}</div>
    </div>
  );
};

console.log(<Servicio nombre="Joan" precio={20} />);

/*
  1. Almacenar las tipificación del componente en un tipo: ComponenteUsuario

  2. Declarar un componente
  
  Nombre del componente (PascalCase): usuario
  
  Parámetros (camelCase):
    - Propiedades: Objecto que contiene las siguientes llaves:
    -- nombre: cadena de texto
    -- apellido: cadena de texto
    -- rol: admin o editor

  Retornar:
    Código HTML que contenga todas las llaves del parámetro: propiedades 
*/

/* 
  Como uso los componentes
  
  Los componentes se llaman etiquetas HTML
  Las propiedades del componente se pasan como atributos de la Etiqueta HML
*/

function App(): unknown {
  return (
    <>
      <div id=""></div>
      <Servicio nombre="Mantenimiento" precio={2000} />
    </>
  );
}
