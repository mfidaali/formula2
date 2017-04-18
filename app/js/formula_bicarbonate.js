document.addEventListener('DOMContentLoaded', function() {
    var $beValue     = document.querySelector('.f2_be-input');
    var $weightValue = document.querySelector('.f2_weight-input');
    var $outputValue = document.querySelector('.f2_nahco-output');

    //Reset button
    document.querySelector('.f2_btn-reset').addEventListener('click', function(event) {

	//Stop form input submission
	event.preventDefault();

	//Reset inputs and outputs
	$beValue.value='';
	$weightValue.value='';
	$outputValue.value='';
    });
    
    //Calculate button
    document.querySelector('.f2_btn-calc').addEventListener('click', function(event) {
	
	//Stop form input submission
	event.preventDefault();
	
	//Array based on inputs 
	var inputArray = [$beValue, $weightValue];

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
	$outputValue.value='';	
	
	//Calculate Formula, rounded
	$outputValue.value = calculateFormula(formulaArray[0], formulaArray[1]) + " mmol";		
	
    });
});

/**
 * Calcium Formulas
 * @param  {number} input1 - First parameter should be BE Value
 * @param {number} input2 - Second parameter should be weight Value
 * @return {number} Calculated value
 */

function calculateFormula(input1, input2){ 	
    return Math.round((input1 * input2 * 0.3)*1000)/1000;
}
