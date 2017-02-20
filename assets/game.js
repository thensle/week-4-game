$(document).ready(function(){
//Game State Initializer and storing variables

var crystalCollector = {
	userScore: 0,
	targetScore: targetNumber(),
	winCounter: 0,
	lossCounter: 0
};

var blueGemValue = crystalValue();
var greenGemValue = crystalValue();
var orangeGemValue = crystalValue();
var yellowGemValue = crystalValue();


//At initial game start, display wins/loss counter and target score

	$(".wins").html(crystalCollector.winCounter);
	$(".losses").html(crystalCollector.lossCounter);
	$(".target").html(crystalCollector.targetScore);

//Event Listeners for crystal buttons

$(".blue-gem").on("click", function(){
	addingCrystalValue(blueGemValue);
	winOrLose();
});

$(".green-gem").on("click", function(){
	addingCrystalValue(greenGemValue);
	winOrLose();
});

$(".orange-gem").on("click", function(){
	addingCrystalValue(orangeGemValue);
	winOrLose();
});

$(".yellow-gem").on("click", function(){
	addingCrystalValue(yellowGemValue);
	winOrLose();
});

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

//Adding crystal values to the user score

function addingCrystalValue(number){
	var result = number + crystalCollector.userScore;
	crystalCollector.userScore = result;
	$(".score").html(crystalCollector.userScore);
};

//Checking if player won or lost

function winOrLose(){

	//Check if win
	if (crystalCollector.userScore === crystalCollector.targetScore){
		crystalCollector.winCounter++;
		reset();
		alert("Congrats, you've won!");
	};

	//Check if lose
	if (crystalCollector.userScore > crystalCollector.targetScore){
		crystalCollector.lossCounter++;
		reset();
		alert("Oh no! Try again!");
	};

};

//Use "gameDone" variable to reset board (targetScore, crystal values, user score)

function reset(){

	//Reset user and target numbers, randomize new crystal values
	crystalCollector.userScore = 0;
	crystalCollector.targetScore = targetNumber();
	blueGemValue = crystalValue();
	greenGemValue = crystalValue();
	orangeGemValue = crystalValue();
	yellowGemValue = crystalValue();

	//Display this for user
	$(".wins").html(crystalCollector.winCounter);
	$(".losses").html(crystalCollector.lossCounter);
	$(".target").html(crystalCollector.targetScore);
	$(".score").empty();
};

});