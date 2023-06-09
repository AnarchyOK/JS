import {countries, domElements} from "./Constants.js";

export function getCountries() {
    domElements.countries.innerHTML = getOptions()
    domElements.popupCountries.innerHTML = getOptions(true)
}

function getOptions(forPopup = false) {
    let options

    if (forPopup)
        options = ``
    else
        options = `<option value="" class="region-option">All</option>`

    countries.forEach(country => {
        options += `<option value="${country.name}" class="region-option">${country.name}</option>`
    })
    return options
}