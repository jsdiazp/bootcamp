" vim-witch-key

" To register the descriptions when using the on-demand load feature,
" use the autocmd hook to call which_key#register(), e.g., register for the Space key:
autocmd! User vim-which-key call which_key#register('<Space>', 'g:which_key_map')

nnoremap <silent> <leader> :<c-u>WhichKey '<Space>'<CR>

" nnoremap <silent> g :<c-u>WhichKey  'g'<CR>
" vnoremap <silent> g :<c-u>WhichKeyVisual  'g'<CR>

