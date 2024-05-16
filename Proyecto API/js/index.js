let peliculas = document.querySelector('#listaPeliculas');


//Promise o Promesa
fetch('https://dummyapi.online/api/movies')
  .then((response) => response.json())
  .then((json) => console.log(json));


//Obtiene los productos de la API

//<img src="${pelicula.image}" class="card-img-top py-5" >

function obtenerPeliculas(){
    fetch('https://dummyapi.online/api/movies')
    .then((response) => response.json())
    .then((peliculasObtenidas) => {
        console.log("Peliculas obtenidas", peliculasObtenidas);
        peliculasObtenidas.forEach((pelicula, indice) => {
            console.log("Pelicula" + pelicula);
            listaPeliculas.innerHTML += `
            <div class="col-12 col-md-3">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${pelicula.id}</h5>
                    <h5 class="card-title">${pelicula.movie}</h5>
                    <p class="card-text">${pelicula.rating}</p>
                    <p class="text-success">${pelicula.imdb_url}</p>
                    <a href="#" class="btn btn-primary">Ver</a>
                </div>
                </div> 
            `	
        });
    });

}


obtenerPeliculas();