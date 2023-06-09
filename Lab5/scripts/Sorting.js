import {domElements} from "./Constants.js";
import {uploadDataToStatisticTable} from "./fillTable.js";

export function setSortTable(teachers) {
    domElements.statisticTable.querySelectorAll(`th`).forEach((th) => {
        th.onclick = () => sortTable(th.getAttribute('data-value'), th, teachers)
    })
}

function sortTable(prop, th, teachers) {
    debugger
    console.log(teachers)
    let sortedArray
    if (th.getAttribute('data-sort') === 'asc') {
        console.log(th.getAttribute('data-sort'))
        th.setAttribute('data-sort', 'dsc')
        sortedArray = sortByAsc(prop, teachers)
    } else {
        console.log(th.getAttribute('data-sort'))
        th.setAttribute('data-sort', 'asc')
        sortedArray = sortByDsc(prop, teachers)
    }
    uploadDataToStatisticTable(sortedArray)
}

function sortByAsc(prop, teachers) {
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

function sortByDsc(prop, teachers) {
    let sortedArray = sortByAsc(prop, teachers)
    return sortedArray.reverse()
}