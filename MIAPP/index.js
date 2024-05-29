const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola Dia de la Hamburguesa!');
    });

app.get('/productos', (req, res) => {
    let productos = [
        {nombre: 'Hamburguesa simple', precio: 100},
        {nombre: 'Hamburguesa doble', precio: 150},
        {nombre: 'Papas fritas', precio: 50},
        {nombre: 'Gaseosa', precio: 30},
        {nombre: 'Agua', precio: 20}
        ];
    
        let respuesta = '<table border="1">';
        productos.forEach(producto => {
            respuesta += '<tr><td>' + producto.nombre + '</td><td>' + producto.precio + '</td></tr>';
            });
        respuesta += '</table>';
        res.send(respuesta);
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });

