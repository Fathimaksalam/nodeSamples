console.log('started user management')
const http=require('http');
const url=require('url');
const port=4500;
const names=[]

const server=http.createServer(function(req,res){
    
    const strUrl=req.url; 
    if(strUrl.includes('insert')){
        let name=strUrl.split("=")[1];
        if(names.includes(name)){
            res.end("name already exist");
        }
        else{
            names.push(name)
            res.end("Inserted  " + name)
        }
    }else if(strUrl.includes('getAllNames')){
        res.end(names.toString())


    }else if(strUrl.includes('deleteName')){
        let name=strUrl.split("=")[1];
        let index=names.indexOf(name);
        if(index == -1){
            res.end("name doesn't exist " + name)
        } else{
            names.splice(index,1)
            res.end("Deleted  " + name)
        }
    }else if(strUrl.includes('updateName')){
        
        let newNname= strUrl.split('=')[2]
        let oldName = strUrl.split('=')[1].split('&')[0]
        let index= names.indexOf(oldName)
        // console.log('index = ', index)
        if(names.includes(oldName)){

            // res.end("name already exist");
            names[index]= newNname
            res.end('Updated names : '+ names)

        }

        else{
            // names.push(name)
            res.end("Not updated " )
        }

    }
    
})
server.listen(port,function(err){
    if(err){
        console.log(err)
    }else{
        console.log("success")
    }
})