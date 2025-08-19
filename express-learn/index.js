const express= require('express')
const app = express();

app.get("/sample",function(req,res){
    res.send("Hello World")
})

app.get("/square",function(req,res){
    let num = parseInt(req.query.num);
    let sq = num*num
    res.send('Square = '+sq)
})
app.get("/sum",function(req,res){
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let Sum = num1+num2
    res.send('Sum = '+Sum)
})
app.get("/concat",function(req,res){
    let name1 = req.query.name1;
    let name2 = req.query.name2;
    let Concat = name1+name2;
    res.send('Concat = '+Concat)
})

app.listen(3000)