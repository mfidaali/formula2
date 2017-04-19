document.addEventListener('DOMContentLoaded', function() {

    var $qtValue        = document.querySelector('.f2_qt-input'); // ID notation
    var $freqValue      = document.querySelector('.f2_freq-input'); 
    var $outputValue    = document.querySelector('.f2_qt-output'); 

    //Reset button
    document.querySelector('.f2_btn-reset').addEventListener('click', function(event) {
	//Stop form input submission
	event.preventDefault();

	//Reset inputs and outputs
	$qtValue.value = '';
	$freqValue.value = '';
	$outputValue.value = '';	
    });
    
    //Calculate button
    document.querySelector('.f2_btn-calc').addEventListener('click', function(event) {
	//Stop form input submission
	event.preventDefault();

	//Array based on inputs 
	var inputArray = [$qtValue, $freqValue];

	//Array of inputs for Formula
	var formulaArray= [];
	
	//Create number obj based on input and make sure it is indeed a number.
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
	$outputValue.value = "QTc: " + calculateFormula(formulaArray[0], formulaArray[1]) + " ms";		
	
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
