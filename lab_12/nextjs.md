# Next.js

Marco de React

## Beneficios

- Brinda la funcionalidad de Lazy Loading, la cual solo entrega el contenido en la medida que se solicita
- Optimización de imágenes dependiendo del dispositivo
- SSR (Server Side Rendering), procesamiento del sitio desde el servidor, y CSR (Client Side Rendering), procesamiento del sitio en el cliente.
- Facilita el enrutamiento a través de carpetas

## Instalación

```shell
npx create-next-app@latest
```

### Parámetros

```shell
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … No
✔ Would you like to use `src/` directory? … No
✔ Would you like to use App Router? (recommended) … No
✔ Would you like to customize the default import alias (@/*)? … No
```

### Limpieza

1. Eliminamos las siguientes importaciones:

```TypeScript
  import Image from "next/image";
  import styles from "@/styles/Home.module.css";
```

2. Eliminar el contenido de la etiqueta <main>

3. Eliminar la propiedad className de la etiqueta <main>

4. Actualizar los metadatos de la componente <Head>

5. Eliminar el archivo con la siguiente ruta: styles/Home.module.css

6. Eliminar el contenido del archivo con la siguiente ruta: styles/globals.css

7. Eliminar archivos de la carpeta public

8. Eliminar la carpeta ubicada en la siguiente ruta: /pages/api

## Recomendaciones

1. Crear las siguientes carpetas:

- assets
- components
- sections
- shared

## Fuentes

- [next.js](https://nextjs.org/)
- [Google Fonts](https://fonts.google.com)