/*
Organización de código JS
    librerias/modulos (import)
    constantes (const READY_ALLOWED = 4)
    objetos/variables
    funciones
    eventos
    ejecuciones
*/
'use strict'; //modo estricto para programar con buenas practicas

console.log('Hola Mundo, desde Node.js. Esto se ve desde la consola');
console.log(2 + 5);
console.log(global); //para el lado servidor, para el aldo cliente window

//intervalos de tiempo para la ejecucion de una funcion
setInterval(function() {
    console.log('esto se ejecuta cada 1000 mseg.')
}, 1000);
// Ctrl + C detine la ejecucion en la consola