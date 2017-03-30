document.addEventListener('DOMContentLoaded', function() {

    //Global Variables
    var questionStrings = ['Aterielle',
			   'Niereninsuffizien',
			   'Leberfunktion',
			   'Age',
			   'Schlaganfall',
			   'Blutungsereignis',
			   'INR-Blutungsereignis',
			   'beeinflussen',
			   'Alkohol-Abusus'];
    
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
	//Description for tiasymptoms below
	var tiaSymptoms="";

	for (var x=0; x<arrayOfHashQuestions.length; x++){
	    if (arrayOfHashQuestions[x]['yes'].checked==true){
		totalScore += new Number(arrayOfHashQuestions[x]['yes'].value);
	    }
	    //Check to see if any radio button sets have not been selected
	    else if(arrayOfHashQuestions[x]['no'].checked==false){
		alert(arrayOfHashQuestions[x]['no'].id+' or '+arrayOfHashQuestions[x]['yes'].id+' has not been checked. One of them must be checked');
		return;
	    }
	}

	//Output calculated value 
	$outputValue.value = totalScore;

	//Print associated output Text
	$outputText.innerHTML = "Ein Score von > 3 zeigt ein erhoehtes Risiko an fuer:<br>-Hirnblutung<br>-Blutung mit Notwendigkeit eines stationaeren Aufenthaltes<br>-Hb-Abfall > 2g/l<br>-Transfusionbeduerftigkeit<br><br>Diese Patienten beduerfen einer genauen Ueberwachung und einer INR-Kontrolle mindestens alle 2 Wochen! Eine regelmaessige Neubewertung der Situation sollte ebenfalls vorgenommen werden";
	
    });
});


