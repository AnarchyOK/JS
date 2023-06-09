import {displayCards} from './generateCards.js'
import {turnOnSearching} from './Searching.js'
import {uploadDataToStatisticTable} from "./fillTable.js";
import {setHandlerOnFilters} from "./Filtration.js";
import {getCountries} from "./getCountries.js";
import {handleAddTeacherForm} from "./addTeacherPopup.js";
import {getRandomUsers} from "./getRandomUsers.js";
import {setHandlerOnMoreTeachersButton} from "./addMoreTeachers.js";

// setTeachersOnPopup(teachers)
setHandlerOnFilters()
turnOnSearching()
handleAddTeacherForm()
getCountries()
setHandlerOnMoreTeachersButton()

getRandomUsers(12).then(teachers => {
    displayCards(teachers)
    uploadDataToStatisticTable(teachers)
})
