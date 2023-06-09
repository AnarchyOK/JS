import {domElements} from "./Constants.js";

export function updateDataTeacher(teacher) {
    teacher.title = ''
    teacher.state = null
    teacher.postcode = null
    teacher.coordinates = null
    teacher.timezone = null
    teacher.age = null
    teacher.pictureLarge = null
    teacher.pictureThumbnail = null
    teacher.id = domElements.topCards.childElementCount + 1
    return teacher
}