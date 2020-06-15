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

var almshouseH = /-SSG.-|-.SSG-|-GSS.-|-.GSS-|-G...-S...-S...-|-.G..-.S..-.S..-|-..G.-..S.-..S.-|-...G-...S-...S-|-S...-S...-G...-|-.S..-.S..-.G..-|-..S.-..S.-..G.-|-...S-...S-...G-/;


//AZULES

var blueH = /-.T..-BG..-|-..T.-.BG.-|-...T-..BG-|-..T.-..GB-|-.T..-.GB.-|-T...-GB..-|-TG..-.B..-|-.TG.-..B.-|-..TG-...B-|-..GT-..B.-|-.GT.-.B..-|-GT..-B...-|-BG..-....-....-.T..-|-.BG.-....-....-..T-|-..BG-....-....-...T-|-TG..-....-....-.B...-|-BG..-....-....-.T..-|-.BG.-....-....-..T.-|-..BG-....-....-...T-|-G..B-....-....-T...-|-T...-G..B-|-GB..-T...-|-.GB.-.T..-|-..GB-..T.-|-B..G-...T-|-T...-....-....-GB..-|-.T..-....-....-.GB.-|-..T.-....-....-..GB-|-...T-....-....-B..G-|-G..T-B...-|-T..G-...B-|-B...-....-....-GT..-|-.B..-....-....-.GT.-|-..B.-....-....-..GT-|-...B-....-....-T..G-/;


//GRISES
var graysH = /-SW..-|-.SW.-|-..SW-|-W..S-|-WS..-|-.WS.-|-..WS-|-S..W-|-W...-S...-|-.W..-.S..-|-..W.-..S.-|-...W-...S-|-S...-W...-|-.S..-.W..-|-..S.-..W.-|-...S-...W-|-W...-....-....-S...-|-.W..-....-....-.S..-/;

//ROJAS
var farmH = /-TT..-WW..-|-.TT.-.WW.-|-..TT-..WW-|-WW..-TT..-|-.WW.-.TT.-|-..WW-..TT-|-TT..-....-....-WW..-|-.TT.-....-....-.WW.-|-..TT-....-....-..WW-|-..TT-..WW-|-WW..-....-....-TT..-|-.WW.-....-....-.TT.-|-..WW-....-....-..TT-|-T..T-W..W-|-W..W-T..T- /;

var granaryH = /-TT..-WB..-|-.TT.-.WB.-|-..TT-..WB-|-TB..-TW..-|-.TB.-.TW.-|-..TB-..TW-|-BW..-TT..-|-.BW.-.TT.-|-..BW-..TT-|-WT..-BT..-|-.WT.-.BT.-|-..WT-..BT-|-T..T-B..W-|-T..W-T..R-|-W..B-T..T-|-B..T-W..T-|-WB..-....-....-TT..-|-.WB.-....-....-.TT.-|-..WB-....-....-..TT-|-WT..-....-....-BT..-|-.WT.-....-....-.BT.-|-..WT-....-....-..BT-|-BW..-....-....-TT..|-.BW.-....-....-.TT.-|-..BW-....-....-..TT-|-TB..-....-....-TW..-|-.TB.-....-....-.TW.-|-..TB-....-....-..TW-/ ;

var greenhouseH = /-TG..-WW..-|-.TG.-.WW.-|-..TG-..WW-|-WW..-GT..-|-.WW.-.GT.-|-..WW-..GT-|-GW..-TW..-|-.GW.-.TW.-|-..GW-..TW-|-WT..-WG..-|-.WT.-.WG.-|-..WT-..WG-|-G..T-W..W-|-WW..-....-....-TG...-|-.WW.-....-....-.TG..-|-..WW.-....-....-..TG.-|-..WW-....-....-..TG-/;

var orchardH = /-ST..-TW..-|-.ST.-.TW.-|-..ST-..TW-|-TS..-WT..-|-.TS.-.WT.-|-..TS-..WT-|-WT..-TS..-|-.WT.-.TS.-|-..WT-..TS-|-TW..-ST..-|-.TW.-.ST.-|-..TW-..ST-|-T..S-W..T-|-S..T-T..W-|-T..W-S..T-|-W..T-T..S-|-TW..-....-....-ST..-|-.TW.-....-....-.ST.-|-..TW-....-....-..ST-|-TS..-....-....-WT..-|-.TS.-....-....-.WT.-|-..TS-....-....-..WT-|-WT..-....-....-TS..-|-.WT.-....-....-.TS.-|-..WT-....-....-..TS-|-TW..-....-....-ST..-|-.TW.-....-....-.ST.-|-..TW-....-....-..ST-/;



//NARANJAS
var abbeyH = /-..G.-BSS.-|-...G-.BSS-|-G...-S.BS-|-.G..-SS.B-|-B...-S...-SG..-|-.B..-.S..-.SG.-|-..B.-..S.-..SG-|-...B-...S-G..S-|-SSB.-G...-|-.SSB-.G..-|-B.SS-..G.-|-SB.S-...G-|-GS..-.S..-.B..-|-.GS.-..S.-..B.-|-..GS-...S-...B-|-S..G-S...-B...-|-BSS.-....-....-..G.-|-.BSS-....-....-...G-|-S.BS-....-....-G...-|-SS.B-....-....-.G..-|-S...-SG..-....-B...-|-.S..-.SG.-....-.B..-|-..S.-..SG-....-..B.-|-...S-G...S-..S.-...B-|-SG..-....-B...-S...-|-.SG.-....-.B..-.S..-|-..SG-....-..B.-..S.-|-G..S-...-...B-...S-|-G...-....-....-SSB.-|-.G..-....-....-.SSB-|-..G.-....-....-B.SS-|-...G-....-....-SB.S-|-.S..-.B..-....-GS..-|-..S.-..B.-....-.GS.-|-...S-...B-....-..GS-|-S...-B...-....-S..G-|-.B..-....-GS..-.S..-|-..B.-....-.GS.-..S.-|-...B-....-..GS-...S-|-B...-....-S..G-S...-/;

var chapelH = /-..G.-SGS.-|-...G-.SGS-|-G...-S.SG-|-.G..-GS.S-|-SGS.-....-....-..G.-|-.SGS-....-....-...G-|-S.SG-....-....-G...-|-GS.S-....-....-.G..-|-S...-G...-SG..-|-.S..-.G..-.SG.-|-..S.-..G.-..SG-|-...S-...G-G...S-|-G...-SG..-....-S...-|-.G..-.SG.-....-.S..-|-..G.-..SG-....-..S.-|-...G-G..S-....-...S-|-SG..-....-S...-G...-|-.SG.-....-.S..-.G..-|-..SG-....-..S.-..G.-|-G..S-....-...S-...G-|-SGS.-G...-|-.SGS-.G..-|-S.SG-..G.-|-GS.S-...G-|-G...-....-....-SGS.-|-.G..-....-....-.SGS-|-..G.-....-....-S.SG-|-...G-....-....-GS.S-|-.S..-.G..-GS..-|-..S.-..G.-.GS.-|-...S-...G-..GS-|-S...-G...-S..G-/;

var templeH = /-..G.-BBS.-|-...G-.BBS-|-G...-S.BB-|-.G..-BS.B-|-BBS.-..G-|-.BBS-...G-|-S.BB-G...-|-BS.B-.G..-|-BBS.-....-....-..G.-|-.BBS-....-....-...G-|-S.BB-....-....-G...-|-BS.B-....-....-.G..-|-..G.-....-....-BBS.-|-...G-....-....-.BBS-|-G...-....-....-S.BB-|-.G..-....-....-BS.B-|-B...-B...-SG..-|-.B..-.B..-.SG.-|-..B.-..B.-..SG-|-...B-...B-G..S-|-B...-SG..-....-B...-|-.B..-.SG.-....-.B..-|-..B.-..SG-....-..B.-|-...B-G..S.-....-...B-|-B...-B...-S..G-|-.B..-.B..-GS..-|-..B.-..B.-.GS.-|-...B-...B-..GS-|-B...-SG..-.... -B...-|-.B..-.B..-....-.SG.-|-..B.-..SG-....-..B.-|-...B-G..S-....-...B|-SG..-....-B...-B...-|-.SG.-....-.B..-.B..-|-..SG-....-..B.-..B.-|-G..S-....-...B-...B-|-SBB.-G...-|-.SBB-.G..-|-B.SB-..G.-|-BB.S-...G-|-G...-....-....-SBB.-|-.G..-....-....-.SBB-|-..G.-....-....-B.SB-|-...G-....-....-BB.S-|-GS..-.B..-.B..-|-.GS.-..B.-..B.-|-..GS-...B-...B-|-S..G-B...-B...-|-.B..-.B..-....-GS..-|-..B.-..B.-....-.GS.-|-...B-...B-....-..GS-|-B...-B...-....-S..G-|-.B..-....-SG..-.B..-|-..B.-....-.SG.-..B.-|-...B-....-..SG-...B-|-B...-....-G..S-B...-/;


var cloister = /-..G.-WBS.-|-...G-.WBS-|-G...-S.WB|-.G..-BS.W-|-WBS.-....-..S.-|-.WBS-....-...S-|-S.WB-....-S...-|-BS.W-....-.S..-|-W...-B...-SG..-|-.W..-.B..-.SG.-|-..W.-..B.-..SG-|-...W-...B-G..S-|-B...-SG..-....-W...-|-.B..-.SG.-....-W..-|-..B.-..SG-....-..W.-|-...B-G..S-....-...W-|-SG..-....-W...-B...-|-.SG.-....-.W..-.B..-|-..SG-....-..W.-..B.-|-G..S-....-...W-...B-|-SBW.-G...-|-.SBW-.G..-|-W.SB-..G.-|-BW.S.-...G-|-WBS.-..G.-|-.WBS-...G-|-S.WB.-G...-|-BS.W-.G..-|-G...-....-....-SBW.-|-.G..-....-....-.SBW-|-..G.-....-....-W.SB-|-...G-....-....-RW.S-|-GS..-.R..-.W..-|-.GS.-..R.-..W.-|-..GS-...R-...W-|-G..S.-R...-W...-|-.B..-.W..-....-GS..-|-..B.-..W.-....-.GS.-|-...B-...W-....-..GS-|-B...-W...-....-S..G-|-.W..-....-GS..-.B..-|-..W.-....-.GS.-..B.-|-...W-....-..GS-...B-|-W...-....-S..G-B...-/;



//VERDES
var almshouseH = /-SSG.-|-.SSG-|-GSS.-|-.GSS-|-G...-S...-S...-|-.G..-.S..-.S..-|-..G.-..S.-..S.-|-...G-...S-...S-|-S...-S...-G...-|-.S..-.S..-.G..-|-..S.-..S.-..G.-|-...S-...S-...G-/;

var feasthallH = /-WWG.-|-.WWG-|-G.WW-|-WG.W-|-GWW.-|-.GWW-|-W.GW-|WW.G-|-W...-W...-G...-|-.W..-.W..-.G..-|-..W.-..W.-..G.-|-...W-...W-...G|-G...-W...-W...-|-.G..-.W..-.W..-|-..G.-..W.-..W.-|-...G-...W-...W|-W...-G...-....-W...-|-.W..-.G..-....-.W..-|-..W.-..G.-....-..W.-|-...W-...G-....-...W-|-G...-....-W...-W...-|-.G..-....-.W..-.W..-|-..G.-....-..W.-..W.-|-...G-....-...W-...W-|-W...-....-G...-W...-|-.W..-....-.G..-.W..-|-..W.-....-..G.-..W.-|-...W-....-...G-...W-|-W...-W...-....-G...-|-.W..-.W..-....-.G..-|-..W.-..W.-....-..G.-|-...W-...W-....-...G-/;

var tavernH = /-BBG.-|-.BBG-|-G.BB-|-BG.B-|-B...-B...-G...-|-.B..-.B..-.G..-|-..B.-..B.-..G.-|-...B-...B-...G-|-G...-B...-B...-|-.G..-.B..-.B..-|-..G.-..B.-..B.-|-...G-...B-...B-|-GBB.-|-.GBB-|-B.GB-|-BB.G-/;





//NEGRAS
var factoryH = /-W...-BSSB-|-.W..-BBSS-|-..W.-SBBS-|-...W-SSBB-|-BW..-S...-S...-B...-|-.BW.-.S..-.S..-.B..-|-..BW-..S.-..S.-..B.-|-W..B-...S-...S-...B-|-BSSB-...W-|-SSBB-..W.-|-SBBS-.W..-|-BBSS-W...-|-...B-...S-...S-..WB-|-..B.-..S.-..S.-.WB.-|-.B..-.S..-.S..-WB..-|-B...-S...-S...-B..W-/;

var tradingpostH = /-SW..-SWB.-|.SW.-.SWB-|-..SW-B.SW-|-W..S-WB.S-|-SWB.-....-....-SW..-|-.SWB-....-....-.SW.-|-B.SW-....-....-..SW-|-WB.S-....-....-W..S-|-SS..-WW..-B...-|-.SS.-.WW.-.B..-|-..SS-..WW-..B.-|-S..S-W..W-...B-|-WW..-B...-....-SS..-|-.WW.-.B..-....-.SS.-|-..WW-..B.-....-..SS-|-W..W-...B-....-S..S-|-BWS.-.WS.-|-.BWS-..WS-|-S.BW-S..W-|-WS.B-WS..-|-.WS.-....-....-BWS.-|-..WS-....-....-.BWS-|-S..W-....-....-S.BW-|-WS..-....-....-WS.B-|-.B..-WW..-SS..-|-..B.-.WW.-.SS.-|-...B-..WW-..SS-|-B...-W..W-S..S-|-WW..-SS..-....-.B..-|-.WW.-.SS.-....-..B.-|-..WW-..SS-....-...B-|-W..W-S..S-....-B...-/;

var warehouseH = /-TWT.-B.B.-|-.TWT-.B.B-|-T.TW-B.B.-|-WT.T-.B.B-|-B.B.-....-....-TWT.-|-.B.B-....-....-.TWT-|-B.B.-....-....-T.TW-|-.B.B-....-....-WT.T-|-BT..-.W..-BT..-|-.BT.-..W.-.BT.-|-..BT-...W-..BT-|-T..B-W...-T..B-|-.W..-BT..-....-BT..-|-..W.-.BT.-....-.BT.-|-...W-..BT-....-..BT-|-W...-T..B-....-T..B-|-B.B.-TWT.-|-.B.B-.TWT-|-B.B.-T.TW-|-.B.B-WT.T-|-TWT.-....-....-B.B.-|-.TWT-....-....-.B.B-|-T.TW-....-....-B.B.-|-WT.T-....-....-.B.B-|-TB..-W...-TB..-|-.TB.-.W..-.TB-|-..TB-..W.-..TB-|-B..T-...W-B..T-|-W...-TB..-....-TB..-| -.W..-.TB.-....-.TB.-|-..W.-..TB-....-..TB-|-...W-B..T-....-B..T-|-TB..-....-TB..-W...-|-.TB.-....-.TB.-.W..-|-..TB-....-..TB-..W.-|-B..T-....-B..T-...W-|-BT..-....-BT..-.W..-|-.BT.-....-.BT.-..W.-|-..BT-....-..BT-...W-|-T..B-....-T..B-W...-/;



function checkTheTableGame() {
	let newTableGame = '-';
	for (let x = 0; x < tableGame.length; x++) {
		newTableGame += tableGame[x];
		if (x == 3 || x == 7 || x == 11 || x == 15) {
			newTableGame += '-';
		}
	}
	console.log(almshouseH.test(newTableGame));
}