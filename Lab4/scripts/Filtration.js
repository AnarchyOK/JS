import {domElements, teachers} from "./Constants.js";
import {createTopCards} from "./generateCards.js";

export function setHandleOnFilters() {
    domElements.countryInput.oninput = (event) => {
        let optionFound = false

        for (let j = 0; j < document.getElementById('country-list').options.length; j++) {
            if (event.target.value === document.getElementById('country-list').options[j].value) {
                optionFound = true;
                break;
            }
        }

        if (optionFound && event.target.value !== 'All') {
            event.target.style.border = "none"
            let filteredCards = filterCardsByCountry(event.target.value)
            createTopCards(filteredCards)
        } else if (event.target.value === 'All') {
            event.target.style.border = "none"
            createTopCards(teachers)
        } else if (event.target.value === '') {
            event.target.style.border = "none"
            createTopCards(teachers)
        } else {
            event.target.style.border = "3px solid red"
        }
    };
    const filtersType = ['age', 'sex', 'pictureLarge', 'favorite']
    filtersType.forEach(type => handleChangeFilter(type))
}

function filterCardsByCountry(value) {
    return teachers.filter(teacher => teacher.country === value)
}

function handleChangeFilter(type) {
    domElements.filters[type].onchange = event => {
        const value = event.target.value
        let filteredCards
        if (type === 'age') {
            filteredCards = filterCardsByAge(value)
        } else if (type === 'sex') {
            filteredCards = filterCardsBySex(value)
        } else if (type === 'pictureLarge') {
            filteredCards = filterCardsByExistPhoto(event.target)
        } else {
            filteredCards = filterCardsByFavorite(event.target)
        }
        createTopCards(filteredCards)
    }
}

function filterCardsByAge(value) {
    if (value !== '') {
        const ages = value.split('-')
        const minAge = Number(ages[0])
        const maxAge = Number(ages[1])
        return teachers.filter(teacher => {
            return teacher.age >= minAge && teacher.age < maxAge
        })
    } else return teachers
}

function filterCardsBySex(value) {
    if (value !== '') {
        return teachers.filter(teacher => {
            return teacher.gender === value
        })
    } else return teachers
}

function filterCardsByExistPhoto(checkbox) {
    if (checkbox.checked) return teachers.filter(teacher => {
        return teacher.pictureLarge !== null
    })
    else return teachers
}

function filterCardsByFavorite(checkbox) {
    if (checkbox.checked) return teachers.filter(teacher => {
        return teacher.favorite
    })
    else return teachers
}