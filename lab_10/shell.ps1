# Shell
# Interfaz para interactuar con el sistema operativo

$installShell = Read-Host "1. ¿Quieres configurar tu shell? y/n"

if ($installShell -eq "y") {
  # Pre-configuración
  if (Test-Path $PROFILE) {
    Remove-Item $PROFILE
  }

  # PSReadLine (https://github.com/PowerShell/PSReadLine)
  # Implementación de readline inspirada en bash para PowerShell

  ## Pre-requisitos
  Install-Module -Name PowerShellGet

  ## Instalación
  Install-Module PSReadLine

  ## Configuración
  Write-Output "# PSReadLine
# Set-PSReadlineOption -PredictionViewStyle ListView
Set-PSReadlineOption -PredictionViewStyle InlineView
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete`n" >>$PROFILE

  # Scoop
  # Instalador en línea de comandos para Windows

  ## Instalación
  if (-Not (Get-Command scoop -ErrorAction SilentlyContinue)) {
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
    Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
  }

  # bat (https://github.com/sharkdp/bat)
  # Runtime de JavaScript

  ## Instalación
  if (-Not (Get-Command bat -ErrorAction SilentlyContinue)) {
    winget install --id sharkdp.bat
  }

  # bottom
  # Monitor de recursos

  ## Instalación
  if (-Not (Get-Command btm -ErrorAction SilentlyContinue)) {
    winget install --id Clement.bottom
  }

  # bun (https://github.com/oven-sh/bun)
  # Runtime de JavaScript

  ## Instalación
  powershell -c "irm bun.sh/install.ps1|iex"

  # fd (https://github.com/sharkdp/fd)
  # Alternativa a "find" sencilla, rápida y fácil de usar

  ## Instalación
  if (-Not (Get-Command fd -ErrorAction SilentlyContinue)) {
    winget install --id sharkdp.fd
  }

  # fzf (https://github.com/junegunn/fzf)
  # Mejora la funcionalidad de <C-r> y <C-t>

  ## Instalación
  if (-Not (Get-Command fzf -ErrorAction SilentlyContinue)) {
    winget install --id junegunn.fzf
  }
  Install-Module -Name PSFzf

  ## Configuración
  Write-Output "# fzf
Set-PsFzfOption -PSReadlineChordProvider 'Ctrl+t' -PSReadlineChordReverseHistory 'Ctrl+r'`n" >>$PROFILE

  # Git
  # Sistema de control de versionamientos

  ## Instalación
  if (-Not (Get-Command git -ErrorAction SilentlyContinue)) {
    winget install --id Git.Git
  }

  # lsd (https://github.com/lsd-rs/lsd)
  # Siguiente generación del comando 'ls'

  ## Instalación
  if (-Not (Get-Command lsd -ErrorAction SilentlyContinue)) {
    winget install --id lsd-rs.lsd
  }

  ## Configuración
  Write-Output "# lsd
if (-Not (Test-Path alias:l)) {
  function L_ALIAS { lsd --blocks permission,size,date,name -la `$args }
  New-Alias l L_ALIAS
}`n" >>$PROFILE

  # neofetch
  # Despliega información del sistema

  ## Instalación
  if (-Not (Get-Command neofetch -ErrorAction SilentlyContinue)) {
    scoop install neofetch
  }

  # Node.js
  # Runtime JavaScript

  ## Instalación
  if (-Not (Get-Command node -ErrorAction SilentlyContinue)) {
    winget install --id OpenJS.NodeJS.LTS
  }

  # ripgrep (https://github.com/BurntSushi/ripgrep)
  # Busca recursivamente en directorios un patrón regex respetando los gitignore

  ## Instalación
  if (-Not (Get-Command rg -ErrorAction SilentlyContinue)) {
    winget install --id BurntSushi.ripgrep.MSVC
  }

  # sd (https://github.com/chmln/sd)
  # CLI intuitiva de búsqueda y sustitución (alternativa a 'sed')

  ## Instalación
  if (-Not (Get-Command sd -ErrorAction SilentlyContinue)) {
    winget install --id chmln.sd
  }

  # Starship
  # Mejora el prompt (interfaz de entrada) de la terminal

  ## Instalación
  if (-Not (Get-Command starship -ErrorAction SilentlyContinue)) {
    winget install --id Starship.Starship
  }

  ## Configuración
  Write-Output "# Startship
Invoke-Expression (&starship init powershell)`n" >>$PROFILE

  # Vim
  # Editor de texto

  ## Instalación
  if (-Not (Get-Command vim -ErrorAction SilentlyContinue)) {
    winget install --id vim.vim
  }

  ## Configuración
  Write-Output "# Vim
if (-Not (Test-Path alias:vim)) {
  function VIM_ALIAS { & 'C:\Program Files\Vim\vim91\vim.exe' `$args }
  New-Alias vim VIM_ALIAS
}
if (-Not (Test-Path alias:vimtutor)) {
  function VIMTUTOR_ALIAS { & 'C:\Program Files\Vim\vim91\vimtutor.bat' `$args }
  New-Alias vimtutor VIMTUTOR_ALIAS
}`n" >>$PROFILE

  # zoxide
  # Comando cd más inteligente, inspirado en z y autojump

  ## Instalación
  if (-Not (Get-Command zoxide -ErrorAction SilentlyContinue)) {
    winget install --id ajeetdsouza.zoxide
  }

  ## Configuración
  Write-Output "# zoxide
Invoke-Expression (& { (zoxide init powershell | Out-String) })`n" >>$PROFILE

  # Abrir nueva pestaña en el Terminal de Windows
  $openWindowsTab = Read-Host "> ¿Quieres abrir una nueva pestaña en el Terminal de Window para visualizar los cambios? y/n"

  if ($openWindowsTab -eq "y") {
    wt --window 0 new-tab
  }
}

$setupStarshipPreset = Read-Host "2. ¿Quieres configurar el pre-ajuste 'gruvbox-rainbow' de Starship? y/n"

if (
  $setupStarshipPreset -eq "y"
) {
  $requirements = 'starship', 'sd'

  foreach ($requirement in $requirements) {
    if (-Not (Get-Command $requirement -ErrorAction SilentlyContinue)) {
      Write-Output "ERROR: Comando $requirement no encontrado"
      exit
    }
  }

  if (-Not (Test-Path $HOME\.config)) {
    New-Item -ItemType Directory $HOME\.config 
  }

  starship preset gruvbox-rainbow -o $HOME\.config\starship.toml 

  $removeSystemIcon = Read-Host "> ¿Quieres inhabilitar el ícono del sistema? y/n"

  if ($removeSystemIcon -eq "y") {
    sd '\[os\].*\ndisabled\ = false' '[os]\ndisabled = true' .\.config\starship.toml
  }
  else {
    sd 'Windows = "󰍲"' 'Windows = ""' .\.config\starship.toml
  }

  sd '"Documents" = "󰈙 "' '# "Documents" = "󰈙 "' .\.config\starship.toml
  sd '"Music" = "󰝚 "' '"Music" = " "' .\.config\starship.toml
  sd '"Developer" = "󰲋 "' '# "Developer" = "󰲋 "' .\.config\starship.toml
}

$setupVimrc = Read-Host "3. ¿Quieres activar una configuración básica para Vim? y/n"

if ($setupVimrc -eq "y") {
  $requirements = 'git'

  foreach ($requirement in $requirements) {
    if (-Not (Get-Command $requirement -ErrorAction SilentlyContinue)) {
      Write-Output "ERROR: Comando $requirement no encontrado"
      exit
    }
  }

  Invoke-WebRequest -useb https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim |`
    New-Item $HOME/vimfiles/autoload/plug.vim -Force

  git clone https://github.com/jsdiazp/bootcamp

  Copy-Item bootcamp/lab_10/.vimrc ~/_vimrc

  Write-Output (Get-Content ~/_vimrc | Where-Object {
    -not ($_.ReadCount -ge 3 -and $_.ReadCount -le 9)
  }) >~/_vimrc

  if (-Not (Test-Path ~\.config\vim\plugins)) {
    New-Item -ItemType Directory -Path .\.config\vim\plugins -Force
  }
  Copy-Item bootcamp/lab_10/vim/plugins/* ~/.config/vim/plugins

  Remove-Item -Force bootcamp
}
