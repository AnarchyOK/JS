import {countries, domElements} from "./Constants.js";
import {getCard} from "./generateCards.js";
import {updateDataTeacher} from "./updateTeacher.js";
import {createPopupOnAddedCard} from "./fullCardPopup.js";
import {getTeachers} from "./getTeachers.js";

function handeCountryChange() {
    domElements.popupCountries.onchange = (event) => {
        domElements.teacherPhone.value = _.find(countries, country => country.name === event.target.value).mobileCode
    }
}

export function handleAddTeacherForm() {
    domElements.openAddTeacherFormButtons.forEach(a => handleClickOpenAddTeacherForm(a))
    handeCountryChange()
    domElements.addTeacherSubmit.addEventListener('submit', (event) => {
        event.preventDefault()
        const teacher = {
            sex: document.querySelector('input[name="sex"]:checked').value,
            fullName: document.getElementById('name').value,
            city: document.getElementById('city').value,
            country: document.getElementById('form-country-list').value,
            speciality: document.getElementById('speciality').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            bDate: document.getElementById('birthday').value,
            favorite: false,
            key: domElements.topCards.childElementCount,
            note: document.getElementById('comment').value,
            bgColor: document.getElementById('favorite-color').value
        }

        const fullDataTeacher = updateDataTeacher(teacher)
        postTeacherOnServer()
        const teacherCard = getCard(fullDataTeacher)
        domElements.topCards.innerHTML += teacherCard
        const a = getANewCard()
        getTeachers().then(teachers => {
            createPopupOnAddedCard(teachers, a)
            }
        )
        alert('New Teacher has been added')
        domElements.addTeacherForm.style.display = 'none'
    })
}

function handleClickOpenAddTeacherForm(a) {
    a.onclick = () => {
        domElements.teacherPhone.value = _.find(countries, country => country.name === 'Afghanistan').mobileCode
        domElements.addTeacherForm.style.display = 'block'
        setHandleEventClose()
    }
}

function setHandleEventClose() {
    document.querySelectorAll('.close').forEach(a => handleClickCloseTeacherCard(a))
    window.onclick = function (event) {
        if (event.target.id === "myForm") {
            event.target.style.display = "none";
        }
    }
}

function handleClickCloseTeacherCard(a) {
    a.onclick = () => domElements.addTeacherForm.style.display = 'none'
}

function postTeacherOnServer() {
    const formElements = document.getElementById('add-teacher-form')
    const formData = new FormData(formElements)
    const data = Object.fromEntries(formData)
    fetch('http://localhost:3000/teachers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .catch(error => console.log(error))
}

function getANewCard() {
    const nodes = domElements.topCards
    const children = nodes.children
    const card = children[children.length - 1]
    const a = card.firstElementChild
    return a
}
