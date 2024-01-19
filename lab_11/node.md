# node.js

Ejecutor de JavaScript

## Tabla de contenidos

- [Instalación](#instalación)
- [Glosario](#glosario)

## Instalación

### Recomendada

Utilizar un gestor de versionamientos como [nvm](https://github.com/nvm-sh/nvm), para ello se puede utilizar el plugin de ZSH [zsh-nvm](https://github.com/lukechilds/zsh-nvm)

1. Clonar plugin

```shell
git clone https://github.com/lukechilds/zsh-nvm ~/.oh-my-zsh/custom/plugins/zsh-nvm
```

2. Editar archivo .zshrc

```shell
vim ~/.zshrc
```

3. Adicionar en los plugins *zsh-nvm*

4. Actualizar la configuración de *zsh*

```
source ~/.zshrc
```

5. Instalar la versión LTS (versión soportada en el largo plazo) de node y npm

```shell
nvm install --lts --latest-npm
```

6. Habilitar globalmente la versión LTS instalada

```shell
nvm use --lts
```

## Glosario

- **Gestor de versionamientos**: Permite actualizar la versión del ejecutor del lenguaje de programación utilizado fácilmente, y así aprovechar las mejoras que incorpora el ejecutor en cada nueva versión
