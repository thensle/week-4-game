$(document).ready(function(){
//Game State Initializer and storing variables

var blueGemValue = crystalValue();
var greenGemValue = crystalValue();
var orangeGemValue = crystalValue();
var yellowGemValue = crystalValue();

var crystalCollector = {
	userScore: 0,
	targetScore: targetNumber(),
	winCounter: 0,
	lossCounter: 0
};

//At initial game start, display wins/loss counter and target score

	$(".wins").html(crystalCollector.winCounter);
	$(".losses").html(crystalCollector.lossCounter);
	$(".target").html(crystalCollector.targetScore);

//Event Listeners for crystal buttons



//FUNCTIONS

//Getting a random Target Number
function targetNumber(){
	var min = 19; 
	var max = 120;
	var number = Math.floor(Math.random() * (max - min) + min + 1);
	return number;
};

//Randomly assigning a value to the crystals

function crystalValue(){
	var min = 1; 
	var max = 12;
	var number = Math.floor(Math.random() * (max - min) + min + 1);
	return number;
};


});