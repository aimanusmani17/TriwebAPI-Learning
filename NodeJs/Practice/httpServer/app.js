// how can we create http server in node js

const http= require('http')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'});

    res.end("server is running");
});

server.listen(3000);