import {domElements} from "./Constants.js";
import {createPopup} from "./createFullCardInfo.js";

export function createTopCards(teachers){
    domElements.topCards.innerHTML = generateCards(teachers).join('')
    createPopup()
}
export function generateCards(teachers) {
    const cards = []

    for (let i = 0; i < teachers.length; i++) {

        const teacher = teachers[i]
        const teacherFullName = teacher.fullName.split(" ")
        const tName = teacherFullName[0]
        const tLastName = teacherFullName[1]

        let divClass = "card"
        let cardImg = ``
        let starImg = ``

        let cardContent = ``

        if (teacher.favorite === true) {
            divClass += " star-card"
            starImg +=`<img class="star" src="./Images/favorite.png" alt="star">`
        }

        if (teacher.pictureLarge === null)
            cardImg = `<p class="p-circle">${tName[0]}. ${tLastName[0]}</p>`
        else
            cardImg += `<img src="${teacher.pictureLarge}" alt="teachers photo">`

        cardContent += `
        <div class = "${divClass}" data-key="${teacher.key}">
            <a class="full-card-info" href="#">${cardImg}</a>
             ${starImg}
            <div class="card-info">
                <h3 class="card-name">${tName}</h3>
                <h3 class="card-lastName">${tLastName}</h3>
                <p class="subject">${teacher.course}</p>
                <p class="country">${teacher.country}</p>
            </div>
        </div>`

        cards.push(cardContent)
    }
    return cards
}