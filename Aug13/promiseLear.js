const { readFile } = require('fs');

const fs = require('fs').promises;

//ReadFile
// fs.readFile('readFile.txt','utf8').then(data =>{
//     console.log('data : ',data)
// }).catch(err =>{
//     console.log('error = ',err)
// }).finally(()=>{
//     console.log('Finally');
// })

//WriteFile

// fs.writeFile('writetoFile.txt','Contents are written to this file').then(data =>{
//     console.log('File written success ')
// }).catch(err =>{
//     console.log('could not write ',err)
// }).finally(()=>{
//     console.log('Finally');
// })

//append file

// fs.appendFile('writetoFile.txt','\n File appended').then(data =>{
//     console.log('File append success ')
// }).catch(err =>{
//     console.log('could not append ',err)
// }).finally(()=>{
//     console.log('Finally');
// })

//Rename file

// fs.rename('oldfile.txt', 'newfile.txt').then(() => {
//     console.log('File renamed successfully')
// }).catch(err =>{
//     console.error(' Error:', err)
// } ).finally(()=>{
//     console.log('Finally');
// })

//delete file

// fs.unlink('fileToDelete.txt')
//   .then(() => console.log(' File deleted successfully'))
//   .catch(err => console.error(' Error:', err));


// read a filename inside a txt file and read the contents

// fs.readFile('reg.txt','utf8').then(data =>{
//     fs.readFile(data,'utf8').then(data2 =>{
//         console.log('data : ',data2)
//     })

// }).catch(err =>{
//     console.log('error = ',err)
// }).finally(()=>{
//     console.log('Finally');
// })

//create 2 files part1 and part2 where the thirds files name is stored partial in each file.

const PART1 = "part1.txt"
const PART2 = "part2.txt"
const ENCODING = "utf8"

// fs.readFile(PART1,ENCODING).then(data =>{
//     fs.readFile(PART2,ENCODING).then(data2 =>{
//         fs.readFile(data+data2 ,ENCODING).then(result =>{
//             console.log('File read success and content is : ',result)
//         })
//     })
// })


