# Nico-Salva-Javi

Pasos de instalación
Utilizar el comando git clone para clonar el repositorio en el directorio que apunte su terminal.
Dentro del directorio de la API, ejecutar el comando npm install en la raíz, esto hará que las dependencias se instalen y así pueda correrse el proyecto; 
Este último comando creará una carpeta llamada node_modules que contendrá todas las dependencias instaladas, es importante tenerla ya que sin ella el proyecto no correrá correctamente.
Entrar a nuestro gestor de base de datos y crear una base de datos nueva llamada movies con el cotejamiento utf8-general-ci.
Ya teniendo las dependencias, dirigirse al archivo db/database-movies.sql y copiar el código CREATE y ejecutarlo en su gestor de bases de datos MySQL. Incluso ya puede meter los datos de prueba del código INSERT dentro de ese fichero.
Ahora diríjase al archivo db/procedures-movies.sql y haga lo mismo con el Stored Procedure llamado movieAddOrEdit.
Iniciar el proyecto
Iniciaremos el proyecto usando la terminal, dirigiéndonos al directorio src/.
Dentro de ese directorio, ejecutar el comando node index.js.
Si todo salió bien, la terminal mostrará un mensaje indicándonos que la api está trabajando bajo el puerto 3000 y la base de datos ha sido conectada.
