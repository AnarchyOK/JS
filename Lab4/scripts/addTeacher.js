import {countries, domElements, teachers} from "./Constants.js";
import {createTopCards} from "./generateCards.js";

export function validateCountryTeacher() {
    domElements.popupCountryInput.oninput = (event) => {
        let optionFound = false

        for (let j = 0; j < document.getElementById('popup-country-list').options.length; j++) {
            if (event.target.value === document.getElementById('popup-country-list').options[j].value) {
                optionFound = true;
                break;
            }
        }

        if (optionFound) {
            event.target.setCustomValidity('')
            document.getElementById('phone').value = countries.find(country => country.name === domElements.popupCountryInput.value).mobileCode
        } else {
            event.target.setCustomValidity('Please choose the correct country')
        }
    }
}

export function handleAddTeacherForm() {
    domElements.openAddTeacherFormButtons.forEach(a => handleClickOpenAddTeacherForm(a))
    domElements.addTeacherSubmit.addEventListener('submit', () =>{
        const teacher ={
            fullName: document.getElementById('name').value,
            course: document.getElementById('speciality').value,
            country: document.getElementById('popup-country-input').value,
            city: document.getElementById('city').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            bDate: document.getElementById('birthday').value,
            gender: document.querySelector('input[name="sex-teacher-form"]:checked').value,
            favorite: false,
            key: teachers.length + 1,
            note: document.getElementById('comment').value,
            bgColor: document.getElementById('favorite-color').value
        }
        teachers.push(teacher)
        createTopCards(teachers)
    })
}

function handleClickOpenAddTeacherForm(a) {
    a.onclick = event => {
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