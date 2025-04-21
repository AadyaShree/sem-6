const express=require('express');
const { write } = require('fs');
const app=express();
const fs=require('fs/promises');
let user=[];
const readData=()=>{
    user=fs.readFile('./data.json','utf8')
}
const writeData=()=>{
    fs.writeFile('./data.json',JSON.stringify(user,null,2));
}
// const path = require('path') 
app.use(express.json());
// const user=[
//     {id:1,name:'john',age:25},
//     {id:2,name:'jane',age:26},
//     {id:3,name:'jim',age:27}
// ];

app.get('/api',(req,res)=>{
    readData();
    res.json(user);
});
app.post('/user',(req,res)=>{
    const data=req.body;
    const newId=user.length>0?user[user.length-1].id+1:1;
    data.id=newId;
    readData();
    user.push(data);
    writeData();
    res.json({message:'data received',data:data});
    


});
app.get('/user',(req,res)=>{
    res.send('welcome to backend server');
});
app.listen(9000,()=>{
    console.log('server is running on port 9000');
});