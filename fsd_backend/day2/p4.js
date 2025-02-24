const http=require('http');
const fs=require('fs');
const server=http.createServer(async (req, res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html');
    const data = await fs.promises.readFile("./index.html", "utf-8");
    res.end(data);
})
server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})