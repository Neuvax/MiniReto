# MiniReto 2

Esta es una aplicación web para administrar videojuegos. Permite a los usuarios agregar, actualizar, eliminar y listar los videojuegos almacenados en una base de datos. La aplicación consta de un frontend en React, un backend en Node.js con Express y una base de datos MySQL hosteada a traves de PlanetScale.

# Uso

La aplicación permite realizar las siguientes operaciones:

* Listar todos los videojuegos almacenados en la base de datos
* Agregar un nuevo videojuego
* Actualizar un videojuego existente
* Eliminar un videojuego existente

# API

La API proporciona un conjunto de endpoints para la gestión de videojuegos y sus detalles. Estos endpoints permitirán a los usuarios realizar operaciones CRUD en una base de datos de videojuegos. Nuestra API responde lo siguiente:

* ¿Cuáles son los videojuegos disponibles en la base de datos?
* ¿Cuáles son los detalles de un videojuego específico?
* ¿Cómo se puede agregar, actualizar la información y eliminar un videojuego existente?

La API responderá a estas preguntas mediante endpoints específicos que permitirán a los usuarios realizar las operaciones CRUD mencionadas anteriormengte, cuyos endpoints son:

```http
* GET /videogames
```

```http
* POST /videogames
```
```http
* DELETE /Videogames/:id
```
```http
* Put /Videogames/:id
```

# Créditos
Esta aplicación fue creada por:

* Jorge Esteban Madrigal Ramirez
* Jorge German Wolburg Trujillo
