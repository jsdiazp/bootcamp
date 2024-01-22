# Shell
# Interfaz para interactuar con el sistema operativo

# ZSH

## Instalación

### Debian o Ubuntu
if [[ "$(uname -s)" == Linux* ]] && command -v apt >/dev/null; then
  sudo apt update
  sudo apt install -y zsh
fi

### Fedora, CentOS, o Red Hat
if [[ "$(uname -s)" == Linux* ]] && command -v yum >/dev/null; then
  sudo yum update
  sudo yum install -y zsh
fi

# Oh My Zsh (https://ohmyz.sh/)
# Mejora la funcionalidad de zsh

## Pre-configuración
[[ -e ~/.oh-my-zsh ]] && rm -rf ~/.oh-my-zsh
[[ -e ~/.zshrc ]] && rm ~/.zshrc
[[ -e ~/.zprofile ]] && rm -rf ~/.zprofile

## Instalación
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

# ZSH Autosuggestions (https://github.com/zsh-users/zsh-autosuggestion)
# Sugiere comandos a medida que se escribe basándose en el historial y en los completados

## Instalación
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

## Configuración
echo '\n# ZSH Autosuggestions' >>~/.zshrc
echo 'ZSH_AUTOSUGGEST_STRATEGY=(history completion)\n' >>~/.zshrc

# ZSH Syntax Hightlighting (https://github.com/zsh-users/zsh-syntax-highlighting)
# Resaltado de comandos

## Instalación
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

## Configuración
echo '# ZSH Syntax Highlighting' >>~/.zshrc
echo 'ZSH_HIGHLIGHT_HIGHLIGHTERS=(main brackets pattern cursor)\n' >>~/.zshrc

# Activación de plugins de ZSH
case "$(uname -s)" in
Darwin*)
  sed -i'' -e 's/plugins=(git)/plugins=(git zsh-autosuggestions zsh-syntax-highlighting)/' ~/.zshrc
  ;;
Linux*)
  sed -i 's/plugins=(git)/plugins=(git zsh-autosuggestions zsh-syntax-highlighting)/' ~/.zshrc
  ;;
esac

# Homebrew (https://brew.sh)
# Gestor de paquetes

## Pre-configuración
[[ -e $HOMEBREW_PREFIX ]] && /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)" -y

## Requerimientos (https://docs.brew.sh/Homebrew-on-Linux#requirements)

### Debian o Ubuntu
if [[ "$(uname -s)" == Linux* ]] && command -v apt >/dev/null; then
  sudo apt install -y build-essential procps curl file git
fi

### Fedora, CentOS, o Red Hat
if [[ "$(uname -s)" == Linux* ]] && command -v yum >/dev/null; then
  sudo yum groupinstall -y 'Development Tools'
  sudo yum install -y procps-ng curl file git
fi

## Instalación
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" -y

## Configuración
echo '# Hombebrew' >>~/.zshrc
case "$(uname -s)" in
Darwin*)
  case "$(uname -m)" in
  arm64 | aarch64)
    eval "$(/opt/homebrew/bin/brew shellenv)"
    ;;
  x86_64)
    eval "$(/usr/local/homebrew/bin/brew shellenv)"
    ;;
  esac
  ;;
Linux*)
  eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
  ;;
esac
echo "eval \"\$($HOMEBREW_REPOSITORY/bin/brew shellenv)\"\n" >>~/.zshrc

# Starship (https://starship.rs)
# Mejora el prompt (interfaz de entrada) de la terminal

## Instalación
brew install starship

## Configuración
echo '# Starship' >>~/.zshrc
echo 'eval "$(starship init zsh)"\n' >>~/.zshrc

# The Fuck (https://github.com/nvbn/thefuck)
# Sugiere correcciones en comando previo

## Instalación
brew install thefuck

## Configuración
echo '# The Fuck' >>~/.zshrc
echo 'eval $(thefuck --alias)\n' >>~/.zshrc

# Bat (https://github.com/sharkdp/bat)
# Muestra el contenido de un archivo resaltado y formateado
brew install bat

## Ubuntu
if [[ "$(uname -s)" == Linux* ]]; then
  echo '# bat' >>~/.zshrc
  echo 'alias bat=batcat\n' >>~/.zshrc
fi

# fzf (https://github.com/junegunn/fzf)
# Mejora la funcionalidad de <C-r> y <C-t>

## Instalación
brew install fzf

## Configuración
echo '# fzf' >>~/.zshrc
echo '[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh' >>~/.zshrc
$HOMEBREW_PREFIX/opt/fzf/install --all

# zoxide (https://github.com/ajeetdsouza/zoxide)
# Comando cd más inteligente, inspirado en z y autojump

## Instalación
brew install zoxide

## Configuración
echo '# zoxide'
echo 'eval "$(zoxide init zsh)"' >>~/.zshrc

# Vim

## Configuración
wget https://raw.githubusercontent.com/jsdiazp/bootcamp/HEAD/lab_10/.vimrc -O ~/.vimrc

# Activar shell zsh
chsh -s /bin/zsh
source ~/.zshrc
