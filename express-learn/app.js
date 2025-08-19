const express= require('express')
const app = express();
app.use(express.json());

let names=["Sona","Mehrin"]

app.get("/getAllNames",function(req,res){
    // res.json("Names are : "+names)
    res.json(names);
})

app.post("/insertName",function(req,res){
    let name=req.query.name;
    if(!name){
        return res.send('Enter Valid name which is not already existing');
    }
    let index= names.indexOf(name)
    if(index== -1){
        names.push(name);
        res.send("Insert success "+name)
    } else{
        res.send("Name already existing")
    }
})

app.delete("/deleteName",function(req,res){
    let name=req.query.name;
    let index= names.indexOf(name)
    if(index== -1){
        res.send("Name not existing")
    } else{
        names.splice(index,1)
        res.send("Deleted success "+name)
    }
})

app.post("/updateName",function(req,res){
    let oldName=req.query.oldName;
    let newName=req.query.newName;
    let index= names.indexOf(oldName)
    if(index== -1){
        res.send("Name already existing")
    } else{
        names[index]=newName
        res.send("Updated success " +newName)
    }
})

app.post("/insertNameBody",function(req,res){
    let name=req.body.name;
    // let index= names.indexOf(oldName)
    let index= names.indexOf(name)
    if(index== -1){
        names.push(name);
        res.send("Insert success "+name)
    } else{
        res.send("Name already existing")
    }
})

app.put("/updateNameBody",function(req,res){
    let oldName=req.body.oldName;
    let newName=req.body.newName;
    let index= names.indexOf(oldName)
    if(index== -1){
        res.send("Name already existing")
    } else{
        names[index]=newName
        res.send("Updated success " +newName)
    }
})

app.delete("/deleteNameBody",function(req,res){
    let name=req.body.name;
    let index= names.indexOf(name)
    if(index== -1){
        res.send("Name not existing")
    } else{
        names.splice(index,1)
        res.send("Deleted success "+name)
    }
})

app.delete("/deleteAll",function(req,res){
        lastIndex = names.length
        names.splice(0,lastIndex)
        res.send("Deleted success ")
    
})

app.get("/checkIfNameIsPresent",function(req,res){
    let name=req.body.name;
    // if(!name){
    //     return res.send('Enter Valid name which is not already existing');
    // }
    let index= names.indexOf(name)
    if(index== -1){
        // names.push(name);
        res.send("false")
    } else{
        res.send("true")
    }
})
app.listen(3000)