import {unionArray} from "./Union.js";

let searchFunction = (person) => person.age > 70

let foundPersons = unionArray.filter(searchFunction)

percentOfPersonsFound(foundPersons.length)
function percentOfPersonsFound (amount){
    let percent = Math.round( amount * 100 / unionArray.length)
     console.log(`100% - ${unionArray.length}\n${percent}% - ${foundPersons.length}`)
}

 console.log()

searchFunction = (person) => person.favorite === true

foundPersons = unionArray.filter(searchFunction)

percentOfPersonsFound(foundPersons.length)