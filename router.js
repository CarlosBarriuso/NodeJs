function route(handle, pathname, response) {

    console.log("A punto de rutear una petición para " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.log('No se ha encontrado manipulador para ' + pathname);
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write("404 No se encuentra para esa PETICION");
        response.end();
    }
}

exports.route = route;