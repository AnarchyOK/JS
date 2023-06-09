import {domElements} from "./Constants.js";
import {getRandomTeachers, getTeachers} from "./getTeachers.js";
import {displayCards} from "./generateCards.js";
import {uploadDataToStatisticTable} from "./fillTable.js";

export function setHandlerOnMoreTeachersButton() {
    domElements.addMoreTeacherButton.addEventListener('click', () => {
        // domElements.addMoreTeacherButton.setAttribute('disabled', 'disabled')
        getRandomTeachers(10).then(randomTeachers => {
            getTeachers().then(teachers => {
                const Emails = new Set(teachers.map(obj => obj.email));
                const uniqueRandomTeachers = [...randomTeachers
                    .filter(teacher => !Emails.has(teacher.email))
                ];
                postUniqueTeachersOnServer(uniqueRandomTeachers)
            })
        })
        _.defer(() => {
            getTeachers().then(teachers => {
                displayCards(teachers)
                uploadDataToStatisticTable(teachers)
            })
        })
        // setTimeout(() => {
        //     domElements.addMoreTeacherButton.removeAttribute('disabled')
        // }, 5000)
    })
}

// const debounceAddMoreTeacher = _.debounce(() => {
//         getRandomTeachers(10).then(randomTeachers => {
//             getTeachers().then(teachers => {
//                 const Emails = new Set(teachers.map(obj => obj.email));
//                 const uniqueRandomTeachers = [...randomTeachers
//                     .filter(teacher => !Emails.has(teachers.email))
//                 ];
//                 postUniqueTeachersOnServer(uniqueRandomTeachers)
//             })
//         })
//         _.defer(() => {
//             getTeachers().then(teachers => {
//                 displayCards(teachers)
//                 uploadDataToStatisticTable(teachers)
//             })
//         })
//     })

function postUniqueTeachersOnServer(uniqueRandomTeachers) {
    uniqueRandomTeachers.forEach(teacher => {
        fetch('http://localhost:3000/teachers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(teacher)
        }).then(res => res.json())
            .catch(error => console.log(error))
    })
}
