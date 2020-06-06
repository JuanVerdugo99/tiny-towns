var blues = ['Cottage']
var oranges = ['Abbey', 'Chapel', 'Cloister', 'Temple']
var reds = ['Farm','Granary','Greenhouse','Orchard']
var greens = ['Almshouse','Feast Hall','Tavern']
var grays = ['Fountain','Millstone','Shed','Well']
var yellows = ['Bakery','Market','Tailor','Theater']
var blacks = ['Factory','Trading Post','Warehouse']
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

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (blues.length));
	document.getElementById('blueDisplay').innerHTML = blues[randomNumber]

	randomNumber = Math.floor(Math.random() * (oranges.length));
	document.getElementById('orangeDisplay').innerHTML = oranges[randomNumber]

	randomNumber = Math.floor(Math.random() * (reds.length));
	document.getElementById('redDisplay').innerHTML = reds[randomNumber]

	randomNumber = Math.floor(Math.random() * (greens.length));
	document.getElementById('greenDisplay').innerHTML = greens[randomNumber]

	randomNumber = Math.floor(Math.random() * (grays.length));
	document.getElementById('grayDisplay').innerHTML = grays[randomNumber]

	randomNumber = Math.floor(Math.random() * (yellows.length));
	document.getElementById('yellowDisplay').innerHTML = yellows[randomNumber]

	randomNumber = Math.floor(Math.random() * (blacks.length));
	document.getElementById('blackDisplay').innerHTML = blacks[randomNumber]

	randomNumber = Math.floor(Math.random() * (pinks.length));
	document.getElementById('pinkDisplay').innerHTML = pinks[randomNumber] 
}

newQuote() 