const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json'});

    const data = { data: "Hola Mundo" };

    res.write(JSON.stringify(data));
    res.end();
})
    .listen(8081);

console.log('Escuchando en el puerto 8081');