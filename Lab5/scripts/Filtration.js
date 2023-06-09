import {domElements} from "./Constants.js";
import {displayCards} from "./generateCards.js";
import {uploadDataToStatisticTable} from "./fillTable.js";
import {getRandomUsers} from "./getRandomUsers.js";
import {changeTeacherKey} from "./updateTeacher.js";

export function setHandlerOnFilters() {
    const filtersType = ['age', 'country', 'sex', 'pictureLarge', 'favorite']
    filtersType.forEach(type => handleChangeFilter(type))
}

function handleChangeFilter(type) {
    domElements.filters[type].onchange = event => {
        getRandomUsers(50).then(teachers => {
            filterCards(event, teachers, type)
        })
    }
}

function filterCards(event, teachers, type) {
    const value = event.target.value
    let filteredCards
    if (type === 'age') {
        filteredCards = filterCardsByAge(value, teachers)
    } else if (type === 'country') {
        filteredCards = filterCardsByCountry(value, teachers)
    } else if (type === 'sex') {
        filteredCards = filterCardsBySex(value, teachers)
    } else if (type === 'pictureLarge') {
        filteredCards = filterCardsByExistPhoto(event.target, teachers)
    } else {
        filteredCards = filterCardsByFavorite(event.target, teachers)
    }
    filteredCards = changeTeacherKey(filteredCards)
    displayCards(filteredCards)
    uploadDataToStatisticTable(filteredCards)
}

function filterCardsByCountry(value, teachers) {
    if (value !== '')
        return teachers.filter(teacher => teacher.country === value)
    else
        return teachers
}

function filterCardsByAge(value, teachers) {
    if (value !== '') {
        const ages = value.split('-')
        const minAge = Number(ages[0])
        const maxAge = Number(ages[1])
        return teachers.filter(teacher => {
            return teacher.age >= minAge && teacher.age < maxAge
        })
    } else return teachers
}

function filterCardsBySex(value, teachers) {
    if (value !== '') {
        return teachers.filter(teacher => {
            return teacher.gender === value
        })
    } else return teachers
}

function filterCardsByExistPhoto(checkbox, teachers) {
    if (checkbox.checked) return teachers.filter(teacher => {
        return teacher.pictureLarge !== null
    })
    else return teachers
}

function filterCardsByFavorite(checkbox, teachers) {
    if (checkbox.checked) return teachers.filter(teacher => {
        return teacher.favorite
    })
    else return teachers
}