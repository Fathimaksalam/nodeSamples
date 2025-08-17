let names=['Joy','Mary','Ammu']

function addName(names,newname){
    
    if(names.indexOf(newname) == -1){
        console.log(`${newname} is not in the array.`)
        names.push(newname)
        console.log('New Array is : ',names)
    }else {
        console.log(`${newname} is already in the array.`)
    }
}

addName(names,'Mary')
addName(names,'Ann')
addName(names,'Appu')
addName(names,'Ammu')