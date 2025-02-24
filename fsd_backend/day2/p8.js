// user name -> data.json me store and then fetch
const http=require("http");
// save data in json file
const fs=require('fs/promises');    

const server=http.createServer(async(req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
   
    // code for storing data into users array
    if(req.url==='/setdata' && req.method==='POST')
    {
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk;
        });
        req.on('end',()=>{
            const user=JSON.parse(body);
            users.push(user);
            res.end("data recieved !");
        });
    }
    // code for getting data from users array
    else if(req.url==='/getdata' && req.method==='GET')
    {
        const data=await fs.readFile('./data.json','utf8');
        res.end(JSON.stringify(users));
    }
    else
    {
        res.end("Not found");

    }
});
server.listen(9000,()=>{
    console.log("server started at port 9000");
});



