 document.addEventListener('DOMContentLoaded', function() {

     var $koerpergewichtValue = document.querySelector('.f2_koerpergewicht-input');
     var $koerpergrosseValue  = document.querySelector('.f2_koerpergrosse-input'); 
     var $outputKMValue       = document.querySelector('.f2_korperoberflache-mosteller-output'); 
     var $outputKDValue       = document.querySelector('.f2_korperoberflache-dubois-output'); 
     
     //Reset button
    document.querySelector('.f2_btn-reset').addEventListener('click', function(event) {

	//Stop form input submission
	event.preventDefault();

	//Reset inputs and outputs
	$koerpergewichtValue.value='';
	$koerpergrosseValue.value='';
	$outputKMValue.value='';	
	$outputKDValue.value='';	
    });

    //Calculate button
    document.querySelector('.f2_btn-calc').addEventListener('click', function(event) {
	
	//Stop form input submission
	event.preventDefault();
	
	//Array based on inputs 
	var inputArray = [$koerpergewichtValue, $koerpergrosseValue];

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
	$outputKMValue.value  = '';	
	$outputKDValue.value  = '';	
	
	//Calculate Formula, rounded
	$outputKMValue.value = calculateFormulaKM(formulaArray[0], formulaArray[1]);		
	$outputKDValue.value = calculateFormulaKD(formulaArray[0], formulaArray[1]);	

	
    });
});


/**
 * Calcium Formulas
 * @param  {number} input1 - First parameter should be Koerpergewicht Value
 * @param {number} input2 - Second parameter should be Koerpergrosse Value
 * @return {number} Calculated value
 */

function calculateFormulaKM(input1, input2){ 	
    return Math.round(Math.sqrt(input1*input2/3600) * 10000)/10000;	    
}

function calculateFormulaKD(input1, input2){ 	
    return  Math.round(0.007184*Math.pow(input2,0.725)*Math.pow(input1,0.425) * 10000)/10000;	    
}
