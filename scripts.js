document.addEventListener('DOMContentLoaded', () => {

var board = document.getElementsByClassName("board");

var boardArray =[];
for (var i=0; i<=3; i++) {
	boardArray[i] = [];
	for (x=0; x<=3; x++) {
		boardArray[i][x] = 0;
	}	
}	

var blues = ['img/cottage.jpg'];
var oranges = ['img/abbey.jpg', 'img/chapel.jpg', 'img/cloister.jpg', 'img/temple.jpg'];
var reds = ['img/farm.jpg','img/granary.jpg','img/greenhouse.jpg','img/orchard.jpg'];
var greens = ['img/almshouse.jpg','img/feasthall.jpg','img/tavern.jpg'];
var grays = ['img/fountain.jpg','img/millstone.jpg','img/shed.jpg','img/well.jpg'];
var yellows = ['img/bakery.jpg','img/market.jpg','img/tailor.jpg','img/theater.jpg'];
var blacks = ['img/factory.jpg','img/tradingpost.jpg','img/warehouse.jpg'];
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
				'Statue of the Boundmaker'];

var resources = ['Madera','Trigo','Ladrillo','Vidrio','Piedra'];


			

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
		document.getElementById('resourceDisplay1').innerHTML = "<button id='wood' class='button' style='background-color: #4B1610; border: 1px solid black; margin: 10px; padding: 5px; color: #fff;'>  Madera </button>";
	} else if (randomResources1 == 1) {
		document.getElementById('resourceDisplay1').innerHTML = "<button id='wheat' class='button' style='background-color: yellow; color: black; border: 1px solid black;margin: 10px;padding: 5px;'>  Trigo </button>";
	} else if (randomResources1 == 2) {
		document.getElementById('resourceDisplay1').innerHTML = "<button id='brick'class='button' style='background-color: red; border: 1px solid black;margin: 10px;padding: 5px;color: #fff;'>  Ladrillo </button>";
	} else if (randomResources1 == 3) {	
		document.getElementById('resourceDisplay1').innerHTML = "<button id='glass' class='button' style='background-color: blue; border: 1px solid black;margin: 10px;padding: 5px;color: #fff;'>  Vidrio </button>";
	} else if (randomResources1 == 4) {
		document.getElementById('resourceDisplay1').innerHTML = "<button id='stone' class='button' style='background-color: gray; border: 1px solid black;margin: 10px;padding: 5px;'>  Piedra </button>";
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

changeResources();
changeImage();

var botones = document.getElementsByClassName('button');;

for(var i = 0; i < botones.length; i++){
  botones[i].addEventListener('click', chooseResource);
}

function capturar(){
  console.log(this.id);
}

function chooseResource(){
	if(this.id == 'wood'){
		displayBuild(1);
		console.log(1)
	} else if(this.id == 'wheat'){
		displayBuild(2);
		console.log(2);
	} else if(this.id == 'brick'){
		displayBuild(2);
		console.log(2);
	} else if(this.id == 'glass'){
		displayBuild(2);
		console.log(2);
	} else if(this.id == 'stone'){
		displayBuild(2);
		console.log(2);
	}
}



/*function displayBuild(valueResource) {
	if (valueResource == 2){
		document.getElementById('box_0_0').innerHTML = `<img src='img/red.png'></img>
		<img src="img/bush.png" class="bush bush-top-left">
                        <img src="img/bush.png" class="bush bush-top-right">
                        <img src="img/bush.png" class="bush bush-bottom-left">
						<img src="img/bush.png" class="bush bush-bottom-right">`;
		} else if (chooseResource() == 2){
		document.getElementById('box_0_0').innerHTML = `<img src='img/red.png'></img>
		<img src="img/bush.png" class="bush bush-top-left">
                        <img src="img/bush.png" class="bush bush-top-right">
                        <img src="img/bush.png" class="bush bush-bottom-left">
						<img src="img/bush.png" class="bush bush-bottom-right">`;
		} else if (chooseResource() == 2){
		document.getElementById('box_0_0').innerHTML = `<img src='img/red.png'></img>
		<img src="img/bush.png" class="bush bush-top-left">
                        <img src="img/bush.png" class="bush bush-top-right">
                        <img src="img/bush.png" class="bush bush-bottom-left">
						<img src="img/bush.png" class="bush bush-bottom-right">`;
		} else if (chooseResource() == 2){
		document.getElementById('box_0_0').innerHTML = `<img src='img/red.png'></img>
		<img src="img/bush.png" class="bush bush-top-left">
                        <img src="img/bush.png" class="bush bush-top-right">
                        <img src="img/bush.png" class="bush bush-bottom-left">
						<img src="img/bush.png" class="bush bush-bottom-right">`;
		} else if (chooseResource() == 2){
			document.getElementById('box_0_0').innerHTML = `<img src='img/red.png'></img>
			<img src="img/bush.png" class="bush bush-top-left">
							<img src="img/bush.png" class="bush bush-top-right">
							<img src="img/bush.png" class="bush bush-bottom-left">
							<img src="img/bush.png" class="bush bush-bottom-right">`;
			}
		}*/
		

function conditionalCottage(){
	for(var row=0; row<boardArray.length; row++){
		for(let col=0; col<boardArray.length; col++){
			if(col<3){
				if((boardArray[row][col] === 3) && (boardArray[row][(col+1)] === 4)){
					
					if(row>0){
						if((boardArray[(row-1)][(col+1)] === 2)){
							alert("Cottage H1");
						}
					}
					if(row<3){
						if((boardArray[(row+1)][(col+1)] === 2)){
							alert("Cottage H2");
						}
					}
				}
			}
			if(col>0){
				if((boardArray[row][col] === 3) && (boardArray[row][(col-1)] === 4)){
				
					if(x>0){
						if((boardArray[(row-1)][(col-1)] === 2)){
							alert("Cottage H3");
						}
					}
					if(x<3){
						if((boardArray[(row+1)][(col-1)] === 2)){
							alert("Cottage H4");
						}
					}
				}
			}
		}
	}
	for(let y=0; y<boardArray.length; y++){
		for(let x=0; x<boardArray.length; x++){
			if(x>0){
				if((boardArray[x][y] === 3) && (boardArray[(x-1)][y] === 4)){
				
					if((boardArray[(x-1)][(y+1)] === 2)){
						alert("Cottage V1");
					}
					if((boardArray[(x-1)][(y-1)] === 2)){
						alert("Cottage V2");
					}
				}
			}
			if((boardArray[x][y] === 3) && (boardArray[(x+1)][y] === 4)){
			
				if((boardArray[(x+1)][(y+1)] === 2)){
					alert("Cottage V3");
				}
				if((boardArray[(x+1)][(y-1)] === 2)){
					alert("Cottage V4");
				}
			}
		}
	}
}

function conditionAbbey(){
	for(let x=0; x<myarray.length; x++){
		for(let y=0; y<myarray.length; y++){
			if((myarray[x][y] === 5) && (myarray[x][(y-1)] === 5) && (myarray[x][(y-2)] === 3)){
				if(x>0){
					if ((myarray[(x-1)][y] === 4)){
						alert("Abbey H1");
					}
				}
				if((myarray[(x+1)][y] === 4)){
					alert("Abbey H2");
				}
			}
			if((myarray[x][y] === 5) && (myarray[x][(y+1)] === 5) && (myarray[x][(y+2)] === 3)){
				if(x>0){
					if ((myarray[(x-1)][y] === 4)){
						alert("Abbey H3");
					}
				}
				if((myarray[(x+1)][y] === 4)){
					alert("Abbey H4");
				}
			}
		}
	}
	for(let y=0; y<myarray.length; y++){
		for(let x=0; x<myarray.length; x++){
			if(x<2){
				if((myarray[x][y] === 5) && (myarray[(x+1)][y] === 5) && (myarray[(x+2)][y] === 3)){
					if((myarray[x][(y+1)] === 4)){
						alert("Abbey V1");
					}
					if((myarray[x][(y-1)] === 4)){
						alert("Abbey V2");
					}
				}
			}
			if(x>1){
				if((myarray[x][y] === 5) && (myarray[(x-1)][y] === 5) && (myarray[(x-2)][y] === 3)){
					if((myarray[x][(y+1)] === 4)){
						alert("Abbey V3");
					}
					if((myarray[x][(y-1)] === 4)){
						alert("Abbey V4");
					}
				}
			}
		}
	}
}
	

})