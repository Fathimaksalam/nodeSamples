let names = []
let ages = []
let marks = []

function nameAdd(name, mark, age) {
    let nametobeAdded = name.toUpperCase()
    if (age >= 18 && age <= 30) {
        if (mark >= 0 && mark <= 50) {
            
            console.log('Conditions for age and marks are valid. Check if name already exists. ')
            if (names.indexOf(nametobeAdded) !== -1) {
                console.log(`${nametobeAdded} is already existing , Can't be added.`)
            }
            while (names.indexOf(nametobeAdded) == -1) {
                names.push(nametobeAdded)
                ages.push(age)
                marks.push(mark)
                console.log(`${name} is not in the array . ${nametobeAdded} added.`)
                console.log('New name : ', names)
                console.log('New age : ', ages)
                console.log('New marks : ', marks)
                console.log('-------------------------------------------------------------')
            }

        } else { console.log(`Mark is not valid. ${nametobeAdded} cant be added`) }
    } else { console.log(`Mark is not valid. ${nametobeAdded} cant be added`) }
}

nameAdd('Anna', 20, 25)
nameAdd('minnu', 22, 22)
nameAdd('anu', 22, 35)
nameAdd('renju', 22, 22)
nameAdd('Anna', 20, 25)
nameAdd('James', 55, 16)
nameAdd('Alice', 28, 25)

