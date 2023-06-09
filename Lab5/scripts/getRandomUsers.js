import {domElements} from "./Constants.js";

const courses = ['Mathematics', 'Physics', 'English', 'Computer Science', 'Dancing', 'Chess', 'Biology', 'Chemistry',
    'Law', 'Art', 'Medicine', 'Statistics']
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export async function getRandomUsers(count) {
    domElements.topCards.innerHTML = `<h1>The teachers are being loading</h1>`
    domElements.favoriteTeachers.innerHTML = ``
    const response = await fetch(`https://randomuser.me/api/?results=${count}`)
    const users = await response.json()
    return convertRandomObj(users.results)
}

function convertRandomObj(usersObj) {
    return usersObj.map(user => {
        return {
            gender: user.gender,
            title: user.name.title,
            fullName: `${user.name.first} ${user.name.last}`,
            city: user.location.city,
            state: user.location.state,
            country: user.location.country,
            postcode: user.location.postcode,
            coordinates: user.location.coordinates,
            timezone: user.location.timezone,
            email: user.email,
            bDate: user.dob.date,
            age: user.dob.age,
            phone: user.phone,
            pictureLarge: user.picture.large,
            id: user.id.value != null ? `${user.id.name}${user.id.value}`.replace(/\s/g, '') : user.login.uuid,
            favorite: Math.random() < 0.3,
            course: courses[Math.round(Math.random() * (courses.length - 1))],
            bgColor: '#' + `${Math.floor(Math.random() * 16777215).toString(16)}`,
            note: generateString(7),
            key: usersObj.indexOf(user)
        }
    })
}

function generateString(length) {
    let string = ''
    for (let i = 0; i < length; i++) {
        let result = ''
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        if (i === length - 1)
            string += result
        else
            string += result + ' '
    }
    return string
}