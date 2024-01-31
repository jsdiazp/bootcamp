" vim-plug

" Instalar vim-plug si no se encuentra
let data_dir = has('nvim') ? stdpath('data') . '/site' : '~/.vim'
if empty(glob(data_dir . '/autoload/plug.vim'))
  silent execute '!curl -fLo '.data_dir.'/autoload/plug.vim --create-dirs  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

" Ejecutar PlugInstall si faltan plugins
autocmd VimEnter * if len(filter(values(g:plugs), '!isdirectory(v:val.dir)'))
  \| PlugInstall --sync | source $MYVIMRC
\| endif

" Plugins
call plug#begin()

Plug 'catppuccin/vim', { 'as': 'catppuccin' }
Plug 'itchyny/lightline.vim'
Plug 'itchyny/vim-gitbranch'
Plug 'ryanoasis/vim-devicons'
Plug 'airblade/vim-gitgutter'
Plug 'liuchengxu/vim-which-key'
Plug 'preservim/nerdtree'
Plug 'neoclide/coc.nvim', { 'branch': 'release' }
Plug 'dense-analysis/ale'
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'

call plug#end()

" Requerido
source $VIMRUNTIME/defaults.vim " Llama la configuración predefinida de VIM
set nocompatible " Inhabilita la compatibilidad con vi
set hidden " Oculta el buffer cuando se abandona, manteniendo los cambios
set undofile " Guarda el historial de cambios en un archivo
set autoread " Cuando se detecta el cambio de un archivo fuera de Vim y este no ha sido cambiado dentro de Vim, automáticamente se lee de nuevo el archivo
set spell " Activa la corrección ortográfica
set spelllang=en,es " Corrección ortográfica para español e inglés
set encoding=utf-8 " Establece la codificación de caracteres utilizada en Vim
set timeoutlen=500 " Estable el tiempo en milisegundos que se espera para completar un código de tecla o un secuencia de teclas
let g:mapleader = "\<Space>"

" Netrw
" let g:netrw_liststyle=3 " Selecciona el estilo de árbol
" let g:netrw_preview=1 " Mostrar la previsualización en división vertical
" let g:netrw_browse_split=4 " Abre los archivos en la última ventana abierta
" let g:netrw_winsize=25 " Define su tamaño
" let g:netrw_keepdir=0 " Mantiene el directorio de apertura
" inoremap <c-b> <Esc>:Lex<cr>:vertical resize 30<cr>
" nnoremap <c-b> <Esc>:Lex<cr>:vertical resize 30<cr>

" Interfaz
syntax on " Resalta el código
colorscheme catppuccin_mocha " Configurar paleta de colores, recomendados: catppuccin_mocha, habamax, pablo, slate, sorbet, wildcharm y zaibatsu
set termguicolors
if !has('gui_running')
  set t_Co=256
endif
set confirm " Muestra un dialogo solicitando confirmación ante operaciones que normalmente fallarían. Ej.: ':q' y ':e'
set background=dark " Muestra el fondo de color negro
set mouse=a " Habilita el uso del mouse
set ttymouse=sgr
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
set noshowmode " No muestra el modo de edición para evitar repetición con 'lightline'

" Colores
highlight Normal guibg=NONE " Color de fondo transparente
highlight SignColumn guibg=NONE ctermbg=NONE
highlight SpecialKey ctermbg=NONE ctermfg=NONE guifg=#45475A term=NONE
highlight VertSplit term=reverse ctermfg=243 ctermbg=243 guifg=#2C323D guibg=#2C323D

" Búsqueda
set ignorecase " Ignora mayúsculas y minúsculas
set smartcase " Solo ignora las mayúsculas y minúscula si todas las letras son minúsculas

" Indentación
set expandtab " Convierte <Tab> en <Espacio>
set tabstop=2 " <Espacio> que toma un <Tab>
set softtabstop=2 " <Espacio> que toma un <Tab> en una edición, ejemplo <Tab> o <BS>
set shiftwidth=2 " <Espacio> que toma un <Tab> en (auto)indentado
set backspace=2 " Influencia el funcionamiento de <BS>, <Del>, CTRL-W y CTRL-U en modo INSERTAR
set smartindent " Activa indentado inteligente
set autoindent " Copia el indentado de la línea actual

" Plegado
set foldmethod=syntax " Plegado basado en la sintaxis
set foldlevelstart=99 " No pliega nada al abrir un archivo

" Desplazamiento
set scrolloff=10 " Establece el número mínimo de líneas en pantalla a mantener encima y debajo del cursor

" Configuración de plugins
source ~/.config/vim/plugins/ale.vim
source ~/.config/vim/plugins/lightline.vim
source ~/.config/vim/plugins/vim-devicons.vim
source ~/.config/vim/plugins/vim-which-key.vim
source ~/.config/vim/plugins/nerdtree.vim
source ~/.config/vim/plugins/coc.vim

