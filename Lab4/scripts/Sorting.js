import {domElements, teachers} from "./Constants.js";
import {uploadDataToStatisticTable} from "./fillTable.js";

export function setSortTable() {
    domElements.statisticTable.querySelectorAll(`th`).forEach((th) => {
        th.addEventListener(`click`, event => sortTable(th.getAttribute('data-value'), th))
    })
}

function sortTable(prop, th) {
    let sortedArray
    if (th.getAttribute('data-sort') === 'asc') {
        th.setAttribute('data-sort', 'dsc')
        sortedArray = sortByAsc(prop)
    } else {
        th.setAttribute('data-sort', 'asc')
        sortedArray = sortByDsc(prop)
    }
    uploadDataToStatisticTable(sortedArray)
}

function sortByAsc(prop) {
    if (prop === 'age') {
        return teachers.sort((a, b) => {
            return a.age - b.age;
        })
    } else {
        return teachers.sort((a, b) => {
            let fa = a[prop].toLowerCase(),
                fb = b[prop].toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })
    }
}

function sortByDsc(prop) {
    let sortedArray = sortByAsc(prop)
    return sortedArray.reverse()
}