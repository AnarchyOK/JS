import {createTopCards} from './generateCards.js'
import {turnOnSearching} from './Searching.js'
import {teachers} from "./Constants.js";
import {uploadDataToStatisticTable} from "./fillTable.js";
import {setSortTable} from "./Sorting.js";
import {setHandleOnFilters} from "./Filtration.js";
import {generateFavoriteCards} from "./generateCardsFavoriteTeachers.js";
import {getCountries} from "./getCountries.js";
import {handleAddTeacherForm, validateCountryTeacher} from "./addTeacher.js";

getCountries()
createTopCards(teachers)
turnOnSearching()
uploadDataToStatisticTable(teachers)
setSortTable()
setHandleOnFilters()
generateFavoriteCards(teachers)
validateCountryTeacher()
handleAddTeacherForm()

