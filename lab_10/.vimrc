" Requerido
source $VIMRUNTIME/defaults.vim " Llama la configuración predefinida de VIM
set nocompatible " Inhabilita la compatibilidad con vi

" Explorador
let g:netrw_liststyle=3 " Selecciona el estilo de árbol
let g:netrw_preview=1 " Mostrar la previsualización en división vertical
let g:netrw_browse_split=4 " Abre los archivos en la última ventana abierta
let g:netrw_winsize=25 " Define su tamaño
let g:netrw_keepdir=0 " Mantiene el directorio de apertura

" Interfaz
colorscheme wildcharm " Configurar paleta de colores, recomendados: habamax, pablo, slate, sorbet, wildcharm y zaibatsu
syntax on " Resalta el código
set background=dark " Muestra el fondo de color negro
set mouse=a " Habilita el uso del mouse
set number " Muestra el número de cada línea
set relativenumber " Muestra el número de línea relativo a la posición del cursor
set showcmd " Muestra en la parte inferior derecho el comando utilizado
set showmatch " Muestra la pareja del paréntesis
set shortmess-=S " Muestra la cantidad de resultados de búsqueda
set wildmenu " Muestra un menu de comandos con <Tab>
set cursorline " Sombrea posición del cursor
set ruler " Muestra la posición del cursor en la parte inferior derecha
set list " Útil para ver la diferencia entre tabuladores, espacios y espacios en blanco
set listchars=leadmultispace:│\ ,tab:│\ ,trail:· " Muestra ( ¦ | ┊ | │ | \| ) por cada indentación
set laststatus=2 " Muestra siempre la barra de estado
set hlsearch " Resalta las coincidencias de la búsqueda
set incsearch " Resalta las coincidencias mientras se ingresa la palabra buscada

" Búsqueda
set ignorecase " Ignora mayúsculas y minúsculas
set smartcase " Solo ignora las máyusculas y minúscula si todas las letras son minúsculas

" Indentación
set expandtab " Convierte <Tab> en <Espacio>
set tabstop=2 " <Espacio> que toma un <Tab>
set softtabstop=2 " <Espacio> que toma un <Tab> en una edición, ejemplo <Tab> o <BS>
set shiftwidth=2 " <Espacio> que toma un <Tab> en (auto)indentado
set smartindent " Activa indentado inteligente
