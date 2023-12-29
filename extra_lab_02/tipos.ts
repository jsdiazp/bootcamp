/*
  Type

  Almacenan tipos de datos

  Sintaxis
  type NombreTipo = TipoDeDato;
*/

type Valor = number;

const precio: Valor = 320932;
const costo: Valor = 23432;

// Conjuntos de datos

type ConjuntoDeStrings = string[];

const grupoDeTrabajo: ConjuntoDeStrings = [
  "Joan",
  "Fernando",
  "María",
  "Andres",
];
const familia: ConjuntoDeStrings = ["Joan", "Fernando", "María", "Maribel"];

type Coordenadas = [number, number];

const coordenada1: Coordenadas = [3290932, 283093821];

// Objetos

interface PersonaAlt1 {
  nombre: string;
  apellido: string;
  edad: number;
  sexo?: string;
}

type PersonaAlt2 = {
  nombre: string;
  apellido: string;
  edad: number;
  sexo?: string;
};
