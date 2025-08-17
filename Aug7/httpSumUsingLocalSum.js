const http = require('http')
const PORT=3000
const sumofTwo = require('./sum')

// let sum = sumofTwo.sumofTwoNumbers(50,30);
const url = require('url')

const server= http.createServer(function(req,res){
     if(url == '/favicon.ico') {
           return;
        }
    const query = req.url
     let query1 = query.split('?')[1];
     let query2 = query1.split('&');
     let num1 = parseInt(query2[0].split('=')[1])
     let num2 = parseInt(query2[1].split('=')[1])
     let sum = sumofTwo.sumofTwoNumbers(num1,num2)
    res.end('sum = ' + sum)
});

 server.listen(PORT,function(err){
   if(err){
    console.log('error came',err)
   }else{
    console.log('success')
   }
});
