var selectPlaceholdersHash = {
    "mmol": "Norm: 2.20 - 2.65 mmol/L",
    "mg"  : "Norm: 8.80 - 10.60 mg/dL",
    "L"   : "Norm: 35 - 50 g/L",
    "dL"  : "Norm: 3.5 - 5.0 g/dL"
};


document.addEventListener('DOMContentLoaded', function() {

    var $calciumValue      = document.querySelector('.f2_calcium-input'); 
    var $albuminValue	   = document.querySelector('.f2_albumin-input'); 
    var $outputValue	   = document.querySelector('.f2_calcium-output');
    var $calciumUnitSelect = document.querySelector('.f2_select-calcium-units'); 
    var $albuminUnitSelect = document.querySelector('.f2_select-albumin-units'); 
    var $outputNormValues  = document.querySelector('.f2_norm-values'); 
    
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
	$albuminValue.placeholder = selectPlaceholdersHash[
	    $albuminUnitSelect.value];
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
    document.querySelector('.f2_btn-reset').addEventListener('click', function(event) {

	//Stop form input submission
	event.preventDefault();

	//Reset inputs and outputs
	$calciumValue.value = '';
	$albuminValue.value = '';
	$outputValue.value  = '';
	$outputNormValues.innerHTML='';

    });


    //Calculate button
    document.querySelector('.f2_btn-calc').addEventListener('click', function(event) {
	
	//Stop form input submission
	event.preventDefault();
	
	//Array based on inputs 
	var inputArray = [$calciumValue, $albuminValue];

	//Array of inputs for Formula
	var formulaArray= [];
	
	//Create number obj based on input and make sure it is indeed a number
	//If all checks are good, add to formulaArray inputs 
	for (var i=0; i<inputArray.length; i++){
	    var num = createNumCommaAndPoint(inputArray[i].value);
	    if (!validateNum(num)){
		var string = inputArray[i].getAttribute("class");
		alert(string+ ' is not an acceptable input. Please make sure to input a number and not a character or a blank');
		return;
	    }
	    else{
		formulaArray.push(num);
	    }
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
	    $outputValue.value = "Korrigiertes Calcium: "+ calculateFormulaL(formulaArray[0], formulaArray[1]) + " " + $outputFinalUnits;
	}
	else{
	    $outputValue.value = "Korrigiertes Calcium: "+ calculateFormulaDL(formulaArray[0], formulaArray[1]) + " " + $outputFinalUnits;
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
