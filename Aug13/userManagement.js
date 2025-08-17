const fs = require('fs').promises;
const http = require('http');
const PORT = 7500;
const ENCODING = 'utf8'

const server = http.createServer(function (req, res) {
    let url = req.url;
    if (url.includes('getAllUsers')) {
        fs.readFile('users.json', ENCODING).then(users => {
            res.end(users)
        }).catch(err => {
            console.log('could not read users.json ', err)
        })
    } else if (url.includes('insertUser')) {

        
        // insertUser?name=Ammu&place=Kochi&age=20&id=6
        let name = url.split('=')[1].split('&')[0]
        let place = url.split('=')[2].split('&')[0]
        let age = parseInt(url.split('=')[3].split('&')[0])
        let id = parseInt(url.split('=')[4])

        fs.readFile('users.json', "utf8").then(data => {
        let users = JSON.parse(data)
        let exists = false

        for (let i = 0; i < users.length; i++) {
          if (users[i].id === id || users[i].name.toLowerCase() === name.toLowerCase()) {
            exists = true
            break
          }
        }
         let list = {
            id: id,
            name: name,
            place: place,
            age: age
        }
        if (exists) {
          res.end("User already exists!");
        } else {
        //   users.push({ id, name, place, age });
        users.push(list)
          fs.writeFile('users.json', JSON.stringify(users))
            .then(() => res.end("User added successfully!"))
            .catch(() => res.end("Error writing file"))
        }
      })
      .catch(() => res.end("Error reading file"))
  
    }else if(url.includes('deleteUser')){
        name = url.split('=')[1]

        fs.readFile('users.json', 'utf8').then(data => {
        let users = JSON.parse(data)
        let newUsers = []
        let found = false

        for (let i = 0; i < users.length; i++) {
          if (users[i].name.toLowerCase() !== name.toLowerCase()) {
            newUsers.push(users[i]);
          } else {
            found = true;
          }
        }
        

        if (!found) {
          res.end("User not found!")
        } else {
          fs.writeFile('users.json', JSON.stringify(newUsers))
            .then(() => res.end("User deleted successfully!"))
            .catch(() => res.end("Error writing file"))
        }
      })
      .catch(() => res.end("Error reading file"))


    } else {
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

