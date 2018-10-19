const express = require('express');
const http = require('http');
const morgan =require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev')); // print out additional information to the screen

app.use(express.static(__dirname + '/public')); // to access static html file from public folder

app.use((req , res, next) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1> this is an express server</h1></body></html>');
});

const server =http.createServer(app);

server.listen(port, hostname, () =>{
    console.log(`server running at http://${hostname}:${port}`);
});