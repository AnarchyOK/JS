import {domElements} from "./Constants.js";
import {uploadDataToStatisticTable} from "./fillTable.js";

export function setSortTable(teachers) {
    domElements.statisticTable.querySelectorAll(`th`).forEach((th) => {
        th.onclick = () => sortTable(th.getAttribute('data-value'), th, teachers)
    })
}


function sortTable(prop, th, teachers) {
    let sortedArray
    if (th.getAttribute('data-sort') === 'asc') {
        th.setAttribute('data-sort', 'dsc')
        sortedArray = _.sortBy(teachers, [`${prop}`])
    } else {
        th.setAttribute('data-sort', 'asc')
        sortedArray = _.reverse(_.sortBy(teachers, [`${prop}`]))
    }
    uploadDataToStatisticTable(sortedArray)
}