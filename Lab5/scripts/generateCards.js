import {domElements} from "./Constants.js";
import {displayFavoriteCards} from "./displayFavoriteCards.js";
import {setSortTable} from "./Sorting.js";
import {setTeachersOnPopup} from "./fullCardPopup.js";

export function displayCards(teachers) {
    displayTopCards(teachers)
    displayFavoriteCards(teachers)
    setTeachersOnPopup(teachers)
    setSortTable(teachers)
}

export function displayTopCards(teachers) {
    if (teachers.length === 0)
        domElements.topCards.innerHTML = `<h1>Teachers not found</h1>`
    else
        domElements.topCards.innerHTML = generateCards(teachers).join('')
}

export function generateCards(teachers) {
    const cards = []

    for (let i = 0; i < teachers.length; i++) {
        const card = getCard(teachers[i])
        cards.push(card)
    }
    return cards
}

export function getCard(teacher){
    const teacherFullName = teacher.fullName.split(" ")
    const tName = teacherFullName[0]
    const tLastName = teacherFullName[1]

    let divClass = "card"
    let cardImg = ``
    let starImg = ``

    let cardContent = ``

    if (teacher.favorite === true) {
        divClass += " star-card"
        starImg += `<img class="star" src="./Images/favorite.png" alt="star">`
    }

    if (!teacher.pictureLarge)
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
    return cardContent
}