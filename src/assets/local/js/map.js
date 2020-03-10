/* eslint-disable no-undef */

const mymap = L.map('map').setView([60.223970, 24.75809], 15)
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">Openstreetmap</a> contributors'

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileUrl, { attribution })
tiles.addTo(mymap)

const myIcon = L.icon({
  iconUrl: 'assets/vendor/sigma/sigma-logo.png',
  iconSize: [50, 50],
  iconAnchor: [30, 10],
  popupAnchor: [-5, 0]
})

const marker = L.marker([60.223970, 24.75809], { icon: myIcon }).addTo(mymap)
marker.bindPopup('<b>Metropolia Ammattikorkeakoulu, Espoon kampus</b>')
