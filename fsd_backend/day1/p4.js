// read using asynchronous
const fs = require('fs');

const read=()=>{
    fs.readFile("./data.txt",'utf8',(err,data)=>{
        if(err) 
            console.error(err);
        else 
            console.log(data);
    });
}
console.log("Before reading");
read();
console.log("After reading");


// fs.readFile("./data.txt",'utf8',(err,data)=>{
//     if(err) 
//         console.error(err);
//     else 
//         console.log(data);
// });