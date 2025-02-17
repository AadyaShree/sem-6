const fs=require('fs');
const data= "New data";
fs.writeFileSync("./data.txt",data);