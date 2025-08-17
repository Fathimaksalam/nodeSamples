const http = require('http')
const PORT = 3000;

const url = require('url');
const server = http.createServer(function (req, res) {

    if (url == '/favicon.ico') {
        return;
    }
    const queryString = req.url
    let regEx = queryString.match(/\d+/gi)
    //  console.log(regEx)
    const num1 = parseInt(regEx[1])
    const num2 = parseInt(regEx[3])
    const sum = num1 + num2;
    res.end(`Sum of ${num1} and ${num2} is ${sum}`)
});

server.listen(PORT, function (err) {
    if (err) {
        console.log('error came', err)
    } else {
        console.log('success')
    }
});




//ERROR  :  
//  TypeError: Cannot read properties of null (reading '1')
//     at Server.<anonymous> (E:\Mern_Stack\NODE\Aug7\task1.js:13:32)
//     at Server.emit (node:events:518:28)
//     at parserOnIncoming (node:_http_server:1155:12)
//     at HTTPParser.parserOnHeadersComplete (node:_http_common:117:17)

// Node.js v22.17.1
