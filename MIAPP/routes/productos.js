const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const { connection } = require('../config.db');

const getProducts = (request, response) => {
    connection.query("SELECT * FROM tb_productos", 
    (error, results) => {
        if (error) 
            throw error;

        response.status(200).json(results);
    });

};

app.route('/productos').get(getProducts);

module.exports = app;