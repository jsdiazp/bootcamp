/*
  Genéricos

  Me permiten pasar tipos de datos como parámetros
*/

// Conjunto de datos

// - Todos son iguales
type ConjuntoAlt1<TipoDeDato> = TipoDeDato[];

const conjuntoStrings: ConjuntoAlt1<string> = ["dato1", "dato2"];
const conjuntoNumeros: ConjuntoAlt1<number> = [2, 93, 2930];

// - Diferentes tipos
type ConjuntoAlt2<TipoDeDato1, TipoDeDato2> = [TipoDeDato1, TipoDeDato2];

const conjuntoDiferentesTipo: ConjuntoAlt2<number, string> = [239032, "32332"];

/*
  1. Declara tipo de dato
    Nombre (PascalCase): arreglo
    Parámetros (PascalCase):
      1. X
    Tipificación: Conjunto de datos, todos iguales a X
*/

// Objetos
type Celular<Valor, Especificaciones> = {
  marca: string;
  referencia: string;
  precio: Valor;
  costo: Valor;
  especificaciones: Especificaciones;
};

const mi9: Celular<number, string> = {
  marca: "Xiaomi",
  referencia: "MI 9",
  precio: 2_000_000,
  costo: 1_000_000,
  especificaciones: "RAM: 8GB\n",
};
