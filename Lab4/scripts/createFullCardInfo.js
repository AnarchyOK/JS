import {domElements, teachers} from "./Constants.js";
import {generateFavoriteCards} from "./generateCardsFavoriteTeachers.js";
import {createTopCards} from "./generateCards.js";

export function createPopup() {
    document.querySelectorAll('.full-card-info').forEach(a => handleClickOpenTeacherCard(a))
}

function handleClickOpenTeacherCard(a) {
    a.onclick = event => {
        const divCard = event.target.offsetParent
        const index = divCard.getAttribute('data-key')
        domElements.teacherFullCard.innerHTML = getPopup(index)
        domElements.teacherFullCard.style.display = 'block'
        setHandleEventClose()
        setHandleEventClickOnStar(index, divCard)
        setMutationObserver(divCard)
    }
}

function setMutationObserver(divCard) {
    const config = {
        attributeFilter: ['class']
    }
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.target.classList.contains('star-card')) {
                const starImg = document.createElement('img')
                starImg.src = './Images/favorite.png'
                starImg.classList.add('star')
                starImg.alt = 'star'
                mutation.target.children[0].after(starImg)
            } else {
                if (mutation.target.children.length > 2)
                    mutation.target.children[1].remove()
            }
        }
    }

    const observer = new MutationObserver(callback);

    observer.observe(divCard, config);
}

function setHandleEventClose() {
    document.querySelectorAll('.close').forEach(a => handleClickCloseTeacherCard(a))
    window.onclick = function (event) {
        if (event.target.className === "teacher-info-popup") {
            event.target.style.display = "none";
        }
    }
}

function handleClickCloseTeacherCard(a) {
    a.onclick = () => domElements.teacherFullCard.style.display = 'none'
}

function setHandleEventClickOnStar(index, divCard) {
    document.querySelectorAll('.teacher-card-star').forEach(img => handleClickOnStarTeacherCard(img, index, divCard))
}

function handleClickOnStarTeacherCard(img, index, divCard) {
    img.onclick = event => {
        if (event.target.classList.contains('not-favorite-star')) {
            event.target.classList.replace('not-favorite-star', 'favorite-star')
            event.target.src = './Images/favorite.png'
            teachers[index].favorite = true
            generateFavoriteCards(teachers.filter(teacher => teacher.favorite))
            divCard.classList.add('star-card')
            createTopCards(teachers)
        } else {
            event.target.classList.replace('favorite-star', 'not-favorite-star')
            event.target.src = './Images/not_favorite.png'
            teachers[index].favorite = false
            generateFavoriteCards(teachers.filter(teacher => teacher.favorite))
            divCard.classList.remove('star-card')
            createTopCards(teachers)
        }
    }
}

function getPopup(index) {
    const teacher = teachers[index]
    const gender = teacher.gender
    const favorite = teacher.favorite

    let content = ``
    let email = ``
    let phone = ``
    let img = ''
    if (teacher.pictureLarge === null) {
        if (gender === 'male')
            img = './Images/man.jpg'
        else
            img = './Images/woman.jpg'
    } else
        img = teacher.pictureLarge

    if (teacher.email)
        email += `<a id="a-email" class="email" href="mailto:${teacher.email}">${teacher.email}</a>`
    else
        email += `<a id="a-email" class="email">no email address</a>`

    if (teacher.phone)
        phone += `<a id="a-phone" class="phone" href="tel:${teacher.phone}">${teacher.phone}</a>`
    else
        phone += `<a id="a-phone" class="phone">no mobile phone</a>`


    content += `<div class="teacher-info">
        <div class="info-header">
            <h3>Teacher Info</h3>
            <a class="close" href="#">&times;</a>
        </div>
        <div class="teacher-card-info">
            <div class="teacher-full-card">
                <img id="info-card-photo" class="photo" src="${img}" alt="${teacher.fullName}">
                <img id="info-card-star" class="star teacher-card-star ${favorite ? 'favorite-star' : 'not-favorite-star'}" src="${favorite ? "./Images/favorite.png" : "./Images/not_favorite.png"}" alt="star">
                <div class="card-info">
                    <h3 id="info-card-title">${teacher.fullName}</h3>
                    <p id="p-subject" class="subject">${teacher.course}</p>
                    <p id="p-address">${teacher?.city}, ${teacher?.country}</p>
                    <p id="p-per-data">${teacher.age}, ${gender}</p>
                    ${email}
                    ${phone}
                </div>
            </div>
            <p id="p-comment">${teacher.note}</p>
            <a id="a-map" class="map" target="_blank">toggle map</a>
        </div>
    </div>`

    return content
}