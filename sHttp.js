'use strict';
var http = require('http');
 function webServer (req,res){
   res.writeHead(200,{'Content-Type':'text/html'});
   res.end('<h1> i am  the overlord</h1>')
 };

http.createServer(webServer).listen(3000,'127.0.0.1');

console.log('Kotan Running  on 127.0.0.1:3000');
