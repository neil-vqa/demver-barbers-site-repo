
//page navigation

let links = document.querySelectorAll('nav a');

links.forEach(function(link){
	link.addEventListener('click',function(e){
		if (e.target.id == "book-btn") {
			document.getElementById("booking").style.width = "100%";
			document.getElementById("close-panel").style.width = "100%";
		} 
		else if (e.target.id == "who-btn") {
			document.getElementById("who").style.width = "100%";
			document.getElementById("close-panel").style.width = "100%";
		}
		else if (e.target.id == "gallery-btn") {
			document.getElementById("gallery").style.width = "100%";
			document.getElementById("close-panel").style.width = "100%";
		}
		else if (e.target.id == "prices-btn") {
			document.getElementById("prices").style.width = "100%";
			document.getElementById("close-panel").style.width = "100%";
		}
		else if (e.target.id == "location-btn") {
			document.getElementById("location").style.width = "100%";
			document.getElementById("close-panel").style.width = "100%";
		}
	});
});


let close = document.querySelector('.closebtn');

close.addEventListener('click',function() {
	document.getElementById("close-panel").style.width = "0";
	
	if (document.getElementById("booking").style.width == "100%") {
		document.getElementById("booking").style.width = "0"
	}
	else if (document.getElementById("who").style.width == "100%") {
		document.getElementById("who").style.width = "0"
	}
	else if (document.getElementById("gallery").style.width == "100%") {
		document.getElementById("gallery").style.width = "0"
	}
	else if (document.getElementById("prices").style.width == "100%") {
		document.getElementById("prices").style.width = "0"
	}
	else if (document.getElementById("location").style.width == "100%") {
		document.getElementById("location").style.width = "0"
	}
});

//materialize components

$(document).ready(function(){
	$(".button-collapse").sideNav({
		closeOnClick: true,
		draggable: false,
		menuWidth: 250,
	});
	$('select').material_select();
	$('.datepicker').pickadate();
	$('.timepicker').pickatime();
	$('.materialboxed').materialbox();
	
});

//map

var mymap = L.map('map').setView([40.7580, -73.9855], 14);

		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmVpbHRoZWdyZWF0ZXN0IiwiYSI6ImNrM2ZqMmhvNjAzN2QzbW5uaHQyamo5NGkifQ.l53kgbZcDGY8U8xHkSWv0w', {
			maxZoom: 18,
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1
		}).addTo(mymap);

		L.marker([40.7580, -73.9855]).addTo(mymap)
		.bindPopup("<b>We are here!</b><br><p><b>Demver Barbers</b><br>Lorem Building<br>Ipsum Street</p>").openPopup();

