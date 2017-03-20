var $beValue     = document.querySelector('#BE-Input');
var $weightValue = document.querySelector('#weight-Input');
var $outputValue = document.querySelector('#NaHCO');

document.addEventListener('DOMContentLoaded', function() {
    //Reset button
    document.getElementById('btnReset').addEventListener('click', function(event) {

	//Stop form input submission
	event.preventDefault();

	//Reset inputs and outputs
	$beValue.value='';
	$weightValue.value='';
	$outputValue.value='';
    });
    //Calculate button
    document.getElementById('btnCalc').addEventListener('click', function(event) {
	
	//Stop form input submission
	event.preventDefault();
	
	//Create number obj based on input and make sure it is indeed a number 
	var beNum= createNumCommaAndPoint($beValue.value);
	var weightNum= createNumCommaAndPoint($weightValue.value);
	if(!validateNum($beValue, beNum) || !validateNum($weightValue, weightNum)){ 
	    return;
	}
	
	//Reset all ouput values before calculating
	$outputValue.value  = '';	
	
	//Calculate Formula, rounded
	$outputValue.value = calculateFormula(beNum, weightNum);	
    });
});

/**
 * Calcium Formulas
 * @param  {number} input1 - First parameter should be BE Value
 * @param {number} input2 - Second parameter should be weight Value
 * @return {number} Calculated value
 */

function calculateFormula(input1, input2){ 	
    return Math.round((input1 * input2 / 3)*1000)/1000;
}
