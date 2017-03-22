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

var arrayInputObjVal = [
    arrayInputObj0,
    arrayInputObj1, 
    arrayInputObj2, 
    arrayInputObj3, 
    arrayInputObj4 
    
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

    //Check if Q5 is yes or not
    var tiaSymptoms="";
    if (arrayInput[4][0].checked==true){
	tiaSymptoms="Note: While history of stroke provides 2 points, most physicians would move these patients directly to the high risk group (>8.5% risk of event per year if no coumadin.)<br>";
    }
    

    //Print Outputs
    var ending= "<br>The adjusted stroke rate was the expected stroke rate per 100 person-years derived from the multivariable model assuming that aspirin was not taken.<br>";
    if(arrayOutput[0].value == 0){
	arrayOutputText.innerHTML = tiaSymptoms + "<br>Low risk of thromboembolic event. 1.9% risk of event per year if no coumadin.<br>" + ending;
    }
    else if(arrayOutput[0].value == 1){
	arrayOutputText.innerHTML = tiaSymptoms + "<br>Intermediate risk of thromboembolic event. 2.8% risk of event per year if no coumadin.<br>" + ending;
    }
    else if(arrayOutput[0].value == 2){
	arrayOutputText.innerHTML = tiaSymptoms + "<br>Intermediate risk of thromboembolic event. 4.0% risk of event per year if no coumadin.<br>" + ending;
    }
    else if(arrayOutput[0].value == 3){
	arrayOutputText.innerHTML = tiaSymptoms + "<br>High risk of thromboembolic event. 5.9% risk of event per year if no coumadin.<br>" + ending;
    }
    else if(arrayOutput[0].value == 4){
	arrayOutputText.innerHTML = tiaSymptoms + "<br>High risk of thromboembolic event. 8.5% risk of event per year if no coumadin.<br>" + ending;
    }    
    else if(arrayOutput[0].value == 5){
	arrayOutputText.innerHTML = tiaSymptoms + "<br>High risk of thromboembolic event. 12.5% risk of event per year if no coumadin.<br>" + ending;
    }
    else
	arrayOutputText.innerHTML = tiaSymptoms + "<br>High risk of thromboembolic event. 18.2% risk of event per year if no coumadin.<br>" + ending;
}

