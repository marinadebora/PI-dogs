<p align='left'>
    <img src='https://res.cloudinary.com/deqbqghhq/image/upload/v1664317269/Nuevo_proyecto_14_oybsne.jpg' </img>
</p>

# Proyecto individual Henry Dogs



## Enunciado

La idea general fue crear una aplicación en la cual se puedan ver distintas razas de perro junto con información relevante de las mismas utilizando la api externa 
[the dog api](https://thedogapi.com/) y a partir de ella poder, entre otras cosas:

  - Buscar perros
  - Filtrarlos / Ordenarlos
  - Agregar nuevos perros

## Para probar mi proyecto segui los siguientes pasos

 1. Clonar el repositorio en sus computadoras, puedes hacerlo utilizando el comando `git clone https://github.com/marinadebora/PI-dogs.git` en <strong>'git bash'</strong>
 2. En la carpeta `api` crear un archivo llamado: `.env` que tenga la siguiente forma:
    ```
    DB_USER=usuariodepostgres
    DB_PASSWORD=passwordDePostgres
    DB_HOST=localhost
    PORT=3001
    API_KEY=a4a1ad63-9df4-4ae1-9771-75602c361ec0
    ```
    Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres.
    Adicionalmente será necesario que crees desde <strong>PostgresSQL</strong> una base de datos llamada `dogs`.
 3. Una vez completado este paso, desde la consola, y parado en la carpeta <strong>'api'</strong>, correr los comandos ```npm install``` para instalar las dependencias. Luego, ```npm start``` para levantar la base de datos y correr el Back-end.
 4. Repetir los comandos en otra consola, pero parado en la carpeta <strong>'client'</strong>.
 5. El proyecto debería estarse corriendo en la ruta <em>http://localhost:3000</em> en tu navegador.
 Tambien podes verlo en [Dogs](https://pi-dogs-kappa.vercel.app) 
## Tecnologías utilizadas:
- [ ] JavaScript
- [ ] React
- [ ] Redux
- [ ] Node
- [ ] Express
- [ ] Sequelize
- [ ] PostgresSQL
- [ ] HTML
- [ ] CSS

## Imagenes del proyecto
Landing Page
<img src ="https://res.cloudinary.com/deqbqghhq/image/upload/v1664317151/298995-alexfas01_cr6lle.jpg"/>

Home
<img src ="https://res.cloudinary.com/deqbqghhq/image/upload/v1664317449/Nuevo_proyecto_15_lqtqko.jpg"/>

Crear raza
<img src ="https://res.cloudinary.com/deqbqghhq/image/upload/v1664317565/Nuevo_proyecto_16_uvhxup.jpg"/>

Raza creada
<img src ="https://res.cloudinary.com/deqbqghhq/image/upload/v1664317737/Nuevo_proyecto_17_kflezi.jpg"/>
