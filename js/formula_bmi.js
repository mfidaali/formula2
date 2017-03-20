var $koerpergewichtValue = document.querySelector('#Koerpergewicht-Input'); // ID notation
var $koerpergrosseValue  = document.querySelector('#Koerpergrosse-Input'); 
var $outputKMValue       = document.querySelector('#Korperoberflache-Mosteller'); 
var $outputKDValue       = document.querySelector('#Korperoberflache-Dubois'); 
var $outputBMIValue      = document.querySelector('#BMI'); 


document.addEventListener('DOMContentLoaded', function() {
    //Reset button
    document.getElementById('btnReset').addEventListener('click', function(event) {

	//Stop form input submission
	event.preventDefault();

	//Reset inputs and outputs
	$koerpergewichtValue.value='';
	$koerpergrosseValue.value='';
	$outputKMValue.value='';	
	$outputKDValue.value='';	
	$outputBMIValue.value='';	
    });

    //Calculate button
    document.getElementById('btnCalc').addEventListener('click', function(event) {
	
	//Stop form input submission
	event.preventDefault();
	
	//Create number obj based on input and make sure it is indeed a number 
	var koerpergewichtNum= createNumCommaAndPoint($koerpergewichtValue.value);
	var koerpergrosseNum= createNumCommaAndPoint($koerpergrosseValue.value);
	if(!validateNum($koerpergrosseValue, koerpergrosseNum) || !validateNum($koerpergewichtValue, koerpergewichtNum)){ 
	    return;
	}
	
	//Reset all ouput values before calculating
	$outputKMValue.value  = '';	
	$outputKDValue.value  = '';	
	$outputBMIValue.value = '';
	
	//Calculate Formula, rounded
	$outputKMValue.value = calculateFormulaKM(koerpergewichtNum, koerpergrosseNum);	
	$outputKDValue.value = calculateFormulaKD(koerpergewichtNum, koerpergrosseNum);	
	$outputBMIValue.value = calculateFormulaBMI(koerpergewichtNum, koerpergrosseNum);	

	
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

function calculateFormulaBMI(input1, input2){ 	
    return Math.round(input1/0.0001/Math.pow(input2,2) * 1000)/1000;		    
}
