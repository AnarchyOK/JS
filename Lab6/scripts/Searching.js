import {domElements} from "./Constants.js";
import {displayCards} from "./generateCards.js";
import {uploadDataToStatisticTable} from "./fillTable.js";
import {getTeachers} from "./getTeachers.js";

export function turnOnSearching() {
    let searchValue = ''

    domElements.searchInput.oninput = (event) => {
        searchValue = event.target.value
    }

    domElements.searchTeacherButton.onclick = (event) => {
        getTeachers().then(teachers => {
            doSearch(event, teachers, searchValue)
        })
    }
}

function doSearch(event, teachers, searchValue) {
    event.preventDefault()
    const filteredCards = filterSearch(searchValue, teachers)
    uploadDataToStatisticTable(filteredCards)
    displayCards(filteredCards)
}

function filterSearch(searchValue, teachers) {
    const rgx = new RegExp(searchValue, 'i')
    return _.filter(teachers, teacher => {
        if (hasOnlyPositiveDigits(searchValue)) {
            return checkCardsByAge(searchValue, teacher)
        } else {
            return checkCardsByString(rgx, teacher, ['fullName', 'note'])
        }
    })
}

function hasOnlyPositiveDigits(value) {
    return /^\d+$/.test(value);
}

function checkCardsByString(rgx, teacher, arrayOfArgs) {
    let state = false
    _.every(arrayOfArgs, arg => {
        if (rgx.test(teacher[arg])) {
            state = true
            return false
        }
        return true
    })
    return state
}

function checkCardsByAge(searchValue, teacher) {
    return searchValue === teacher.age.toString()
}