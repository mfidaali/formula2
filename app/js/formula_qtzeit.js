var $QTValue        = document.querySelector('#QT-Input'); // ID notation
var $freqValue      = document.querySelector('#Freq-Input'); 
var $outputQTValue  = document.querySelector('#QT-Output'); 

document.addEventListener('DOMContentLoaded', function() {
    //Reset button
    document.getElementById('btnReset').addEventListener('click', function(event) {
	//Stop form input submission
	event.preventDefault();

	//Reset inputs and outputs
	$QTValue.value = '';
	$freqValue.value = '';
	$outputQTValue.value = '';	
    });
    
    //Calculate button
    document.getElementById('btnCalc').addEventListener('click', function(event) {
	//Stop form input submission
	event.preventDefault();

	//Create number obj based on input and make sure it is indeed a number 
	var qtNum   = createNumCommaAndPoint($QTValue.value);
	var freqNum = createNumCommaAndPoint($freqValue.value);
	if(!validateNum($QTValue, qtNum) || !validateNum($freqValue, freqNum)){ 
	    return;
	}
	//Reset all ouput values before calculating
	$outputQTValue.value = '';

	//Calculate Formula, rounded
	$outputQTValue.value = calculateFormula(qtNum, freqNum);	
	
    });
});

/**
 * Calcium Formulas
 * @param  {number} input1 - First parameter should be QT Value
 * @param {number} input2 - Second parameter should be freq Value
 * @return {number} Calculated value
 */			  
function calculateFormula(input1, input2){ 	
    return Math.round((input1/Math.sqrt(60/input2)) * 10000)/10000;
}
