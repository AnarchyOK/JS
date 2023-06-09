import {domElements} from "./Constants.js";
import {removeFromPagePiecharts} from "./managePiecharts.js";
import {getTeachersForPopup} from "./fullCardPopup.js";

export function displayCards(teachers) {
    if (teachers.length === 0) {
        domElements.topCards.innerHTML = `<h1>Teachers not found</h1>`
        domElements.favoriteTeachers.innerHTML = `<h1>There aren't favorite teachers</h1>`
        domElements.statisticTableBody.innerHTML = `<td colspan="5" style="text-align: center; font-size: 24px;">There isn't any data to upload to the table</td>`
        removeFromPagePiecharts()
    } else {
        if (numberFavoriteTeachers(teachers) === undefined) {
            domElements.favoriteTeachers.innerHTML = `<h1>There aren't favorite teachers</h1>`
            displayTopCards(teachers)
        }
        else {
            displayFavoriteCards(teachers)
            displayTopCards(teachers)
        }
    }
    getTeachersForPopup(teachers)
}

function numberFavoriteTeachers(teachers) {
    return _.find(teachers, teacher => teacher.favorite)
}

function displayTopCards(teachers) {
    domElements.topCards.innerHTML = generateCards(teachers).join('')
}
function displayFavoriteCards(teachers) {
    domElements.favoriteTeachers.innerHTML = generateCards(teachers.filter(teacher => teacher.favorite)).join('')
}

export function generateCards(teachers) {
    const cards = []

    for (let i = 0; i < teachers.length; i++) {
        const card = getCard(teachers[i])
        cards.push(card)
    }
    return cards
}

export function getCard(teacher) {
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
        <div class = "${divClass}" data-key="${teacher.id-1}">
            <a class="full-card-info" href="#">${cardImg}</a>
             ${starImg}
            <div class="card-info">
                <h3 class="card-name">${tName}</h3>
                <h3 class="card-lastName">${tLastName}</h3>
                <p class="subject">${teacher.speciality}</p>
                <p class="country">${teacher.country}</p>
            </div>
        </div>`
    return cardContent
}