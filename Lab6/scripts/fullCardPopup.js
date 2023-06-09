import {domElements} from "./Constants.js";
import {displayCards} from "./generateCards.js";
import {getTeachers} from "./getTeachers.js";
import {showMap} from "./testMap.js";

let teachers

export function getTeachersForPopup() {
    getTeachers().then(teachers => setTeachersOnPopup(teachers))
}

function setTeachersOnPopup(newTeachers) {
    teachers = newTeachers
    createPopup()
}

function createPopup() {
    document.querySelectorAll('.full-card-info').forEach(a => handleClickOpenTeacherCard(a))
}

export function createPopupOnAddedCard(newTeachers, a) {
    teachers = newTeachers
    createPopup()
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
        setHandleEventClickOnMap(index)
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
            divCard.classList.add('star-card')
            displayCards(teachers)
        } else {
            event.target.classList.replace('favorite-star', 'not-favorite-star')
            event.target.src = './Images/not_favorite.png'
            teachers[index].favorite = false
            divCard.classList.remove('star-card')
            displayCards(teachers)
        }
        const state = {favorite: teachers[index].favorite}
        fetch(`http://localhost:3000/teachers/${teachers[index].id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        }).then(res => res.json())
            .catch(error => console.log(error))
    }
}

function setHandleEventClickOnMap(index) {
    const a = document.getElementById('a-map')
    a.onclick = () => {
        const data = teachers[index].coordinates
        postCoordinatesOnServer(data)
        showMap()
        const map = document.getElementById('map')
        map.removeAttribute('hidden')
    }
}

function postCoordinatesOnServer(data) {
    fetch('http://localhost:3000/coordinates', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .catch(error => console.log(error))
}

function getPopup(index) {
    const teacher = teachers[index]
    const sex = teacher.sex
    const favorite = teacher.favorite

    let content = ``
    let email = ``
    let phone = ``
    let img = ''
    if (teacher.pictureLarge === null) {
        if (sex === 'male')
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
                    <p id="p-subject" class="subject">${teacher.speciality}</p>
                    <p id="p-address">${teacher?.city}, ${teacher?.country}</p>
                    <p id="p-per-data">${teacher.age}, ${sex}</p>
                    <p>${getDaysToBirthday(index)} days to next birthday</p>
                    ${email}
                    ${phone}
                </div>
            </div>
            <p id="p-comment">${teacher.note}</p>
            <a id="a-map" class="map-a">toggle map</a><!--target="_blank" href="./testMap.html-->
        </div>
        <div id="map" hidden></div>
    </div>`
    console.log(content)
    return content
}

function getDaysToBirthday(index) {
    const birthdayDate = dayjs(dayjs(teachers[index].bDate).format("MM-DD"))
    const dateNow = dayjs().format("MM-DD")
    if (dayjs(dateNow).isBefore(birthdayDate)) {
        return birthdayDate.diff(dateNow, 'days')
    } else {
        const fullDateNow = dayjs()
        const yearNow = Number(fullDateNow.format("YYYY"))
        const nextYear = (yearNow + 1).toString()
        const nextBirthdayDate = dayjs(`${nextYear}-${birthdayDate.format("MM-DD")}`)
        return nextBirthdayDate.diff(fullDateNow, 'days')
    }
}
