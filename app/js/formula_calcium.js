var $calciumValue      = document.querySelector('#Calcium-Input'); // ID notation
var $albuminValue      = document.querySelector('#Albumin-Input'); // ID notation
var $outputValue       = document.querySelector('#Calcium-Output'); // ID notation
var $calciumUnitSelect = document.querySelector("#select-calcium-units"); // ID notation
var $albuminUnitSelect = document.querySelector("#select-albumin-units"); // ID notation
var $outputNormValues  = document.querySelector("#Norm-Values"); // ID notation


var selectPlaceholdersHash = {
    "mmol": "Norm: 2.20 - 2.65",
    "mg"  : "Norm: 8.80 - 10.60",
    "L"   : "Norm: 35 - 50",
    "dL"  : "Norm: 3.5 - 5.0"
};


document.addEventListener('DOMContentLoaded', function() {

    var initialCalciumSelectValue = $calciumUnitSelect.value; 
    var initialAlbuminSelectValue = $albuminUnitSelect.value;
    
    //Change placeholders and inputted values based on selected calcium units
    $calciumUnitSelect.addEventListener('change', function() {
	var calciumNum;
	if($calciumValue.value!=''){
	    calciumNum= createNumCommaAndPoint($calciumValue.value);
	}
    	$calciumValue.placeholder = selectPlaceholdersHash[$calciumUnitSelect.value];
	if(!isNaN(calciumNum)){
	    if(initialCalciumSelectValue=="mmol"){
		$calciumValue.value= $calciumValue.value * 4;
	    }
	    else{
		$calciumValue.value= $calciumValue.value / 4;
	    }
	}
	initialCalciumSelectValue = $calciumUnitSelect.value;
    });

    //Change placeholders and inputted values based on selected albumin units
    $albuminUnitSelect.addEventListener('change',function(){
	var albuminNum;
	if ($albuminValue.value!=''){
	    albuminNum= createNumCommaAndPoint($albuminValue.value);
	}
	$albuminValue.placeholder = selectPlaceholdersHash[$albuminUnitSelect.value];
	if(!isNaN(albuminNum)){
	    if(initialAlbuminSelectValue=="L"){
		$albuminValue.value= $albuminValue.value / 10;
	    }
	    else{
		$albuminValue.value= $albuminValue.value * 10;
	    }
	}
	initialAlbuminSelectValue = $albuminUnitSelect.value;
    });
    
    
    //Reset button
    document.getElementById('btnReset').addEventListener('click', function(event) {

	//Stop form input submission
	event.preventDefault();

	//Reset inputs and outputs
	$calciumValue.value = '';
	$albuminValue.value = '';
	$outputValue.value  = '';
	$outputNormValues.innerHTML='';

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
	
	//Display correct units based on $calciumUnitSelect
	var $outputFinalUnits;
	if($calciumUnitSelect.value=="mmol"){
	    $outputFinalUnits = "mmol/L";
	    $outputNormValues.innerHTML=selectPlaceholdersHash["mmol"];
	}
	else{
	    $outputFinalUnits = "mg/dL";
	    $outputNormValues.innerHTML=selectPlaceholdersHash["mg"];
	}
	//Calculate Formula based on $albuminUnitSelect
	if ($albuminUnitSelect.value=="L"){
	    $outputValue.value = calculateFormulaL(calciumNum, albuminNum)  + " " + $outputFinalUnits;
	}
	else{
	    $outputValue.value = calculateFormulaDL(calciumNum, albuminNum) + " " + $outputFinalUnits;
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

if (typeof exports === 'object' && typeof exports.nodeName !== 'string' && typeof define !== 'function') {
    var define = function (factory) {
	factory(require, exports, module);
    };
 
    define(function (require, exports, module) {
	// Only attach properties to the exports object to define
	// the module's properties.
	exports.calculateFormulaL  = calculateFormulaL;
	exports.calculateFormulaDL = calculateFormulaDL;
    });
}
