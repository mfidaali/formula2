document.addEventListener('DOMContentLoaded', function() {    
    var $acicValue         = document.querySelector('#Aciclovir-Input'); // ID notation
    var $weightValue       = document.querySelector('#Weight-Input'); // ID notation
    var $acicUnitSelect    = document.querySelector("#select-acic-units"); // ID notation
    var $outputValue       = document.querySelector('#Final-Dosis-Output'); // ID notation
    var $outputFinalUnits  = document.querySelector("#Final-Dosis-Output-Units"); // ID notation

    
    var initialAcicSelectValue = $acicUnitSelect.value; 
    
    //Change placeholders and inputted values based on selected calcium units
    $acicUnitSelect.addEventListener('change', function() {
	var acicNum= createNumCommaAndPoint($acicValue.value);
    	//$acicValue.placeholder = selectPlaceholdersHash[$calciumUnitSelect.value];
	if(!isNaN(acicNum)){
	    if(initialAcicSelectValue=="mg"){
		$acicValue.value= $acicValue.value / 1000;
	    }
	    else{
		$acicValue.value= $acicValue.value * 1000;
	    }
	}
	initialAcicSelectValue = $acicUnitSelect.value;
    });
    
    //Reset button
    document.getElementById('btnReset').addEventListener('click', function(event) {

	//Stop form input submission
	event.preventDefault();
	
	//Reset inputs and outputs
	$acicValue.value = '';
	$weightValue.value = '';
	$outputValue.value  = '';		
    });


    //Calculate button
    document.getElementById('btnCalc').addEventListener('click', function(event) {
	
	//Stop form input submission
	event.preventDefault();

	//Reset all ouput values before calculating
	$outputValue.value = '';
	
	//Create number obj based on input and make sure it is indeed a number	
	var acicNum= createNumCommaAndPoint($acicValue.value);
	var weightNum= createNumCommaAndPoint($weightValue.value);
 
	if(!validateNum($acicValue, acicNum) || !validateNum($weightValue, weightNum)){ 
	    return;
	}
		
	//Calculate Formula based on $weightUnitSelect
	$outputValue.value = calculateFormula(acicNum, weightNum);
	
	//Display correct units based on $acicUnitSelect
	if($acicUnitSelect.value=="mg"){
	    $outputFinalUnits.innerHTML = "mg";
	}
	else{
	    $outputFinalUnits.innerHTML = "g";
	}	
    });
});

/**
 * 
 * @param  {number} input1 - First parameter should be Acic Value
 * @param  {number} input2 - Second parameter should be Weight Value
 * @return {number} Calculated value
 */

function calculateFormula(input1, input2){ 	
    return input1*input2;	    
}


if (typeof exports === 'object' && typeof exports.nodeName !== 'string' && typeof define !== 'function') {
    var define = function (factory) {
	factory(require, exports, module);
    };
 
    define(function (require, exports, module) {
	// Only attach properties to the exports object to define
	// the module's properties.
	exports.calculateFormula  = calculateFormulaL;
    });
}
