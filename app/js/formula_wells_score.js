document.addEventListener('DOMContentLoaded', function() {

    //Global Variables
    var questionStrings = ['Klinische-Zeichen',
			   'Lungenembolie',
			   'Herzfrequenz',
			   'Immobilisierung',
			   'Beinvenenthrombose',
			   'Bluthusten',
			   'Tumorerkrankung'];
    
    var arrayOfHashQuestions=[];
    for (var i=0; i<questionStrings.length; i++){
	var hash= {
	    "yes": document.querySelector('#'+questionStrings[i]+'-Yes'),
	    "no": document.querySelector('#'+questionStrings[i]+'-No')
	};
	arrayOfHashQuestions.push(hash);
    }
    
    var $outputValue = document.querySelector('#Final-Score');
    var $outputText  = document.querySelector('#Final-Score-Text');

    //Reset button
    document.getElementById('btnReset').addEventListener('click', function(event) {
	//Stop form input submission
	event.preventDefault();

	//Reset radio buttons and outputs
	for (var x=0; x<arrayOfHashQuestions.length; x++){
	    arrayOfHashQuestions[x]['yes'].checked=false;
	    arrayOfHashQuestions[x]['no'].checked=false;
	    
	}	
	$outputValue.value  = '';
	$outputText.innerHTML = "";
    });
							 
    //Calculate button
    document.getElementById('btnCalc').addEventListener('click', function(event) {
	//Stop form input submission
	event.preventDefault();

	//Reset all ouput values before calculating
	$outputValue.value  = '';
	$outputText.innerHTML = "";

	//Add up all the "checked" yes radio values and create a "totalScore"
	var totalScore= new Number(0);
	for (var x=0; x<arrayOfHashQuestions.length; x++){
	    if (arrayOfHashQuestions[x]['yes'].checked==true){
		totalScore+=new Number(arrayOfHashQuestions[x]['yes'].value);
	    }
	    //Check to see if any radio button sets have not been selected
	    else if(arrayOfHashQuestions[x]['no'].checked==false){
		alert(arrayOfHashQuestions[x]['no'].id+' or '+arrayOfHashQuestions[x]['yes'].id+' has not been checked. One of them must be checked');
		return;
	    }
	}

	//Output calculated value and associated text
	$outputValue.value = totalScore;

	if($outputValue.value <= 1.5){
	    $outputText.innerHTML = "Geringe klinische Wahrscheinlichkeit fuer das Vorliegen einer Lungenembolie";
	}
	else if($outputValue.value > 1.5 && $outputValue.value < 6){
	    $outputText.innerHTML = "Mittlere klinische Wahrscheinlichkeit fuer das Vorliegen einer Lungenembolie";
	}
	else{
	    $outputText.innerHTML = "Hohe klinische Wahrscheinlichkeit fuer das Vorliegen einer Lungenembolie";
	} 
	
    });
});


