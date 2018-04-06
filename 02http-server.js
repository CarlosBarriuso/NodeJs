'use strict';
const http = require('http'); //carga del módulo http
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => { //request = peticion, responsive = respuesta
    res.statusCode = 200; //cuando contesta el servidor
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo\n');
});

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});