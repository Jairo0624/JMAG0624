let productos = document.querySelector('#listaProductos');


//Promise o Promesa
fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>console.log(json))


//Obtiene los productos de la API

function obtenerProductos(){
    fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then( productosObtenidos => {
        console.log("ProductosObtenidos", productosObtenidos);

        productosObtenidos.forEach((producto, indice) => {
            console.log("Producto" + producto);

            listaProductos.innerHTML += `
            <div class="col-12 col-md-3">
                <div class="card">
                <img src="${producto.image}" class="imagenProducto card-img-top py-5" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.description.slice(0,100)}</p>
                    <p class="text-danger">${producto.price}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
                </div> 
            `	
        });
    });

}

obtenerProductos();
