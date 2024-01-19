# Comentarios
# Se usa el símbolo "#"

# Shell
# Interfaz para interactuar con el Sistema Operativo

# Variables
# Almacenan datos
# unix: nombre_variable=dato
# windows: $nombre_variable = dato
ubicacion_actual=$PWD
bienvenida="¡Hola!"

# cmd echo
# Imprimir información en la consola
# unix: echo dato
# windows Write-Output dato
echo $PWD
echo $bienvenida

# cmd env
# Ver variables del sistema operativo
# unix: env
# windows: pendiente
env

# cmd cd
# Mover entre directorios
# unix: cd
# windows: Set-Location
cd /  # Ir a directorio raíz
cd ~  # Ir a directorio de usuario actual
cd .. # Devuelve a carpeta padre
cd -  # Devolverme al directorio anterior
cd $ubicacion_actual

# cmd ls
# Listar contenido de la carpeta
# unix: ls
# windows: Get-ChildItem
ls

# cmd cat
# Ver que contiene un archivo
# unix: cat ruta_de_archivo
# windows: Get-Content ruta_de_archivo
cat ../lab_01/grid.html

# cmd clear
# Limpia la consola
# unix: clear
# windows: Clear-Host
clear

# cmd mkdir
# Crear carpetas
# unix: mkdir nombre_carpeta
# windows: New-Item nombre_carpeta -ItemType Directory
mkdir carpeta

# cmd rm -r
# Eliminar carpeta
# unix: rm -r ruta_de_carpeta
# windows: Remove-Item ruta_de_carpeta
rm -r carpeta

# cmd touch
# Crear archivos
# unix: touch nombre_archivo
# windows New-Item nombre_archivo -ItemType File
touch archivo

# cmd mv
# Mover o renombrar archivos
# unix: mv ruta_de_archivo nueva_ruta_de_archivo
# windows: Move-Item ruta_de_archivo nueva_ruta_de_archivo
mv archivo ../                     # mover archivo a carpeta padre
mv ../archivo ./archivo_renombrado # mover y renombrar archivo

# cmd rm
# Eliminar archivos
# unix: rm ruta_de_archivo_o_carpeta
# windows: Remove-Item ruta_de_archivo_o_carpeta
rm archivo_renombrado

# cmd open
# Abrir carpeta en el gestor de archivos
# unix: open ruta_de_carpeta
# windows: Invoke-Item ruta_de_carpeta
open .

# ejemplo
echo "⚡️ Actualizando sistema operativo"
softwareupdate --install --all
