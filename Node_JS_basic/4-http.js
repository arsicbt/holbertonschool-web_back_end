const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
});

server.listen(1245, () => {
    console.log('Serveur démarré sur http://localhost:1245');
});
