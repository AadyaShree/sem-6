const fr=require('fs');

//  1.... create file in mydir directory using fs module

// const filePath="mydir/data.txt";
// fr.writeFile(filePath,"New data",(err)=>{
//     if(err)
//         console.error(err);
//     else
//         console.log("File created successfully");
// });



// 2.... delete file in mydir directory using fs module

// fr.unlink("mydir/data.txt",(err)=>{
//     if(err)
//         console.error(err);
//     else
//         console.log("File deleted successfully");
// });

// 3.... delete directory using fs module
// rmdir is used to delete directory

fr.rmdir("mydir",(err)=>{
    if(err)
        console.error(err);
    else
        console.log("Directory deleted successfully");});    