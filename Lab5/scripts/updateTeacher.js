export function changeTeacherKey(filteredCards) {
    for (let i = 0; i < filteredCards.length; i++)
        filteredCards[i].key = i
    return filteredCards
}
export function updateDataTeacher(teacher) {
    teacher.title = ''
    teacher.state = null
    teacher.postcode = null
    teacher.coordinates = null
    teacher.timezone = null
    teacher.age = null
    teacher.picture_large = null
    teacher.picture_thumbnail = null
    teacher.id = null
    return teacher
}