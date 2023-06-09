import {domElements, teachers} from "./Constants.js"
uploadDataToStatisticTable(teachers)
export function uploadDataToStatisticTable(teachers) {
    const tableBody = domElements.statisticTableBody
    tableBody.innerHTML = createRows(teachers)
}
export function createRows(teachers){
    let content =``
    teachers.forEach(teacher =>{
        content += `<tr>
                        <td>${teacher.fullName}</td>
                        <td>${teacher.course}</td>
                        <td>${teacher.age}</td>
                        <td>${teacher.gender}</td>
                        <td>${teacher.country}</td>
                    </tr>`
    })
    return content
}