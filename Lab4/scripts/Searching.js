import {domElements, teachers} from "./Constants.js";
import {createTopCards} from "./generateCards.js";

export function turnOnSearching() {
    let searchValue = ''

    domElements.searchInput.oninput = (event) => {
        searchValue = event.target.value
    }

    domElements.searchTeacherButton.onclick = () => {
        createTopCards(filterSearch(searchValue))
    }
}

function filterSearch(searchValue) {
    const rgx = new RegExp(searchValue, 'i')
    return teachers.filter(teacher => {
        debugger
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
    arrayOfArgs.every(arg => {
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