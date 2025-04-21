const express=require('express');
const app=express();
app.use(express.json());
// const user=[
//     {id:1,name:'john',age:25},
//     {id:2,name:'jane',age:26},
//     {id:3,name:'jim',age:27}
// ];
const user=[];
app.get('/api',(req,res)=>{
    res.json(user);
});
app.post('/user',(req,res)=>{
    const data=req.body;
    const newId=user.length>0?user[user.length-1].id+1:1;
    data.id=newId;
    user.push(data);
    res.json({message:'data received',data:data});

});
app.get('/user',(req,res)=>{
    res.send('welcome to backend server');
});
app.listen(9000,()=>{
    console.log('server is running on port 9000');
});