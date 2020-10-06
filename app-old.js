const http = require('http');

const puerto = 8080;

http.createServer((request, response) => {

        response.writeHead(200, { 'Content-Type': 'aplication/json' });

        let salida = {
            nombre: 'Alejandro',
            edad: 31,
            url: request.url
        }

        response.write(JSON.stringify(salida));
        // response.write('Hola Mundo');
        response.end();
    })
    .listen(puerto);

console.log(`Escuchando el puerto ${puerto}`);