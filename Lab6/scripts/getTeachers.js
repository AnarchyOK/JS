const specialities = ['Mathematics', 'Physics', 'English', 'Computer Science', 'Dancing', 'Chess', 'Biology', 'Chemistry',
    'Law', 'Art', 'Medicine', 'Statistics']
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export async function getTeachers() {
    const response = await fetch(`http://localhost:3000/teachers`)
    const teachers = await response.json()
    return teachers
}

export async function getRandomTeachers(count){
    const response = await fetch(`https://randomuser.me/api/?results=${count}`)
    const teachers = await response.json()
    const convertedTeachers = convertRandomObj(teachers.results)
    return convertedTeachers
}

function convertRandomObj(usersObj) {
    return _.map(usersObj, user => {
        return {
            sex: user.gender,
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
            favorite: Math.random() < 0.3,
            speciality: specialities[Math.round(Math.random() * (specialities.length - 1))],
            bgColor: '#' + `${Math.floor(Math.random() * 16777215).toString(16)}`,
            note: generateString(7)
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