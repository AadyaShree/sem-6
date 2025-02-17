// create directory using fs module
// mkdir is used to create directory

const fs=require('fs');

fs.mkdir("mydir",(err)=>{
    if(err)
        console.error("error creating directory",err);
    else
        console.log("Directory created successfully");
});


