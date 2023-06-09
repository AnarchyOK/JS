import {domElements} from "./Constants.js";
import {generateCards} from "./generateCards.js";

export function displayFavoriteCards(teachers) {
    domElements.favoriteTeachers.innerHTML = generateCards(teachers.filter(teacher => teacher.favorite)).join('')
}