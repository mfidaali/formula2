document.addEventListener('DOMContentLoaded', function() {

    //Global Variables
    var questionStrings = ['Serumalbumin',
			   'Bilirubin',
			   'INR',
			   'Aszites',
			   'Enzephalopathie'];
    
    var arrayOfHashQuestions=[];
    for (var i=0; i<questionStrings.length; i++){
	var hash= {
	    "1": document.querySelector('#'+questionStrings[i]+'-1'),
	    "2": document.querySelector('#'+questionStrings[i]+'-2'),
	    "3": document.querySelector('#'+questionStrings[i]+'-3')
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
	    arrayOfHashQuestions[x]['1'].checked=false;
	    arrayOfHashQuestions[x]['2'].checked=false;
	    arrayOfHashQuestions[x]['3'].checked=false;
	    
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

	//Add up all the "checked" radio values and create a "totalScore"
	var totalScore= new Number(0);

	for (var x=0; x<arrayOfHashQuestions.length; x++){
	    var flag=0;
	    for (var y=1; y<4; y++){
		if (arrayOfHashQuestions[x][y].checked==true){
		    totalScore += new Number(arrayOfHashQuestions[x][y].value);
		    flag=1;
		}
	    }
	    //Check to see if any radio button sets have not been selected and if so, throw an alert
	    if (flag==0){
		alert(arrayOfHashQuestions[x][1].id+' or '+arrayOfHashQuestions[x][2].id+' or '+arrayOfHashQuestions[x][3].id+' has not been checked. One of them must be checked');
		return;
	    }
	}
	
	//Output calculated value 
	$outputValue.value = totalScore;
	
	//Set variables for printing
	var child;
	var punktanzahl;
	var uberlebensrate;
        
	if(($outputValue.value==5) || ($outputValue.value==6)){
     	    child = "Child A";
	    punktanzahl = "5-6";
	    uberlebensrate = "ca. 100%";
	}
	else if(($outputValue.value>6) &&  ($outputValue.value<10)){
	    child = "Child B";
	    punktanzahl = "7-9";
	    uberlebensrate = "ca. 85%";
	}
	else {
	    child = "Child C";
	    punktanzahl = "10-15";
	    uberlebensrate = "ca. 35%";
	}
	
	//Print associated output text
	$outputText.innerHTML = "Stadium: "+child+"<br>Punktanzahl: "+punktanzahl+"<br>Ueberlebensrate: "+uberlebensrate;
		
    });
});

   

