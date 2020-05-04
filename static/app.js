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

$(document).ready(function(){
	$(".button-collapse").sideNav({
		closeOnClick: true,
		draggable: false,
		menuWidth: 250,
	});
	$('select').material_select();
	$('.datepicker').pickadate();
	$('.timepicker').pickatime();
	
});



