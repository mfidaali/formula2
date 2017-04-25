document.addEventListener('DOMContentLoaded', function() {
    var $beValue     = document.querySelector('.f2_be-input');
    var $weightValue = document.querySelector('.f2_weight-input');
    var $outputValue = document.querySelector('.f2_nahco-output');

    //Array based on inputs 
    var inputArray = [$beValue, $weightValue];

    //Reset button
    document.querySelector('.f2_btn-reset').addEventListener('click', function(event) {

	//Stop form input submission
	event.preventDefault();

	//Reset inputs and outputs
	for (var i=0; i<inputArray.length; i++){
	    inputArray[i].value='';
	    inputArray[i].classList.remove('f2_input__error');
	}
	$outputValue.value='';
    });
    
    //Calculate button
    document.querySelector('.f2_btn-calc').addEventListener('click', function(event) {
	
	//Stop form input submission
	event.preventDefault();
	
	//Reset all ouput values before calculating
	$outputValue.value = '';
	for (var i=0; i<inputArray.length; i++){
	    inputArray[i].classList.remove('f2_input__error');
	}

	//Array of inputs for Formula
	var formulaArray= [];
	
	//Create number obj based on input and make sure it is indeed a number
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
	$outputValue.value = "NaHCO3: " + calculateFormula(formulaArray[0], formulaArray[1]) + " mmol";		
	
    });
});

/**
 * Bicarbonate Formulas
 * @param  {number} input1 - First parameter should be BE Value
 * @param {number} input2 - Second parameter should be weight Value
 * @return {number} Calculated value
 */

function calculateFormula(input1, input2){ 	
    return Math.round((input1 * input2 * 0.3)*1000)/1000;
}
