#Ingenia Demo 

Montar la instancia en un vitualhost en Xammp, Wampp, Laragon o en su defecto y como lo utilice en Laravel Homestead para su evaluación. 

El nombre de la base de datos debe ser **examen**, tal como lo solicitaron, favor de configurarlo en el archivo .env.example y reemplazar el nombre de este por .env al finalizar. 

Para cargar todas las dependencias del proyecto es necesario ejecutar el comando `composer install` o bien  `composer update`, para esto previamente se debe tener configurado el gestor de dependencias **Composer** en el equipo donde será evaluado. Esto permitira crear la carpeta **vendor**.

Anexo tambien el modelo de sql, el cual puede ser cargado directamente mediante una administrador de base de datos o bien puede generarse la migración utilizando el comando `php artisan migrate`. Posteriormente ejecutar el comando `php artisan db:seed` para rellenar la aplicación con datos de prueba para acceder al sistema.


**Accesos al sistema**
USER: demo@example.com 
PASS: secret
