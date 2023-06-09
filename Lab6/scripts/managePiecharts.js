import {domElements} from "./Constants.js";

const charts = []

export function createPiecharts(teachers) {
    charts.forEach(chart => chart.destroy())
    const typeOfCharts = ['speciality', 'age', 'sex', 'country']
    typeOfCharts.forEach(param => {
        const uniqueElements = [...new Set(teachers.map((item) => item[param]))]
        const yValues = []
        let barColors = []

        uniqueElements.forEach(element => {
            yValues.push(teachers.filter(teacher => teacher[param] === element).length)
            barColors = getColors(uniqueElements.length)
        })
        const chart = new Chart(`Chart-${param}`, {
            type: "pie",
            data: {
                labels: uniqueElements,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                title: {
                    display: true,
                    text: `${param}`
                }
            }
        })
        charts.push(chart)
    })
}


function getColors(count) {
    const colors = new Set()
    while (colors.size < count)
        colors.add(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    return [...colors]
}

export function removeFromPagePiecharts() {
    domElements.divPiecharts.innerHTML = ''
}
export function addToPagePiecharts(){
    domElements.divPiecharts.innerHTML =`
                <canvas id="Chart-speciality" style="width:100%;max-width:600px"></canvas>
                <canvas id="Chart-age" style="width:100%;max-width:600px"></canvas>
                <canvas id="Chart-sex" style="width:100%;max-width:600px"></canvas>
                <canvas id="Chart-country" style="width:100%;max-width:600px"></canvas>`
}
