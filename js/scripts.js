var tableGame = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
changeResources();
changeImage();

function changeImage() {
	var random = Math.floor(Math.random() * blues.length);
	document.getElementById("bluesDisplay").src = blues[random].name;
	document.getElementById("bluesDisplay").classList.add(random);

	random = Math.floor(Math.random() * oranges.length);
	document.getElementById("orangesDisplay").src = oranges[random].name;
	document.getElementById("orangesDisplay").classList.add(random);

	random = Math.floor(Math.random() * reds.length);
	document.getElementById("redsDisplay").src = reds[random].name;
	document.getElementById("redsDisplay").classList.add(random);

	random = Math.floor(Math.random() * greens.length);
	document.getElementById("greensDisplay").src = greens[random].name;
	document.getElementById("greensDisplay").classList.add(random);

	random = Math.floor(Math.random() * grays.length);
	document.getElementById("graysDisplay").src = grays[random].name;
	document.getElementById("graysDisplay").classList.add(random);

	random = Math.floor(Math.random() * yellows.length);
	document.getElementById("yellowsDisplay").src = yellows[random].name;
	document.getElementById("yellowsDisplay").classList.add(random);

	random = Math.floor(Math.random() * blacks.length);
	document.getElementById("blacksDisplay").src = blacks[random].name;
	document.getElementById("blacksDisplay").classList.add(random);

	random = Math.floor(Math.random() * pinks.length);
	document.getElementById("pinksDisplay").src = pinks[random].name;
	document.getElementById("pinksDisplay").classList.add(random);
}

function changeResources(indexToChange) {
	for (let index = 1; index <= 3; index++) {
		let button;
		let randomResource = Math.floor(Math.random() * (resources.length));
		switch (randomResource) {
			case 0:
				button = "<button id='wood' class='button' style='background-color: #7A3734; border: 1px solid black; margin: 10px; padding: 5px; color: #fff;'>  Madera </button>";
				break;
			case 1:
				button = "<button id='wheat' class='button' style='background-color: #FCAE1F; color: black; border: 1px solid black;margin: 10px;padding: 5px;'>  Trigo </button>";
				break;
			case 2:
				button = "<button id='brick'class='button' style='background-color: #F73324; border: 1px solid black;margin: 10px;padding: 5px;color: #fff;'>  Ladrillo </button>";
				break;
			case 3:
				button = "<button id='glass' class='button' style='background-color: #00949E; border: 1px solid black;margin: 10px;padding: 5px;color: #fff;'>  Vidrio </button>";
				break;
			case 4:
				button = "<button id='stone' class='button' style='background-color: #A59E87; border: 1px solid black;margin: 10px;padding: 5px;'>  Piedra </button>";
				break;
		}
		if (indexToChange) {
			document.getElementById(indexToChange).innerHTML = button;
			return ;
		}
		document.getElementById('resourceDisplay'+index).innerHTML = button;
	}
}


function watchImage(id, clase) {
	let src = document.getElementById(id).getAttribute('src');
	document.getElementById('image-modal').src = src;
	let position = document.getElementById(id).className;
	let type;
	switch (clase) {
		case 'blues': type = blues; break; case 'reds': type = reds; break; case 'grays': type = grays; break; case 'pinks': type = pinks; break;
		case 'oranges': type = oranges; break; case 'greens': type = greens; break; case 'yellows': type = yellows; break; case 'blacks': type = blacks; break;
	}
	document.getElementById('description').innerHTML = type[position].description;
}

function check() {
	if (window.location.hash == '#miModal') {
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
		changeResources(id);
	} else {
		alert('Ya tienes un recurso seleccionado.');
	}
}

function putResource(idCard) {
	let card = document.getElementById(idCard);
	if (resource) {
		if (!card.classList.contains('disabled')) {
			card.src = './img/' + resource + '.png'
			card.classList.add('disabled');
			tableGame[idCard] = resource.charAt(0).toUpperCase();
			if (resource == 'wheat') {
				tableGame[idCard] = 'T';
			}
			checkTheTableGame();
			resource = null;
		} else {
			alert('Ya hay un recurso aqui.');
		}
	} else {
		alert('Selecciona un recurso.');
	}
}

let search;
function checkTheTableGame() {
	let newTableGame = '-';
	for (let x = 0; x < tableGame.length; x++) {
		newTableGame += tableGame[x];
		if (x == 3 || x == 7 || x == 11 || x == 15) {
			newTableGame += '-';
		}
	}
	search = almshouseH.exec(newTableGame);
	if (search) {
		checkGreens(search);
	}
}

function foundIt(positions) {
	for (let index = 0; index <= positions.length; index++) {
		document.getElementById(`box_${positions[index]}`).classList.add('found');
	}
	buildings[buildCount] = positions;
}

var buildings;
var buildCount = 0;
function checkGreens(exec) {
	let TG = tableGame;
	let length = exec[0].length;
	let positions;
	if (length == 6) {
		// Horizontal
		for (let i = 0; i <= TG.length; i += 4) {
			if (TG[i]+TG[i+1]+TG[i+2] == 'GSS'| TG[i]+TG[i+1]+TG[i+2] == 'SSG') {
				positions = [i, i+1, i+2];
				console.log(positions);
			}else if(TG[i+1]+TG[i+2]+TG[i+3] == 'GSS'| TG[i+1]+TG[i+2]+TG[i+3] == 'SSG'){
				positions = [i+1, i+2, i+3]
				foundIt(positions);
			}
		}
	}else {
		// Vertical
		for (let i = 0; i < 4; i++) {
			if (TG[i]+TG[i+4]+TG[i+8] == 'GSS'| TG[i]+TG[i+4]+TG[i+8] == 'SSG') {
				positions = [i, i+4, i+8];
				console.log(positions);
			}else if(TG[i+4]+TG[i+8]+TG[i+12] == 'GSS'| TG[i+4]+TG[i+8]+TG[i+12] == 'SSG'){
				positions = [i+4, i+8, i+12]
				foundIt(positions);
			}
		}
	}
}

function build() {
	
}