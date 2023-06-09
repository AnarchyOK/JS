import {unionArray} from "./Union.js";

function filterUsersByTaskParameters(users, country, age, gender, favorite) {
    return users.filter(user => {
        if (country !== null && country && user.country !== country) return false;
        if (age !== null && age !== undefined && user.age !== age) return false;
        if (gender !== null && gender && user.gender !== gender) return false;
        if (favorite !== null && favorite && user.favorite !== favorite) return false;

        return true;
    });
}

function filterUsers(users, filters) {
    return users.filter(user => {
        for (const filter of filters) {
            const [ key, value ] = filter;
            if (!user.hasOwnProperty(key) || user[key] !== value)
                return false;
        }

        return true;
    });
}

const getUsersMeetCreteriaPercantage = (users, filters) =>
    (filterUsers(users, filters).length / users.length) * 100;

let filters = {
    age : 46,
    gender : 'male'
}

console.log(getUsersMeetCreteriaPercantage(unionArray, Object.entries(filters)))


 let filter = {
     country: null,
     age: null,
     gender: null,
     favorite: null
 }

 let filterWithoutNull = {}

 setFilteringData("Germany", null, "female")
 printFilteredObjsArray()

 function setFilteringData(country = null, age = null, gender = null, favorite = null) {
     if (country)
         filter.country = country
     if (age)
         filter.age = age
     if (gender)
         filter.gender = gender
    if (favorite)
         filter.favorite = favorite

     selectNotNullValue()
 }

 function selectNotNullValue() {
     for (let prop in filter) {
         if (filter[prop]) {
             filterWithoutNull[prop] = filter[prop]
         }
     }
 }

 function printFilteredObjsArray() {
     let unionArrayCopy = structuredClone(unionArray)
     let temp = Object.entries(filterWithoutNull)
     if (temp.length) {
         for (let [key, value] of temp) {
             unionArrayCopy = unionArrayCopy.filter(person => person[key] === value)
         }
     }
     console.log(unionArrayCopy)
 }
