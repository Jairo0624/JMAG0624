let productos = document.querySelector('#listaPeliculas');


//Promise o Promesa
fetch('https://dummyapi.online/api/products')
  .then((response) => response.json())
  .then((json) => console.log(json));


//Obtiene los productos de la API

//<img src="${pelicula.image}" class="card-img-top py-5" >

function obtenerProductos(){
    fetch('https://dummyapi.online/api/products')
    .then((response) => response.json())
    .then((productosObtenidos) => {
        console.log("Peliculas obtenidas", productosObtenidos);
        productosObtenidos.forEach((producto, indice) => {
            console.log("Pelicula" + producto);
            listaProductos.innerHTML += `
            <div class="col-12 col-md-3 py-3">
                <div class="card">
                <img src="${producto.featuredImage}" class="card-img-top" >
                <div class="card-body">
                    <h5 class="card-title">${producto.id}</h5>
                    <h5 class="card-title">${producto.name}</h5>
                    <h5 class="card-title">${producto.productCategory}</h5>
                    <h5 class="card-title">${producto.brand}</h5>
                    <p class="card-text">${producto.description}</p>
                    <h6 class="text-danger"> $${producto.basePrice}</h6>
                    <p class="text-success">Disponible: ${producto.inStock}</p>
                    <h6 class="card-text">${producto.stock} Disponible(s)</h6>
                    <h6 class="card-text">Almacenamiento: ${producto.storageOptions}</h6>
                    <h6 class="card-text">Colores: ${producto.colorOptions}</h6>
                    <p class="card-text">Pantalla: ${producto.display}</p>
                    <p class="card-text">Procesador: ${producto.CPU}</p>
                    <a href="#" class="btn btn-primary">Màs Detalles</a>
                </div>
                </div> 
            `	
        });
    });

}


obtenerProductos();