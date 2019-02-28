window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {navbar.classList.add("sticky")}
	else {navbar.classList.remove("sticky");}
}

var mymap = L.map('mapid').setView([41.114454, -83.176252], 5);
var SenecaCountymarker = L.marker([41.114454, -83.176252]).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYnJlbjk2IiwiYSI6ImNqc2pkNGRvdTA0bm80OW9hOTIxNzB6NG0ifQ.tDovHyl1gFWQ96O3pok0Qg'
}).addTo(mymap);

SenecaCountymarker.bindPopup("<b>Seneca County Auditor</b><br>GIS Programmer/Analyst").openPopup();

var popup = L.popup();

function onMapClick(e) {
    popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(mymap);
	}

mymap.on('click', onMapClick);
