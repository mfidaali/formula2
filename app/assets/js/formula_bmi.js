document.addEventListener('DOMContentLoaded', function() {

    var $koerpergewichtValue = document.querySelector('.f2_koerpergewicht-input');
    var $koerpergrosseValue  = document.querySelector('.f2_koerpergrosse-input'); 
    var $outputValue         = document.querySelector('.f2_BMI-output'); 

    //Array based on inputs 
    var inputArray = [$koerpergewichtValue, $koerpergrosseValue];


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
	$outputValue.value = "BMI: "+ calculateFormulaBMI(formulaArray[0], formulaArray[1]);		
    });
});


/**
 * BMI Formulas
 * @param  {number} input1 - First parameter should be Koerpergewicht Value
 * @param {number} input2 - Second parameter should be Koerpergrosse Value
 * @return {number} Calculated value
 */

function calculateFormulaBMI(input1, input2){ 	
    return Math.round(input1/0.0001/Math.pow(input2,2) * 10)/10;		    
}
