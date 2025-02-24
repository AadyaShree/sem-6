// creating server

const http=require('http');
const server=http.createServer((req,res)=>{
    res.statusCode

    res.setHeader('Content-Type','text/plain');
    res.end("Hello World");
});
server.listen(9000,()=>{
    console.log("Server is running on port 9000");
});