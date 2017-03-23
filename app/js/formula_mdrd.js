var $scrValue    = document.querySelector('#Serum-Kreatinin-Input');
var $alterValue  = document.querySelector('#Alter-Input');
var $outputValue = document.querySelector("#eGFR");

document.addEventListener('DOMContentLoaded', function() {
    //Reset button
    document.getElementById('btnReset').addEventListener('click', function(event) {
	//Stop form input submission
	event.preventDefault();
	
	//Reset inputs and outputs
	$scrValue.value    = '';
	$alterValue.value  = '';
	$outputValue.value = '';
    });
    
    document.getElementById('btnCalc').addEventListener('click', function(event) {
	//Stop form input submission
	event.preventDefault();
	
	//Create number obj based on input and make sure it is indeed a number 
	var scrNum= createNumCommaAndPoint($scrValue.value);
	var alterNum= createNumCommaAndPoint($alterValue.value);
	if(!validateNum($scrValue, scrNum) || !validateNum($alterValue, alterNum)){ 
	    return;
	}
	//Reset all ouput values before calculating
	$outputValue.value = '';

	//Calculate Formula, rounded
	$outputValue.value = calculateFormula(scrNum, alterNum);	

    });
});

/**
 * Calcium Formulas
 * @param  {number} input1 - First parameter should be scr Value
 * @param {number} input2 - Second parameter should be alter Value
 * @return {number} Calculated value
 */	
function calculateFormula(input1, input2){ 	
    return Math.round((Math.exp(5228-(1154*Math.log(input1)) - (0.203* Math.log(input2)) - 0.299 + 0.192))*1000)/1000;
}
