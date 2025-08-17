// function sumOfTwo(a,b){
//     return a+b
// }

// console.log(sumOfTwo(4,5))

const fs = require('fs');

let locationFileName = 'locator.txt'
let encoding = 'utf8'

fs.readFile(locationFileName, encoding, function (error1, fileContent) {
    if (error1) {
        console.log('File is not read', error1)
    } else {
        console.log('Successfully read first file', fileContent)
        fs.readFile(fileContent, encoding, function (error2, mainContent) {
            if (error2) {
                console.log('Second file is not read', error2)
            } else {
                console.log('Successfully read second file \n', mainContent)

            }
        })
    }
})