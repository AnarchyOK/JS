import {unionArray} from "./Union.js";


 let result = findPersonByParamAndValue('age', 24)
 console.log(result)
 function findPersonByParamAndValue(param, value){
     if(param === 'name')
         return findPersonByName(value)
     else if(param === 'note')
         return findPersonByNote(value)
     else if(param === 'age')
         return findPersonByAge(value)
 }
 function findPersonByName(name){
     return unionArray.find(person => {
         return person.full_name.includes(name)
     })
 }

 function findPersonByNote(note){
     return unionArray.find(person => {
         return person.note === note
     })
 }

 function findPersonByAge(age){
     return unionArray.find(person => {
         return person.age === age
     })
 }
function findUser(users, name, note, age) {
    return users.find((user) => {
        const { fullName, note: userNote, age: userAge } = user;
        const fullNameMatch =
            !name ||  fullName.toLowerCase().includes(name.toLowerCase());
        const noteMatch =
            !note || userNote.toLowerCase().includes(note.toLowerCase());
        const ageMatch = !age || userAge === age;
        return fullNameMatch && noteMatch && ageMatch;
    });
}