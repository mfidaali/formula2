var $sodiumValue      = document.querySelector('#Sodium-Input');
var $potassiumValue   = document.querySelector('#Potassium-Input');
var $chlorideValue    = document.querySelector('#Chloride-Input');
var $bicarbonateValue = document.querySelector('#Bicarbonate-Input');
var $outputValue      = document.querySelector('#Anion');
var $normbereichValue = document.querySelector('#Normbereich');

var normbereichHash = {
    "with_potassium"     : "16 \xB1 4 mmol/L",
    "without_potassium"  : "11 \xB1 4 mmol/L"
};

document.addEventListener('DOMContentLoaded', function() {
    //Reset button
    document.getElementById('btnReset').addEventListener('click', function(event) {

	//Stop form input submission
	event.preventDefault();

	//Reset inputs and outputs
	$sodiumValue.value='';
	$potassiumValue.value='';
	$chlorideValue.value='';
	$bicarbonateValue.value='';
	$outputValue.value='';
	$normbereichValue.value  = '';	
    });
    
    //Calculate button
    document.getElementById('btnCalc').addEventListener('click', function(event) {
	
	//Stop form input submission
	event.preventDefault();
	
	//Create number obj based on input and make sure it is indeed a number 
	var sodiumNum      = createNumCommaAndPoint($sodiumValue.value);
	var potassiumNum   = createNumCommaAndPoint($potassiumValue.value);
	var chlorideNum    = createNumCommaAndPoint($chlorideValue.value);
	var bicarbonateNum = createNumCommaAndPoint($bicarbonateValue.value);
	if(!validateNum($sodiumValue, sodiumNum) || !validateNumWithEmptyString($potassiumValue, potassiumNum) || !validateNum($chlorideValue, chlorideNum) || !validateNum($bicarbonateValue, bicarbonateNum)){ 
	    return;
	}
	
	//Reset all ouput values before calculating
	$outputValue.value  = '';	
	$normbereichValue.value  = '';	
	
	//Calculate Formula
	$outputValue.value = calculateFormula(sodiumNum, potassiumNum, chlorideNum, bicarbonateNum);

	if (potassiumNum != "" && potassiumNum != '0'){
	    $normbereichValue.value = normbereichHash['with_potassium'];	
	}
	else{	    
	    $normbereichValue.value = normbereichHash['without_potassium'];	
	}
	    
    });
});

/**
 * Calcium Formulas
 * @param  {number} input1 - First parameter should be sodium Value
 * @param {number} input2 - Second parameter should be potassium Value
 * @param {number} input3 - Second parameter should be chloride Value
 * @param {number} input4 - Second parameter should be bicarbonate Value
 * @return {number} Calculated value
 */

function calculateFormula(input1, input2, input3, input4){ 	
    return (input1 + input2) - (input3 + input4);
}

