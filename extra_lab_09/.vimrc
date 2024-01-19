" Indentación
set smartindent " Autoindentación inteligente cuando se inicia una nueva línea
set autoindent " Indenta según la línea actual
set expandtab " Usa el número apropiado de espacio para insertar un <Tab>
set tabstop=2 " Número de espacio que usa un <Tab>
set softtabstop=2 " Número de espacios que usa un tab <Tab> mientras se ejecuta una edición, como insertar una <Tab> o usar <BS>
set shiftwidth=2 " Número de espacios por cada (auto)indentación
set backspace=2 " Influencia el funcionamiento de <BS>, <Del>, CTRL-W y CTRL-U en modo Insertar

" Interfaz
colorscheme wildcharm " Paleta de colores
set nocompatible " Inhabilita compatibilidad con vi
set number " Muestra el número de línea en frente de cada línea
set ruler " Muestra la posición del cursor
set showmatch " Muestra la pareja de paréntesis
set showcmd " Muestra el comando utilizado
set wildmenu " Muestra un menu de comandos
set list " Muestra los <Tab>
set listchars=multispace:│\ ,tab:│\ ,trail:· " Muestra ( ¦ | ┊ | │ | \| ) por cada indentación
set laststatus=2 " Muestra siempre la barra de estado
set mouse=a " Habilita el uso del mouse
set cursorline " Sombrea posición del cursor
set shortmess-=S " Muestra la cantidad de resultados de búsqueda
syntax on " Resalta código

" Búsqueda
set incsearch " Resalta mientras se busca
set hlsearch " Resalta búsqueda