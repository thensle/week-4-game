$(document).ready(function(){
//Game State Initializer and storing variables

var blueGemValue
var greenGemValue
var orangeGemValue
var yellowGemValue

var crystalCollector = {
	userScore: 0,
	targetScore: targetNumber()
};


//Getting a random Target Number

function targetNumber(){
	var min = 19; 
	var max = 120;
	var number = Math.floor(Math.random() * (max - min) + min + 1);
	console.log(number);



};
});