var arrayInputObj0 = document.getElementsByName("formulaObj0");
var arrayInputObj1 = document.getElementsByName("formulaObj1");
var arrayInputObj2 = document.getElementsByName("formulaObj2");
var arrayInputObj3 = document.getElementsByName("formulaObj3");
var arrayInputObj4 = document.getElementsByName("formulaObj4");
var arrayInputObj5 = document.getElementsByName("formulaObj5");
var arrayInputObj6 = document.getElementsByName("formulaObj6");
var arrayInputObj7 = document.getElementsByName("formulaObj7");
var arrayInputObj8 = document.getElementsByName("formulaObj8");


var arrayInputObjVal = [
    arrayInputObj0,
    arrayInputObj1, 
    arrayInputObj2, 
    arrayInputObj3, 
    arrayInputObj4, 
    arrayInputObj5,
    arrayInputObj6, 
    arrayInputObj7, 
    arrayInputObj8
];

var arrayOutputObj  = document.getElementsByName("formulaFinal");
var arrayOutputText = document.getElementById("scoreText");

window.onload=function() {
    document.getElementById('btnReset').onclick = function(){
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
	resetValRadio(arrayInputObj7);
	resetValRadio(arrayInputObj8);
	resetVal(arrayOutputObj);
	arrayOutputText.innerHTML = "";
    }
    document.getElementById('btnCalc').onclick = function(){
	//Stop form input submission
	event.preventDefault();
	
	//Calculate Formula
	calculateFormula(arrayInputObjVal, arrayOutputObj, arrayOutputText);
    }
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
    

    //Print Outputs
    arrayOutputText.innerHTML = "Ein Score von > 3 zeigt ein erhoehtes Risiko an fuer:<br>-Hirnblutung<br>-Blutung mit Notwendigkeit eines stationaeren Aufenthaltes<br>-Hb-Abfall > 2g/l<br>-Transfusionbeduerftigkeit<br><br>Diese Patienten beduerfen einer genauen Ueberwachung und einer INR-Kontrolle mindestens alle 2 Wochen! Eine regelmaessige Neubewertung der Situation sollte ebenfalls vorgenommen werden";
   
}

