const fs=require('fs');

fs.readFile('b.txt','utf-8',(err,data)=>{
if(err) throw err;
const cleanData=data.replace(/\s+/g,' ');

    fs.writeFile('b.txt',cleanData,(err)=>{
        if(err) throw err;
        console.log('file has been updated');
    })

})
