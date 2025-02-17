// make write function using write fs.write file 

const fs=require('fs');
const write=()=>{
    const data= "i am writing new data";
    fs.writeFileSync("./data.txt",data,(err)=>{
        if(err)
            console.error(err);
        else
            console.log("Data written successfully");
    });
}
console.log("Before writing");
write();
console.log("After writing");