/*
Buffers
    Una tira de bytes (datos binarios)
    Similar a un array de enteros
    Tamaño fijo
    Manipular datos directamente
        Sockets
        Streams
        Implementar protocolos complejos
        Manipulación de ficheros/imagenes
        Criptografía
*/
'use strict';

// var buf = new Buffer(100);
var buf2 = new Buffer(26);
// var str = '\u00bd + \u00bc = \u00be';

// buf.write('abcd', 0, 4, 'ascii');
/*console.log(buf,
    buf.toString('ascii'),
    str,
    str.length + ' caracteres',
    Buffer.byteLength(str, 'utf8i ' +
        buf2));
*/
for (var i = 0; i < buf2.length; i++) {
    // if (object.iOwnPbuf23y(key)) {
    //     const element = object[key];

    // }
    //97 en ASCII es la letra a
    buf2[i] = i + 97;

}
console.log(buf2.toString('ascii'));