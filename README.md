# Talento Tech

# Tienda de Mascotas
Es un sitio preliminar para una tienda de mascotas, sus accesorios y los servicios que se podrían brindar.

Tiene incorporada la funcionalidad del carrito para poder hacer compras en la web


## Herramientas:

* Convertidor de logo a ICO: https://convertico.com/es/
* Convertidor de logo a ICO: https://www.favicon-generator.org/
* Analizador de HTML: https://validator.w3.org/
* Resize img: https://www.iloveimg.com/resize-image
* OPEN GRAPH  https://www.opengraph.xyz/
* Font Awesome https://cdnjs.com/libraries/font-awesome  https://fontawesome.com/icons
* Robots txt: www.seoptimer.com
* Sitemap.xml: https://www.xml-sitemaps.com/
* Hacer ejecrcicios o pruebas ed codigo: https://codepen.io/
* Manejar imagnes con el input file: https://www.youtube.com/watch?v=nG2Rk01FB7k
* Loading spinners: https://loading.io/css/

### Para back

* https://sqlbolt.com/



<br><br>



## Comandos de git básicos para trabajar

Lo que llamemos como "dirección del repositorio" se obtiene yendo al link del repositorio > desplegable del boton verde "code" > copiando el enlace que nos aparece en esta ventanita.

<br>

Si vamos a comenzar con git en un proyecto que no lo tiene, debemos ejecutar el comando ```git init``` para iniciar un repositorio en el proyecto actual. Si vamos a traernos un proyecto remoto, no será necesario, ya que nos traerá el proyecto con el git iniciado dentro de éste.

<br>

### Comandos para traer archivos

* ```git clone <dirección-del-repositorio>```   Con este comando nos creamos una copia del proyecto en nuestra pc, dentro de la carpeta en la que estemos.
* ```git pull```    Con este comando traemos las actualizaciones de los archivos que hayan modificado nuestros compañeros.

<br>

### Comandos para cargar archivos

* ```git add <nombre-de-archivo>```     Agrega un archivo o modificación individual, el que le pasemos como parámetro, a los registros de git.
* ```git add .```  Usando un punto en lugar del nombre de un archivo, se agregan a los registros de git todos los archivos y modificaciones nuevos.
* ```git commit -m "Descripcion de los cambios agregados"```    Se debe crear una descripción de los cambios, a modo informativo y de seguimiento, antes de subir finalmente los archivos.
* ```git push origin main```    Con este comando, actualizaremos los registros locales, con los del repositorio remoto, en este caso, GitHub. En ocaciones solo con ejecutar ```git push``` Es suficiente.

Entonces, subir y actualizar los archivos, es una secuencia de 3 pasos: 
1.  ```git add .```
2.  ```git commit -m``` "Modificada tal cosa o agregada tal funcionalidad o reparado tal error"
3.  ```git push```

> Consejo: SIEMPRE antes de empezar a trabar en el proyecto luego de un rato, y justo antes de hacer un push, ejecutar un ```git pull``` para traer los cambios que hayan podido ser subidos por otra persona mientras nosotros estabamos trabajando, esto para evitar conflictos o colisiones.

<br>

### Comandos para manejar las ramas (branches)

* ```git branch``` Muestra las ramas locales.
* ```git branch -a``` Muestra las ramas locales y remotas.
* ```git checkout -b <nombre-de-la-rama>``` Esto nos crea una nueva rama partiendo de la actual.
* ```git checkout <nombre de la rama>``` Cambiamos a la rama pasada como parámetro.
* ```git merge <nombre-de-la-rama>``` Funde la rama nombrada, hacia la rama en la cual estamos parados.

> De más está decir que los nombres pasados como parámetros no incluyen los "< >", esto es solo para representar un nombre o variable.

> Se recomienda trabajar sobre una rama "develop" en lugar de la main, y cada tanto probar el funcionamienta, si todo funciona bien se mergea con la main.

<br>

### Más comandos:

* Resetear todos los cambios no comiteados: ```git reset --hard HEAD```
* Retroceder a un estado anterior: ```git revert <hash_commit>```  El hash al que hace referencia se obtiene explorando el historial de commits en github.
