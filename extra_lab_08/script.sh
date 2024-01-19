# Comentario
# Crear con símbolo '#'

# Almacenar variables
#
# Sintaxis
# unix: nombre_variable=dato
# windows: $nombre_variable=dato
saludo=¡Hola!
carpeta_actual=$PWD

# cmd echo
# Imprimir en la consola
#
# Sintaxis
# unix: echo
# windows: Write-Output
echo cmd echo
echo $saludo
echo $PWD # Imprimir la variable $PWD (directorio de trabajo)
echo $carpeta_actual

# cmd cd
# Movernos entre directorios
#
# Sintaxis
# unix: cd ruta
# windows: Set-Location ruta
cd .. # Se dirige al directorio padre
cd $carpeta_actual
cd ~ # Se dirige al directorio del usuario con el que se están ejecutando los comandos
cd - # Se dirige al directorio anterior
cd / # Se dirige al directorio raíz
cd - # Se dirige al directorio anterior

# cmd mkdir
# Crear directorios
#
# Sintaxis
# unix: mkdir nombre_nuevo_directorio
# windows: New-Item nombre_nuevo_directorio -ItemType Directory
mkdir carpeta_de_prueba

# cmd touch
# Crea archivos
#
# Sintaxis
# unix: touch nombre_nuevo_archivo
# windows: Write-Output . >> nombre_nuevo_archivo
# windows: New-Item nombre_nuevo_archivo -ItemType File
touch archivo_de_prueba

# cmd mv
# Nos permite mover o renombrar archivos o carpetas
#
# Sintaxis
# unix: mv nombre_ítem nueva_ubicación/nuevo_nombre
# windows: Move-Item nombre_ítem nueva_ubicación/nuevo_nombre
mv archivo_de_prueba archivo_renombrado

# cmd rm
# Elimina archivos o directorios
#
# Sintaxis
# unix: rm nombre_archivo (solo elimina archivos)
# unix: rm -r nombre_carpeta (elimina carpetas y archivos)
# windows: Remove-Item (elimina carpetas y archivos)
rm archivo_renombrado
rm -r carpeta_de_prueba

# cmd whoami
# Nos indica el nombre del usuario con el que se están ejecutando los comandos
whoami

# cmd clear
# Limpia la consola
#
# Sintaxis
# unix: clear
# windows: Clear-Host
clear

# cmd cat
# Nos permite ver que contiene un archivo
#
# Sintaxis
# unix: cat ruta_del_archivo
# windows: Get-Content ruta_del_archivo
echo "⚡️ Impresión del contenido del archivo script.sh"
cat script.sh

# cmd ls
# Listar archivos del directorio actual
#
# Sintaxis
# unix: ls
# windows: Get-Child-Item
echo "⚡️ Listado de archivos del directorio actual"
ls

# cmd read
# Solicitar un dato al usuario
#
# Sintaxis
# unix: read nombre_de_la_variable
# windows: $nombre_de_la_variable = Read-Host pregunta
echo "Hello, who am I talking to?"
read name
echo "It's nice to meet you $name"
