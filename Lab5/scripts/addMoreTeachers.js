import {domElements} from "./Constants.js";
import {getRandomUsers} from "./getRandomUsers.js";
import {displayCards} from "./generateCards.js";
import {uploadDataToStatisticTable} from "./fillTable.js";

export function setHandlerOnMoreTeachersButton() {
    domElements.addMoreTeacherButton.addEventListener('click', () => {
        const amountCards = domElements.topCards.childElementCount
        const numberRequiredCards = amountCards + 10
        getRandomUsers(numberRequiredCards).then(teachers => {
            displayCards(teachers)
            uploadDataToStatisticTable(teachers)
        })
    })
}