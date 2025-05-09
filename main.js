const http = require('http');
const fs = require('fs');
const path = require('path');

let students = [
    { id: 1, name: 'Andi', advisor: 'Dr. Budi' },
    { id: 2, name: 'Sari', advisor: 'Dr. Ani' }
];

let advisors = ['Dr. Budi', 'Dr. Ani', 'Dr. Joko'];

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile('./public/index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/style.css') {
        fs.readFile('./public/style.css', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    } else if (req.url === '/script.js') {
        fs.readFile('./public/script.js', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(data);
        });
    } else if (req.url === '/students') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ students, advisors }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});
