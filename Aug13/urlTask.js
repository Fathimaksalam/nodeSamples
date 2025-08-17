//Write an API to read content of file, where file name is passed as query parameter

const fs = require('fs').promises;
const http = require('http');
const PORT = 7000;
const ENCODING = 'utf8'

const server = http.createServer(function (req, res) {
    let url = req.url;
    if (url.includes('writeFile')) {
        let content = url.split('=')[2]
        let filename = url.split('=')[1].split('&')[0]
        content=content.replaceAll('%20',' ')
        fs.appendFile(filename,content).then(() => {
            res.end(`file written success to ${filename} with content : ${content}`)
        }).catch(err => {
            console.log('could not write ', err)
        }).finally(() => {
            console.log('Finally');
        })
    }else if (url.includes('appendFile')) {
        let content = url.split('=')[2]
        let filename = url.split('=')[1].split('&')[0]
        content=content.replaceAll('%20',' ')
        fs.appendFile(filename,content).then(() => {
            res.end(`file appended success to ${filename} with content : ${content}`)
        }).catch(err => {
            console.log('could not write ', err)
        }).finally(() => {
            console.log('Finally');
        })
    } else if (url.includes('readFile')) {
        fs.readFile(url.split('=')[1], ENCODING).then(data => {
            console.log('File read success : ', data)
            res.end('File read success : '+data)
        }).catch(err => {
            console.log('could not write ', err)
        }).finally(() => {
            console.log('Finally');
        })
    }else if(url.includes('renameFile')){
        // /renameFile?newFile=urlFileWrite.txt&oldFile=urlFileWrite.txt
        let oldfile = url.split('=')[2]
        let newFile = url.split('=')[1].split('&')[0]
        fs.rename(oldfile,newFile).then(() => {
            res.end(`file name changed from ${oldfile} to ${newFile}`)
        }).catch(err => {
            console.log('could not write ', err)
        }).finally(() => {
            console.log('Finally');
        })
    }
    else {
        res.end('No such API')
    }
})


server.listen(PORT, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("success")
    }
})


//Write an API to write some data into a file

// const server = http.createServer(function (req, res) {
//     let url = req.url;
//     if (url.includes('writeFile')) {
//         let content = url.split('=')[2]
//         let filename = url.split('=')[1].split('&')[0]
//         content=content.replaceAll('%20',' ')
//         fs.writeFile(filename,content).then(() => {
//             console.log('File written success : ', filename)
//             res.end('File written success '+content)
//         }).catch(err => {
//             console.log('could not write ', err)
//         }).finally(() => {
//             console.log('Finally');
//         })
//     } else {
//         res.end('No such API')
//     }
// })


// server.listen(PORT, function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("success")
//     }
// })