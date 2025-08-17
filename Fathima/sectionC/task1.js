

function ageCriteria(age) {

    if (age >= 18 && age <= 30) {
            console.log('Age is validated')
            return true
        }else{
            console.log('Age is not validated')
            return false
        }

}

function markCriteria(mark) {

        if (mark >= 0 && mark <= 50) {
            console.log('Mark is validated')
            return true
        }else{
            console.log('Mark is not validated')
            return false
        }
    
}

function average(markArray){
let sum =0
let average 
    for(i=0;i<markArray.length;i++){
        sum= sum+ markArray[i]
        
    }
    console.log('Sum = ',sum)
    average = sum/markArray.length
    return average

}


function details(nameArray, ageArray, markArray, name, age, mark) {
   let names=[]
   for(i=0;i<nameArray.length;i++){
                names.push(nameArray[i].toUpperCase())
            }
    if (ageCriteria(age)) {
        if (markCriteria(mark)) {
            
            
            newName = name.toUpperCase()
            if (!(names.includes(newName))) {
                console.log(`${newName} and details are added to database`)
                names.push(newName)
                ageArray.push(age)
                markArray.push(mark)
            }
            else{
                console.log(`${newName} already in database, so details can't be added `)
            }
        }
    }
    
     console.log('names = ', names)
    console.log('ages = ', ageArray)
    console.log('marks = ', markArray)
    console.log('Average = ', average(markArray))
    console.log('----------------------------------------------')
    // console.log('studentsArray = ', studentsArray)

}

details(['Ammu','ponnu'],[18,20],[30,40],'chinnu',20,30)
details(['Ammu','ponnu'],[18,20],[30,40],'ammu',20,30)
details(['Ammu','ponnu'],[18,20],[30,40],'roy',2,30)
details(['Ammu','ponnu'],[18,20],[30,40],'kiran',20,880)


