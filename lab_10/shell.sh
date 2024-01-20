# Shell
# Interfaz para interactuar con el sistema operativo

# ZSH

## Debian or Ubuntu
if [[ "$(uname -s)" == Linux* ]] && command -v apt >/dev/null; then
  sudo apt update
  sudo apt install zsh
fi

## Fedora, CentOS, or Red Hat
if [[ "$(uname -s)" == Linux* ]] && command -v yum >/dev/null; then
  sudo yum update
  sudo yum install zsh
fi

# Oh My Zsh (https://ohmyz.sh/)
# Mejora la funcionalidad de zsh

## Pre-configuración
[[ -e ~/.oh-my-zsh ]] && rm -rf ~/.oh-my-zsh
[[ -e ~/.zshrc ]] && rm ~/.zshrc
[[ -e ~/.zprofile ]] && rm -rf ~/.zprofile

# Instalación
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

# ZSH Autosuggestions (https://github.com/zsh-users/zsh-autosuggestion)
# Sugiere autocompletados

## Instalación
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

## Configuración
echo '\n# ZSH Autosuggestions' >>~/.zshrc
echo 'ZSH_AUTOSUGGEST_STRATEGY=(history completion)\n' >>~/.zshrc

# ZSH Syntax Hightlighting (https://github.com/zsh-users/zsh-syntax-highlighting)
# Resalta del texto

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

## Preconfiguración
[[ -e $HOMEBREW_PREFIX ]] && /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"

## Requerimientos (https://docs.brew.sh/Homebrew-on-Linux#requirements)

### Debian or Ubuntu
if [[ "$(uname -s)" == Linux* ]] && command -v apt >/dev/null; then
  sudo apt install build-essential procps curl file git
fi

### Fedora, CentOS, or Red Hat
if [[ "$(uname -s)" == Linux* ]] && command -v yum >/dev/null; then
  sudo yum groupinstall 'Development Tools'
  sudo yum install procps-ng curl file git
fi

## Requerimientos

## Instalación
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

## Configuración
echo '# Hombebrew' >>~/.zshrc
case "$(uname -m)" in
  Darwin*)
    arm64 | aarch64)
    eval "$(/opt/homebrew/bin/brew shellenv)"
    ;;
    x86_64)
    eval "$(/usr/local/homebrew/bin/brew shellenv)"
    ;;
  Linux*)
  eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
  ;;
esac
echo "eval \"\$($HOMEBREW_REPOSITORY/bin/brew shellenv)\"\n" >>~/.zshrc

# Starship (https://starship.rs)
# Mejora el prompt (interfaz de entrada) de la consola

## Instalación
brew install starship

## Configuración
echo '# Starship' >>~/.zshrc
echo 'eval "$(starship init zsh)"\n' >>~/.zshrc

# The Fuck (https://github.com/nvbn/thefuck)
# Recomienda correcciones

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

# fzf (ihttps://github.com/junegunn/fzf)
# mejora la funcionalidad de <C-r> y <C-t>

## Instalación
brew install fzf

## Configuración
echo '# fzf' >>~/.zshrc
$HOMEBREW_PREFIX/opt/fzf/install

# Activar shell zsh
chsh -s /bin/zsh
source ~/.zshrc
