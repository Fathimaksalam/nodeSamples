let names = ['Joy', 'Santa', 'Revathy', 'Ann', 'Mary', 'Ammu']

function deleteName(name) {
    let slicedIndex = names.indexOf(name)
    console.log('Name to be sliced : ', name)
    console.log('Index = ', slicedIndex)
    if (slicedIndex >= 0) {
        names.splice(slicedIndex, 1)
        console.log('New spliced array = ', names)
    } else {
        console.log(`${name} is not in this array.`)
        console.log(names)
    }
}

deleteName('Ammu')
deleteName('Ann')
deleteName('Ammu')
