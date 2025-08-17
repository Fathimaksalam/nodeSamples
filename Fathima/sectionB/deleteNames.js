function removeNames(array,start,end){
   
    let names =(array.splice(start,end))
    console.log('New array after some names removed : ',names)
     
}

removeNames(['ammu','anu','appu','rony'],1,3)
removeNames(['ammu','anu','appu','rony','toby'],1,2)