var $calciumValue      = document.querySelector('#Calcium-Input'); // ID notation
var $albuminValue      = document.querySelector('#Albumin-Input'); // ID notation
var $outputValue       = document.querySelector('#Calcium-Output'); // ID notation
var $calciumUnitSelect = document.querySelector("#select-calcium-units"); // ID notation
var $albuminUnitSelect = document.querySelector("#select-albumin-units"); // ID notation
var $outputFinalUnits  = document.querySelector("#corrected-calcium-units"); // ID notation

var selectPlaceholdersHash = {
    "mmol": "Norm: 2.25 - 2.625",
    "mg"  : "Norm: 9 - 10.5",
    "L"   : "Norm: 35 - 55",
    "dL"  : "Norm: 3.5 - 5.5"
};

document.addEventListener('DOMContentLoaded', function() {

    //Change placeholders based on selected units
    $calciumUnitSelect.addEventListener('change', function() {
    	$calciumValue.placeholder = selectPlaceholdersHash[$calciumUnitSelect.value];
    });
    
    $albuminUnitSelect.addEventListener('change',function(){
	$albuminValue.placeholder = selectPlaceholdersHash[$albuminUnitSelect.value];
    });
    
    
    //Reset button
    document.getElementById('btnReset').addEventListener('click', function(event) {

	//Stop form input submission
	event.preventDefault();

	//Reset inputs and outputs
	$calciumValue.value = '';
	$albuminValue.value = '';
	$outputValue.value  = '';	
    });


    //Calculate button
    document.getElementById('btnCalc').addEventListener('click', function(event) {
	
	//Stop form input submission
	event.preventDefault();
	
	//Create number obj based on input and make sure it is indeed a number 
	var calciumNum= createNumCommaAndPoint($calciumValue.value);
	var albuminNum= createNumCommaAndPoint($albuminValue.value);
	if(!validateNum($calciumValue, calciumNum) || !validateNum($albuminValue, albuminNum)){ 
	    return;
	}
	
	//Reset all ouput values before calculating
	$outputValue.value = '';	
	
	//Calculate Formula based on $albuminUnitSelect
	if ($albuminUnitSelect.value=="L"){
	    $outputValue.value = calculateFormulaL(calciumNum, albuminNum);
	}
	else{
	    $outputValue.value = calculateFormulaDL(calciumNum, albuminNum);
	}
	
	//Display correct units based on $calciumUnitSelect
	if($calciumUnitSelect.value=="mmol"){
	    $outputFinalUnits.innerHTML = " mmol/L";
	}
	else{
	    $outputFinalUnits.innerHTML = " mg/dL";
	}	
    });
});

/**
 * Calcium Formulas based on different select options (L vs DL)
 * @param  {number} input1 - First parameter should be Calcium Value
 * @param {number} input2 - Second parameter should be Albumin Value
 * @return {number} Calculated value
 */

function calculateFormulaL(input1, input2){ 	
    return input1 - 0.025*input2 + 1;	    
}

function calculateFormulaDL(input1, input2){ 	
    return input1 - 0.25*input2 + 1;	    
}
