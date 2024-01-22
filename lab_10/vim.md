# VIM

Editor de texto para terminal

## Tabla de contenido

- [Comandos](#comandos)
- [Insertar](#insertar)
- [Desplazar](#desplazar)
- [Copiar y pegar](#copiar-y-pegar)
- [Eliminar](#eliminar)
- [Reemplazar](#reemplazar)
- [Buscar](#buscar)
- [Configuración](#configuración)

## Comandos

Los comando se deben ingresar en el modo NORMAL, oprimiendo primero ':'

- 'q' cerrar el editor de texto
- 'w' guardar cambios
- 'w ' + 'ruta de guardado' Guardar el archivo en la ruta de guardado
- 'w! ' + 'ruta de guardado' Sobreescribe el archivo en la ruta de guardado
- 'wq' guardar cambios y cerrar el editor de texto
- 'sp ' + 'ruta de archivo' divide la pantalla horizontalmente con el archivo indicado
- 'vs ' + 'ruta de archivo' divide la pantalla verticalmente con el archivo indicado
- 'u' deshacer cambio
- 'C-r' rehacer cambio

[Volver](#tabla-de-contenido)

## Insertar

Para hacer uso de estas teclas debemos estar en modo NORMAL

- 'i' entra al modo insertar
- 'o' crear una línea posteriormente y entra en modo insertar
- 'S-o' crea una línea anterior y entra en modo insertar

[Volver](#tabla-de-contenido)

## Desplazar

Para hacer uso de estas teclas debemos estar en modo NORMAL

- 'h' se desplaza hacia la izquierda
- 'l' se desplaza hacia la derecha
- 'j' se desplaza hacia abajo
- 'k' se desplaza hacia arriba
- 'S-g' se desplaza hacia el final
- 'gg' se desplaza hacia el inicio
- '{' se desplaza hacia atrás entre saltos de línea
- '}' se desplaza hacia adelante entre saltos de línea
- '$' se desplaza hacia el final de la línea
- '0' se desplaza hacia el inicio de la línea
- '-' se desplaza hacia el el primer carácter de la línea
- 'w' se desplaza entre inicios de palabra
- 'e' se desplaza entre finales de palabra
- 'b' se desplaza hacia atrás entre palabras
- '%' se desplaza entre la pareja de paréntesis

[Volver](#tabla-de-contenido)

## Copiar y pegar

Para hacer uso de estas teclas debemos estar en modo NORMAL

- 'yy' copia toda una línea
- 'yw' copia palabra
- 'p' pega después
- 'S-p' pega antes

[Volver](#tabla-de-contenido)

## Eliminar

Para hacer uso de estas teclas debemos estar en modo NORMAL

- 'dd' elimina toda la línea
- 'dw' elimina palabra
- 'diw' elimna palabra sin importar la posición
- 'x' elimina un carácter

[Volver](#tabla-de-contenido)

## Reemplazar

Para hacer uso de estas teclas debemos estar en modo NORMAL

- 'cc' reemplaza toda la línea
- 'cw' reemplaza palabra
- 'ciw' reemplaza la palabra sin importar la posición

[Volver](#tabla-de-contenido)

## Buscar

Para hacer uso de la búsqueda debemos estar en modo NORMAL, y las siguientes teclas:

- '/' + 'palabra' busca hacia adelante
- '?' + 'palabra' busca hacia atrás

Después de buscar podemos oprimir:

- 'n' se mueve a la siguiente coincidencia
- 'S-n' se mueve a la anterior coincidencia

[Volver](#tabla-de-contenido)

## Configuración

Los comando se deben ingresar en el modo NORMAL, oprimiendo primero ':'

### Requerido

- source $VIMRUNTIME/defaults.vim " Llama la configuración predefinida de VIM
- set nocompatible " Inhabilita la compatibilidad con vi

### Interfaz

- colorscheme wildcharm " Configurar paleta de colores, recomendados: habamax, pablo, slate y wildcharm
- syntax on " Resalta el código
- set background=dark " Muestra el fondo de color negro
- set mouse=a " Habilita el uso del mouse
- set number " Muestra el número de cada línea
- set relativenumber " Muestra el número de línea relativo a la posición del cursor
- set showcmd " Muestra en la parte inferior derecho el comando utilizado
- set wildmenu " Muestra un menu de comandos con <Tab>
- set cursorline " Sombrea posición del cursor
- set ruler " Muestra la posición del cursor en la parte inferior derecha
- set list " Útil para ver la diferencia entre tabuladores, espacios y espacios en blanco
- set listchars=leadmultispace:│\ ,tab:│\ ,trail:· " Muestra ( ¦ | ┊ | │ | \| ) por cada indentación
- set laststatus=2 " Muestra siempre la barra de estado
- set showmatch " Muestra la pareja del paréntesis
- set hlsearch " Resalta las coincidencias de la búsqueda
- set incsearch " Resalta las coincidencias mientras se ingresa la palabra buscada

### Búsqueda

- set ignorecase " Ignora mayúsculas y minúsculas
- set smartcase " Solo ignora las máyusculas y minúscula si todas las letras son minúsculas

### Indentación
 
- set expandtab " Convierte <Tab> en <Espacio>
- set tabstop=2 " <Espacio> que toma un <Tab>
- set softtabstop=2 " <Espacio> que toma un <Tab> en una edición, ejemplo <Tab> o <BS>
- set shiftwidth=2 " <Espacio> que toma un <Tab> en (auto)indentado
- set smartindent " Activa indentado inteligente
- set autoindent " Copia el indentado de la línea actual

[Volver](#tabla-de-contenido)

## Fuentes

- [Devhint](https://devhints.io/vim)
- [CheatSheets](https://cheatsheets.zip/vim)
