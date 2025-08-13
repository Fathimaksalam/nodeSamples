const http = require('http')
const url = require('url')

const port = 4000;
const users = [{
    name: 'Rahul',
    age: 20,
    marks: 60
}, {
    name: 'Arun',
    age: 22,
    marks: 80
}]

const server = http.createServer(function (req, res) {

    let url = req.url;
    if (url.includes('getUser')) {

        res.end(JSON.stringify(users))

    } else if (url.includes('insertUser')) {
        let mark = url.split("=")[3]
        let age = url.split("=")[2].split("&")[0]
        let nameToBeInserted = url.split("=")[1].split("&")[0]
        console.log('name = ', nameToBeInserted)
        console.log('age = ', age)
        console.log('mark = ', mark)
        let sample = [{
            name: nameToBeInserted,
            age: age,
            mark: mark
        }]
        let exists = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].name && users[i].name.toLowerCase() === nameToBeInserted.toLowerCase()) {
                exists = true;
                break;
            }
        }
        if (exists) {
            res.end("User already exists");
        } else {
            users.push(sample);
            res.end("User added successfully");
        }
    }else if (url.includes('deleteUser')){
        let url = req.url
        nameToBeDeleted = url.split('=')[1]
        let index=-1
        for(let i=0;i<users.length;i++){
            if(nameToBeDeleted == users[i].name){
                index = i
            }
        }
        if(index == -1){
            res.end('This user is not existing')
        }else{
            users.splice(index,1)
            res.end('Deleted User '+nameToBeDeleted)
        }
    }else if(url.includes('updateUser')){
        // updateUser?name=Vishnu&age=22&mark=20&oldName=Rahul
        let url=req.url
        let oldName = url.split('=')[4]
        let newName = url.split('=')[1].split('&')[0]
        let age = url.split('=')[2].split('&')[0]
        let mark= url.split('=')[3].split('&')[0]
        let index = getNamePosition(oldName)
        users[index].name = newName
        users[index].age = age
        users[index].marks = mark
        res.end('User details updated')

    }
});

function getNamePosition(name){
    let index=-1
        for(let i=0;i<users.length;i++){
            if(name == users[i].name){
                index = i
            }
        }
        return index
}

server.listen(port, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("success")
    }
})




