export function showMap() {
    getCoordinates().then(response => setMap(response))
}

async function getCoordinates() {
    const response = await fetch('http://localhost:3000/coordinates')
    return response.json()
}

function setMap(coordinates) {
    const map = L.map('map').setView([coordinates.latitude, coordinates.longitude], 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker([coordinates.latitude, coordinates.longitude]).addTo(map)
        .bindPopup('I live here')
        .openPopup();
}