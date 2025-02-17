// APPEND

const fr=require('fs');
const append=()=>{
    const data="\n I am appending new data \n";
    fr.appendFile("./data.txt",data,(err)=>{
        if(err)
            console.error(err);
        else
            console.log(" Data appended successfully");
    });
}
append();