import { ReadStream } from 'fs';

/*
Streams
    'Chorros' de información que se transmiten en  'pedazos'(chunks)
    3 tipos: Lectura / Escritura / Duplex
    Instancias de EventEmitter
    Acceso asíncrono
    Es raro crear streams directamente
    Pero muchos recursos nos ofrecen este interfaz
    Detrás de muchos mecanismos de Node.$(selector).scroll(function () { 
        
    });
*/
'use strict';

var fs = require('fs');
var rs = fs.createReadStream('assets/nombres.txt');
var ws = fs.createWriteStream('assets/copia_nombres.txt');