import {domElements} from "./Constants.js"
import {addToPagePiecharts, createPiecharts} from "./managePiecharts.js";
export function uploadDataToStatisticTable(teachers) {
    const tableBody = domElements.statisticTableBody
    tableBody.innerHTML = createRows(teachers)
    if (domElements.divPiecharts.childElementCount===0)
        addToPagePiecharts()
    createPiecharts(teachers)
}
export function createRows(teachers){
    let content =``
    teachers.forEach(teacher =>{
        content += `<tr>
                        <td>${teacher.fullName}</td>
                        <td>${teacher.speciality}</td>
                        <td>${teacher.age}</td>
                        <td>${teacher.sex}</td>
                        <td>${teacher.country}</td>
                    </tr>`
    })
    return content
}