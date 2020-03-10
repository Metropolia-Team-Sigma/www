/* eslint-disable no-undef */

const mymap = L.map('sigHome').setView([60.223970, 24.75809], 15)
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">Openstreetmap</a> contributors'

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileUrl, { attribution })
tiles.addTo(mymap)

const myIcon = L.icon({
  iconUrl: 'assets/local/images/sigma-logo.png',
  iconSize: [30, 65],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

const marker = L.marker([60.223970, 24.75809], { icon: myIcon }).addTo(mymap)
marker.bindPopup("<b style=\"font-size: 23px;font-family: 'Trade Winds', cursive; margin-top: 10px;\">The home of Sigma</b>").openPopup()