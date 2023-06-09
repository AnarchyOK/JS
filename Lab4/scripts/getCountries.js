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
        options = `<option value="All" class="region-option"></option>`

    countries.forEach(country => {
        options += `<option value="${country.name}" class="region-option"></option>`
    })
    return options
}