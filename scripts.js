document.addEventListener('DOMContentLoaded', () => {
	changeResources();
	changeImage();
})

var board = document.getElementsByClassName(" card");

var blues = ['img/cottage.jpg']

var oranges = ['img/abbey.jpg', 'img/chapel.jpg', 'img/cloister.jpg', 'img/temple.jpg']

var reds = ['img/farm.jpg','img/granary.jpg','img/greenhouse.jpg','img/orchard.jpg']

var greens = ['img/almshouse.jpg','img/feasthall.jpg','img/tavern.jpg']

var grays = ['img/fountain.jpg','img/millstone.jpg','img/shed.jpg','img/well.jpg']

var yellows = ['img/bakery.jpg','img/market.jpg','img/tailor.jpg','img/theater.jpg']

var blacks = ['img/factory.jpg','img/tradingpost.jpg','img/warehouse.jpg']

var pinks = ['Architect\'s Guild', 
				'Archive of the Second Age',
				'Barrett Castle',
				'Cathedral of Caterina',
				'Fort Ironweed',
				'Grove University',
				'Mandras Palace',
				'Opaleye\'s Watch',
				'Shrine of the Elder Tree',
				'Silva Forum',
				'The Starloom',
				'Statue of the Boundmaker']

var resources = ['Madera','Trigo','Ladrillo','Vidrio','Piedra']


			

function changeImage(){
	var randomBlue =  Math.floor(Math.random() * blues.length);
	document.getElementById("blueDisplay").src = blues[randomBlue];

	var randomOranges =  Math.floor(Math.random() * oranges.length);
	document.getElementById("orangeDisplay").src = oranges[randomOranges];

	var randomReds =  Math.floor(Math.random() * reds.length);
	document.getElementById("redDisplay").src = reds[randomReds];

	var randomGreens =  Math.floor(Math.random() * greens.length);
	document.getElementById("greenDisplay").src = greens[randomGreens];

	var randomGrays =  Math.floor(Math.random() * grays.length);
	document.getElementById("grayDisplay").src = grays[randomGrays];

	var randomYellows =  Math.floor(Math.random() * yellows.length);
	document.getElementById("yellowDisplay").src = yellows[randomYellows];

	var randomBlacks =  Math.floor(Math.random() * blacks.length);
	document.getElementById("blackDisplay").src = blacks[randomBlacks];

}

function changeResources(){
	randomResources1 = Math.floor(Math.random() * (resources.length));

	if (randomResources1 == 0) {
		document.getElementById('resourceDisplay1').innerHTML = "<button id='wood' class='button' style='background-color: #7A3734; border: 1px solid black; margin: 10px; padding: 5px; color: #fff;'>  Madera </button>";
	} else if (randomResources1 == 1) {
		document.getElementById('resourceDisplay1').innerHTML = "<button id='wheat' class='button' style='background-color: #FCAE1F; color: black; border: 1px solid black;margin: 10px;padding: 5px;'>  Trigo </button>";
	} else if (randomResources1 == 2) {
		document.getElementById('resourceDisplay1').innerHTML = "<button id='brick'class='button' style='background-color: #F73324; border: 1px solid black;margin: 10px;padding: 5px;color: #fff;'>  Ladrillo </button>";
	} else if (randomResources1 == 3) {	
		document.getElementById('resourceDisplay1').innerHTML = "<button id='glass' class='button' style='background-color: #00949E; border: 1px solid black;margin: 10px;padding: 5px;color: #fff;'>  Vidrio </button>";
	} else if (randomResources1 == 4) {
		document.getElementById('resourceDisplay1').innerHTML = "<button id='stone' class='button' style='background-color: #A59E87; border: 1px solid black;margin: 10px;padding: 5px;'>  Piedra </button>";
	}

	randomResources2 = Math.floor(Math.random() * (resources.length));
	
	if (randomResources2 == 0) {
		document.getElementById('resourceDisplay2').innerHTML = "<button  id='wood' class='button' style='background-color: #4B1610; border: 1px solid black;margin: 10px;padding: 5px;color: #fff;'>  Madera </button>";
	} else if (randomResources2 == 1) {
		document.getElementById('resourceDisplay2').innerHTML = "<button  id='wheat' class='button' style='background-color: yellow; color: black; border: 1px solid black;margin: 10px;padding: 5px;'>  Trigo </button>";
	} else if (randomResources2 == 2) {
		document.getElementById('resourceDisplay2').innerHTML = "<button  id='brick' class='button' style='background-color: red; border: 1px solid black;margin: 10px;padding: 5px;color: #fff;'>  Ladrillo </button>";
	} else if (randomResources2 == 3) {
		document.getElementById('resourceDisplay2').innerHTML = "<button  id='glass' class='button' style='background-color: blue; border: 1px solid black;margin: 10px;padding: 5px;color: #fff;'>  Vidrio </button>";
	} else if (randomResources2 == 4) {
		document.getElementById('resourceDisplay2').innerHTML = "<button  id='stone' class='button' style='background-color: gray; border: 1px solid black;margin: 10px;padding: 5px;'>  Piedra </button>";
	}

	randomResources3 = Math.floor(Math.random() * (resources.length));
	
	if (randomResources3 == 0) {
		document.getElementById('resourceDisplay3').innerHTML = `<button id="wood" class="button" style='background-color: #4B1610; border: 1px solid black;margin: 10px;padding: 5px;color: #fff;'>  Madera </button>`;
	} else if (randomResources3 == 1) {
		document.getElementById('resourceDisplay3').innerHTML = "<button id='wheat' class='button' style='background-color: yellow; color: black; border: 1px solid black;margin: 10px;padding: 5px;'>  Trigo </button>";
	} else if (randomResources3 == 2) {
		document.getElementById('resourceDisplay3').innerHTML = "<button id='brick' class='button'  style='background-color: red; border: 1px solid black;margin: 10px;padding: 5px;color: #fff;'>  Ladrillo </button>";
	} else if (randomResources3 == 3) {
		document.getElementById('resourceDisplay3').innerHTML = "<button id='glass' class='button'  style='background-color: blue; border: 1px solid black;margin: 10px;padding: 5px;color: #fff;'>  Vidrio </button>";
	} else if (randomResources3 == 4) {
		document.getElementById('resourceDisplay3').innerHTML = "<button id='stone' class='button' style='background-color: gray; border: 1px solid black;margin: 10px; padding: 5px;'>  Piedra </button>";
	}
	
}
	
function watchImage(id, description) {
	let src = document.getElementById(id).getAttribute('src');
	document.getElementById('image-modal').src = src;
	// document.getElementById('description').innerHTML = description;
}

function check(){
	if(window.location.hash == '#miModal'){
		window.location = './index.html';
	}
}

var resource = null;
function chooseResource(id) {
	if (resource == null) {
		let button;
		let x = document.getElementById(id).innerHTML;
		x = x.split(' ');
		x = x[1].split('"');
		resource = x[1];
		console.log(resource);
		randomResource = Math.floor(Math.random() * (resources.length));
		switch (randomResource) {
			case 0:
				button = "<button  id='wood' class='button' style='background-color: #4B1610; border: 1px solid black;margin: 10px;padding: 5px;color: #fff;'>  Madera </button>";
				break;
			case 1:
				button = "<button  id='wheat' class='button' style='background-color: yellow; color: black; border: 1px solid black;margin: 10px;padding: 5px;'>  Trigo </button>";
				break;
			case 2:
				button = "<button  id='brick' class='button' style='background-color: red; border: 1px solid black;margin: 10px;padding: 5px;color: #fff;'>  Ladrillo </button>";
				break;
			case 3:
				button = "<button  id='glass' class='button' style='background-color: blue; border: 1px solid black;margin: 10px;padding: 5px;color: #fff;'>  Vidrio </button>";
				break;
			case 4:
				button = "<button  id='stone' class='button' style='background-color: gray; border: 1px solid black;margin: 10px;padding: 5px;'>  Piedra </button>";
				break;
		}
		document.getElementById(id).innerHTML = button
	}else{
		alert('Ya tienes un recurso seleccionado.');
	}
}

function putResource(idCard) { 
	let card = document.getElementById(idCard);
	if (resource) {
		if (!card.classList.contains('disabled')) {
			card.src = './img/'+ resource +'.png'
			card.classList.add('disabled');
			resource = null;
		}else{
			alert('Ya hay un recurso aqui.');
		}	
	}else{
		alert('Selecciona un recurso.');
	}
}