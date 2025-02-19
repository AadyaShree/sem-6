const fs=require('fs/promises');
const write=async()=>{  
    const data= "i am writing new data";
    await fs.writeFile("./data.txt",data,(err)=>{
        if(err)
            console.error(err);
        else
            console.log("Data written successfully");
    });
   
};
write();