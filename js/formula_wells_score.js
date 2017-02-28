/*
  var arrayInputObj = [
  document.getElementsByName("formulaObj0");
  document.getElementsByName("formulaObj1");
  document.getElementsByName("formulaObj2");
  document.getElementsByName("formulaObj3");
  document.getElementsByName("formulaObj4");
  document.getElementsByName("formulaObj5");
  document.getElementsByName("formulaObj6");
  ]
*/

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

var arrayOutputObj = document.getElementsByName("formulaFinal");

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
	resetValRadio(arrayOutputObj);
    }
    document.getElementById('btnCalc').onclick = function(){
	//Stop form input submission
	event.preventDefault();
	
	//Calculate Formula
	calculateFormula(arrayInputObjVal, arrayOutputObj);
    }
}

function calculateFormula(arrayInput, arrayOutput){ 	

    //Reset outputs before calculation
    resetVal(arrayOutput);
    var totalScore= new Number(0);
    //Calculate
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
    if(arrayOutput[0].value<=1.5){
	arrayOutput[1].value="Geringe klinische Wahrscheinlichkeit für das Vorliegen einer Lungenembolie";
    }
    else if(arrayOutput[0]>1.5 && arrayOutput[0]<3){
	arrayOutput[1].value="Mittlere klinische Wahrscheinlichkeit für das Vorliegen einer Lungenembolie";
    }
    else{
	arrayOutput[1].value="High klinische Wahrscheinlichkeit für das Vorliegen einer Lungenembolie";

    }
	
	
}

