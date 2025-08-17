const os = require('os');

// // Basic system information
// console.log(`OS Platform: ${os.platform()}`);
// console.log(`OS Type: ${os.type()}`);
// console.log(`OS Release: ${os.release()}`);
// console.log(`CPU Architecture: ${os.arch()}`);
// console.log(`Hostname: ${os.hostname()}`);

// // Memory information
// const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
// const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
// console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`);

// // User information
// const userInfo = os.userInfo();
// console.log(`Current User: ${userInfo.username}`);
// console.log(`Home Directory: ${os.homedir()}`);


const fs = require('fs');
console.log('Started')
// fs.readFile('fathima.txt','utf8',function(err,result){
//     if(err){
//         console.log('There is some error',err)
//     }else(
//         console.log('File read done :',result)
//     )
// })
fs.writeFile('fathima.txt','welcome to NodeJS',function(err){
    if(err){
        console.log('Error')
    }
})

fs.appendFile('fathima.txt','\nappending new text without deleting old one',function(err){
    if(err){
        console.log('Error')
    }
})

console.log('End')


