const http=require('http'); 
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    let data={
        name:"Aadya",
        age:20
    }
    if(req.url==="/getdata" && req.method==='GET')
    {
        res.end(JSON.stringify(data));

    }
    else if(req.url==="/setdata" && req.method==='POST')
    {
        res.end("data recieved");
    }
    
});
server.listen(9000,()=>{
    console.log("server started at port 9000");
});