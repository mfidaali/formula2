document.addEventListener('DOMContentLoaded', function() {

    //Global Variables
    var questionStrings = ['Heart-Failure',
			   'Hypertension',
			   'Age',
			   'Diabetes',
			   'Stroke'];
    
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
	    //Check if Stroke Question is yes, and if so, add extra output text in tiaSymptoms
	    if (arrayOfHashQuestions[x]['yes'].id=="Stroke-Yes" && arrayOfHashQuestions[x]['yes'].checked==true){
		tiaSymptoms="Note: While history of stroke provides 2 points, most physicians would move these patients directly to the high risk group (>8.5% risk of event per year if no coumadin.)<br>";
	    }
	}

	//Output calculated value 
	$outputValue.value = totalScore;

	//Print associated output text
	var ending= "<br>The adjusted stroke rate was the expected stroke rate per 100 person-years derived from the multivariable model assuming that aspirin was not taken.<br>";
	if($outputValue.value == 0){
	    $outputText.innerHTML = tiaSymptoms + "<br>Low risk of thromboembolic event. 1.9% risk of event per year if no coumadin.<br>" + ending;
	}
	else if($outputValue.value == 1){
	    $outputText.innerHTML = tiaSymptoms + "<br>Intermediate risk of thromboembolic event. 2.8% risk of event per year if no coumadin.<br>" + ending;
	}
	else if($outputValue.value == 2){
	    $outputText.innerHTML = tiaSymptoms + "<br>Intermediate risk of thromboembolic event. 4.0% risk of event per year if no coumadin.<br>" + ending;
	}
	else if($outputValue.value == 3){
	    $outputText.innerHTML = tiaSymptoms + "<br>High risk of thromboembolic event. 5.9% risk of event per year if no coumadin.<br>" + ending;
	}
	else if($outputValue.value == 4){
	    $outputText.innerHTML = tiaSymptoms + "<br>High risk of thromboembolic event. 8.5% risk of event per year if no coumadin.<br>" + ending;
	}    
	else if($outputValue.value == 5){
	    $outputText.innerHTML = tiaSymptoms + "<br>High risk of thromboembolic event. 12.5% risk of event per year if no coumadin.<br>" + ending;
	}
	else{
	    $outputText.innerHTML = tiaSymptoms + "<br>High risk of thromboembolic event. 18.2% risk of event per year if no coumadin.<br>" + ending;
	}
	
    });
});
