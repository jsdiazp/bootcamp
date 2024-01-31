# React

Framework (marco) de TypeScript/JavaScript para desarrollo web

## Tabla de contenido

- [Beneficios](#beneficios)
- [Instalación](#instalación)
- [Limpieza](#limpieza)
- [Componentes](#componentes)
- [Recomendaciones](#recomendaciones)
- [Glosario](#glosario)

## Beneficios

1. Me permite utilizar código HTML en los archivo de TypeScript/JavaScript para utilizamos babel con la extensión tsx/jsx
2. Me permite desarrollar bajo la metodología de [Component Drive Development](https://www.componentdriven.org/) (desarrollo basado en componentes), que se fundamenta en desarrollar componentes (funciones o clases) que funcionan independientemente para conformar un todo
3. Facilita la creación de aplicativos web (sitio web interactivos)

## Instalación

```shell
npm create vite@latest --template react-swc-ts
```

## Limpieza

1. Editamos el archivo src/App.css y dejamos solo el siguiente código:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

2. Eliminamos el archivo src/index.css

```shell
rm src/index.css
```

3. Eliminamos la importación de index.css en el archivo src/main.tsx

4. En el archivo src/App.tsx eliminamos:

- El contenido del fragmento
- El siguiente código:

```JavaScript
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const [count, setCount] = useState(0)
```

5. Eliminan los archivo de la carpeta src/assets y public

## Recomendaciones

6. Crear en src las siguientes carpetas:

- shared
- components

## Componentes

### Uso

#### Alternativa 1

*Recomendado*

```tsx
<MainCard
  categoría="Automóviles"
  fecha="Dic 7, 2023"
  título="Rivian anuncia furgoneta comercial en EE.UU."
/>
```

#### Alternativa 2

```tsx
MainCard({
  categoría: "Automóviles",
  fecha: "Dic 7, 2023",
  título: "Rivian anuncia furgoneta comercial en EE.UU.",
})
```

### Código TypeScript/JavaScript dentro del HTML de un componente

```tsx
const nombre: string = "Joan"

return <div>{nombre}</div>
```

## Glosario

1. **Fragmento**: Me permite ingresar código HTML, pero no insertar ninguna etiqueta HTML
