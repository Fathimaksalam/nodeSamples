const http = require('http')
const PORT = 3000
const primeNum = require('./prime')

// let sum = sumofTwo.sumofTwoNumbers(50,30);
const url = require('url')

const server = http.createServer(function (req, res) {
    if (url == '/favicon.ico') {
        return;
    }
    const query = req.url
    const num = query.split('=')
    let num1= parseInt(num[1]) 
        // console.log(`${num1}`);

    let prime = primeNum.isPrime(num1)
    if (prime) {
        // console.log(`${num1} is prime`);
        res.end(`${num1} is prime`)
    } else {
        console.log(`number is not a prime`);
        res.end(`${num1} is not prime`)

    }
    
});

server.listen(PORT, function (err) {
    if (err) {
        console.log('error came', err)
    } else {
        console.log('success')
    }
});
