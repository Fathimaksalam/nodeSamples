const express= require('express')
const app = express();
app.use(express.json());

let names=["Sona","Mehrin"]

app.get("/getAllNames",function(req,res){
    // res.json("Names are : "+names)
    res.json(names);
})