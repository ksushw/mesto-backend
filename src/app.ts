import http from 'http';

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello, ');
  response.end();
});

server.listen(3000);
