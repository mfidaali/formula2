var selectPlaceholdersHash = {
    "ms"   : "in ms",
    "50_mm": "in mm",
    "25_mm": "in mm"
};

document.addEventListener('DOMContentLoaded', function() {

    var $qtValue          = document.querySelector('.f2_qt-input'); 
    var $freqValue        = document.querySelector('.f2_freq-input');
    var $qtUnitSelect     = document.querySelector('.f2_select-qt-units');
    var $outputValue      = document.querySelector('.f2_qt-output'); 
    var $outputNormValues = document.querySelector('.f2_norm-values'); 

    //Array based on inputs 
    var inputArray = [$qtValue, $freqValue];
    
    //Change placeholders and inputted values based on selected QT units
    $qtUnitSelect.addEventListener('change', function() {
    	$qtValue.placeholder = selectPlaceholdersHash[$qtUnitSelect.value];
    });

    //Reset button
    document.querySelector('.f2_btn-reset').addEventListener('click', function(event) {
	//Stop form input submission
	event.preventDefault();

	//Reset inputs and outputs
	for (var i=0; i<inputArray.length; i++){
	    inputArray[i].value='';
	    inputArray[i].classList.remove('f2_input__error');
	}
	$outputValue.value = '';
	$outputNormValues.innerHTML = '';
    });
    
    //Calculate button
    document.querySelector('.f2_btn-calc').addEventListener('click', function(event) {
	//Stop form input submission
	event.preventDefault();

	//Reset all ouput values before calculating
	$outputValue.value='';	
	$outputNormValues.innerHTML = '';
	for (var i=0; i<inputArray.length; i++){
	    inputArray[i].classList.remove('f2_input__error');
	}

	//Array of inputs for Formula
	var formulaArray= [];
	
	//Create number obj based on input and make sure it is indeed a number.
	//If all checks are good, add to formulaArray inputs 
	for (i=0; i<inputArray.length; i++){
	    var num = createNumCommaAndPoint(inputArray[i].value);
	    if (!validateNum(num)){
		inputArray[i].classList.add('f2_input__error');
		return;
	    }
	    else{
		formulaArray.push(num);
	    }
	}
		
	//Calculate Formula, rounded
	if($qtUnitSelect.value=="ms"){
	    $outputValue.value = "QTc: " + calculateFormulaMS(formulaArray[0], formulaArray[1]) + " ms";
	}
	else if($qtUnitSelect.value=="50_mm"){
	    $outputValue.value = "QTc: " + calculateFormula50(formulaArray[0], formulaArray[1]) + " ms";
	}
	else if($qtUnitSelect.value=="25_mm"){
	    $outputValue.value = "QTc: " + calculateFormula25(formulaArray[0], formulaArray[1]) + " ms";
	}

	$outputNormValues.innerHTML = "Norm: 350-440 ms";
	
    });
});

/**
 * Formulas
 * @param  {number} input1 - First parameter should be QT Value in ms
 * @param {number} input2 - Second parameter should be freq Value
 * @return {number} Calculated value
 */			  
function calculateFormulaMS(input1, input2){ 	
    return Math.round((input1/Math.sqrt(60/input2)) * 10000)/10000;
}

/**
 * Formulas
 * @param  {number} input1 - First parameter should be QT Value in 50 mm/s
 * @param {number} input2 - Second parameter should be freq Value
 * @return {number} Calculated value
 */			  
function calculateFormula50(input1, input2){
    var seconds = Math.round(input1*1000/50 * 10000)/10000;
    return Math.round((seconds/Math.sqrt(60/input2)) * 10000)/10000;
}

/**
 * Formulas
 * @param  {number} input1 - First parameter should be QT Value in 25 mm/s
 * @param {number} input2 - Second parameter should be freq Value
 * @return {number} Calculated value
 */			  
function calculateFormula25(input1, input2){ 	
    var seconds = Math.round(input1*1000/25 * 10000)/10000;
    return Math.round((seconds/Math.sqrt(60/input2)) * 10000)/10000;
}
