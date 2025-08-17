//import fs module

const { log } = require('console')
const fs = require('fs')

//read file

fs.readFile('fathima.txt','utf8',function(err,result){
    if(err){
        console.log('File not read ',err)
    }else{
        console.log('File read success, contents are : \n',result);
        
    }
})

//write file

// fs.writeFile('samplefile.txt','This file is created as a sample to learn core module (fs) write file ',function(err){
//     if(err){
//         console.log('File not written ',err)
//     }else{
//         console.log('File write success ');
        
//     }
// })

//delet file

// fs.unlink('delete.txt',function(err){
//     if(err){
//         console.log('File not deleted ',err)
//     }else{
//         console.log('File deleted');
        
//     }
// })

//create folder

// fs.mkdir('createdFolder',function(err){
//     if(err){
//         console.log('Folder not created ',err)
//     }else{
//         console.log('Folder created');
        
//     }
// })

//append data

fs.appendFile('fathima.txt','\nAppended new data on august 9th as a part of learning fs module',function(err){
    if(err){
        console.log('Contents not added ',err)
    }else{
        console.log('File appended successfully');
        
    }
})