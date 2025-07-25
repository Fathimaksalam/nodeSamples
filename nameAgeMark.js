let names = ['Joy', 'Mary', 'Ammu']
let ages = [20, 23, 21]
let marks = [30, 35, 40]

// Check if newname is already in the array, if not add it to the array
function addName(names, newname) {
    if (names.indexOf(newname) == -1) {
        console.log(`${newname} is not in the array.`)
        names.push(newname)
        // console.log('New Array is : ', names)
        return true
    } else {
        console.log(`${newname} is already in the array.`)
        return false
    }
}

// addName(names,'Mary')
// addName(names,'Ann')
// addName(names,'Appu')
// addName(names,'Ammu')

//Function to delete last name
function deleteLastName() {
    names.pop()
    console.log(names)
}
// deleteLastName()
// addName(names,'Achu')

//function to splice a name
function deleteName(name) {
    let slicedIndex = names.indexOf(name)
    console.log('Name to be sliced : ', name)
    console.log('Index = ', slicedIndex)
    if (slicedIndex >= 0) {
        names.splice(slicedIndex, 1)
        console.log('New spliced array = ', names)
        return true
    } else {
        console.log(`${name} is not in this array.`)
        console.log(names)
        return false
    }
}


function allowNewEntry(age, mark) {
    if ((age >= 18 && age <= 30) && (mark >= 0 && mark <= 50)) {
        console.log('Entry conditions are met. Check if Student name already exists.')
        return true
    } else {
        console.log("can't add new entry")
        return false
    }
}

// deleteName('Ammu')
// deleteName('Ann')
// deleteName('Ammu')

function addNameAgeMark(name, age, mark) {
    if (allowNewEntry(age, mark)) {
        if (addName(names, name)) {
            // names.push(name)
            ages.push(age)
            marks.push(mark)
            console.log('Final names array = ', names)
            console.log('Final ages array = ', ages)
            console.log('Final marks array = ', marks)
            average(marks)
            console.log('--------------------------------------------------------------------')
        }
    }

}

addNameAgeMark('Arathy', 20, 40)
addNameAgeMark('Mary', 20, 40)


// to find average marks
function average(marks) {
    let totalMarks = 0
    let numberOfMarks = marks.length
    console.log('numberOfMarks', numberOfMarks)
    for (let i = 0; i < marks.length; i++) {
        totalMarks = totalMarks + marks[i]

    }
    let average = totalMarks / marks.length
    console.log('total marks = ', totalMarks)
    console.log('Average is : ', average)
}

