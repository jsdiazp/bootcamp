/*
  ¿Cómo se tipifican las funciones?

  Sintaxis

  function nombreFunción(
    parámetro1?: tipoDeDato, 
    parámetro2?: tipoDeDato,
    parámetroX?: tipoDeDato
  ): tipoDeDato? {
    ...instrucciones;

    return dato; // opcional
  }
*/
type Usuario = {
  rol: string;
  nombre?: string;
};

function permitirAcceso(usuario: Usuario): boolean {
  if (usuario.rol === "admin") {
    return true;
  } else {
    return false;
  }
}

type ParamatrosPermitirAcceso = Parameters<typeof permitirAcceso>[0];

function errorDeAutenticacion(): void {
  console.log("Datos incorrectos");
  console.log("No permitir acceso");
}
