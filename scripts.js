document.addEventListener('DOMContentLoaded', () => {
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

	randomResources1 = Math.floor(Math.random() * (resources.length));
	document.getElementById('resourceDisplay1').innerHTML = resources[randomResources1];

	randomResources2 = Math.floor(Math.random() * (resources.length));
	document.getElementById('resourceDisplay2').innerHTML = resources[randomResources2];

	randomResources3 = Math.floor(Math.random() * (resources.length));
	document.getElementById('resourceDisplay3').innerHTML = resources[randomResources3];

	if (randomResources1 === 0){
		
	}
}


changeImage()

})