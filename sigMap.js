
const mymap = L.map('sigHome').setView([60.223970 ,24.75809], 15);
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">Openstreetmap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl,{attribution});
tiles.addTo(mymap);

var marker = L.marker([60.223970, 24.75809]).addTo(mymap);
marker.bindPopup("<b>The home of Sigma</b>").openPopup();

var circle = L.circle([60.223970, 24.75809], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
}).addTo(mymap);

