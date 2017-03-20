var $koerpergewichtValue = document.querySelector('#Koerpergewicht-Input'); // ID notation

var arrayInputObj0 = document.getElementsByName("formulaObj0");
var arrayInputObj1 = document.getElementsByName("formulaObj1");
var arrayInputObj2 = document.getElementsByName("formulaObj2");
var arrayInputObj3 = document.getElementsByName("formulaObj3");
var arrayInputObj4 = document.getElementsByName("formulaObj4");
var arrayInputObj5 = document.getElementsByName("formulaObj5");
var arrayInputObj6 = document.getElementsByName("formulaObj6");

var arrayInputObjVal = [
    arrayInputObj0,
    arrayInputObj1, 
    arrayInputObj2, 
    arrayInputObj3, 
    arrayInputObj4, 
    arrayInputObj5, 
    arrayInputObj6 
    
];

var arrayOutputObj  = document.getElementsByName("formulaFinal");
var arrayOutputText = document.getElementById("scoreText");

document.addEventListener('DOMContentLoaded', function() {
    //Reset button
    document.getElementById('btnReset').addEventListener('click', function(event) {
	//Stop form input submission
	event.preventDefault();
	//Reset
	resetValRadio(arrayInputObj0);
	resetValRadio(arrayInputObj1);
	resetValRadio(arrayInputObj2);
	resetValRadio(arrayInputObj3);
	resetValRadio(arrayInputObj4);
	resetValRadio(arrayInputObj5);
	resetValRadio(arrayInputObj6);
	resetVal(arrayOutputObj);
	arrayOutputText.innerHTML = "";
    });
							 
    //Calculate button
    document.getElementById('btnCalc').addEventListener('click', function(event) {
	//Stop form input submission
	event.preventDefault();
	
	//Calculate Formula
	calculateFormula(arrayInputObjVal, arrayOutputObj, arrayOutputText);
    });
}

function calculateFormula(arrayInput, arrayOutput, arrayOutputText){ 	

    //Reset outputs before calculation
    resetVal(arrayOutput);
    arrayOutputText.innerHTML = "";
   
    
    //Calculate
    var totalScore= new Number(0);
    for(var i=0; i<arrayInput.length; i++){
	if (arrayInput[i][0].checked==true)
	{
	    totalScore+= new Number(arrayInput[i][0].value);
	}
	else if (arrayInput[i][0].checked==false && arrayInput[i][1].checked==false){
	    alert(arrayInput[i][0].id+' or '+arrayInput[i][1].id+' has not been checked. One of them must be checked');
	    break;
	}	    
    }
    arrayOutput[0].value = totalScore;
    if(arrayOutput[0].value <= 1.5){
	arrayOutputText.innerHTML = "Geringe klinische Wahrscheinlichkeit fuer das Vorliegen einer Lungenembolie";
    }
    else if(arrayOutput[0].value > 1.5 && arrayOutput[0].value < 6){
	arrayOutputText.innerHTML = "Mittlere klinische Wahrscheinlichkeit fuer das Vorliegen einer Lungenembolie";
    }
    else{
	arrayOutputText.innerHTML = "Hohe klinische Wahrscheinlichkeit fuer das Vorliegen einer Lungenembolie";
    }  
}

