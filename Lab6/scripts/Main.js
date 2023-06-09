import {displayCards} from './generateCards.js'
import {turnOnSearching} from './Searching.js'
import {uploadDataToStatisticTable} from "./fillTable.js";
import {setHandlerOnFilters} from "./Filtration.js";
import {getCountries} from "./getCountries.js";
import {handleAddTeacherForm} from "./addTeacherPopup.js";
import {getTeachers} from "./getTeachers.js";
import {setHandlerOnMoreTeachersButton} from "./addMoreTeachers.js";
import {setSortTable} from "./Sorting.js";
import {getTeachersForPopup} from "./fullCardPopup.js";

setHandlerOnFilters()
turnOnSearching()
handleAddTeacherForm()
getCountries()
setHandlerOnMoreTeachersButton()

getTeachers().then(teachers => {
    displayCards(teachers)
    uploadDataToStatisticTable(teachers)
    setSortTable(teachers)
    getTeachersForPopup(teachers)
})
