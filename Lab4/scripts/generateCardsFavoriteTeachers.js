import {domElements} from "./Constants.js";
import {generateCards} from "./generateCards.js";
import {createPopup} from "./createFullCardInfo.js";

export function generateFavoriteCards(teachers) {
    domElements.favoriteTeachers.innerHTML = generateCards(teachers.filter(teacher => teacher.favorite)).join('')
    createPopup()
}