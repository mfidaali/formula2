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
    arrayInputObj4, 
    
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
	if (arrayInput[i][0].checked==false && arrayInput[i][1].checked==false && arrayInput[i][2].checked==false){
	    alert(arrayInput[i][0].id+' or '+arrayInput[i][1].id+' or '+arrayInput[i][2].id+' has not been checked. One of them must be checked');
	    break;
	}
	else{
	    for(var x=0; x<arrayInput[i].length; x++){
		if (arrayInput[i][x].checked==true){
		    totalScore+= new Number(arrayInput[i][x].value);
		}
	    }
	}
    }
    arrayOutput[0].value = totalScore;

    //Set variables
    var child;
    var punktanzahl;
    var uberlebensrate;
        
    if((arrayOutput[0].value==5) || (arrayOutput[0].value==6)){
     	child = "Child A";
	punktanzahl = "5-6";
	uberlebensrate = "ca. 100%";
    }
    else if((arrayOutput[0].value>6) &&  (arrayOutput[0].value<10)){
	child = "Child B";
	punktanzahl = "7-9";
	uberlebensrate = "ca. 85%";
    }
    else {
	child = "Child C";
	punktanzahl = "10-15";
	uberlebensrate = "ca. 35%";
    }


    
    //Print Outputs
    arrayOutputText.innerHTML = "Stadium: "+child+"<br>Punktanzahl: "+punktanzahl+"<br>Ueberlebensrate: "+uberlebensrate;
	
    
    //if((arrayOutput[0].value==5) || (arrayOutput[0].value==6)){
    // 	arrayOutputText.innerHTML = ;
    //}
    //else if(arrayOutput[0].value == 1){
    // 	arrayOutputText.innerHTML = tiaSymptoms + "<br>Intermediate risk of thromboembolic event. 2.8% risk of event per year if no coumadin.<br>" + ending;
    //}
    //else if(arrayOutput[0].value == 2){
    // 	arrayOutputText.innerHTML = tiaSymptoms + "<br>Intermediate risk of thromboembolic event. 4.0% risk of event per year if no coumadin.<br>" + ending;
    //}
    //else if(arrayOutput[0].value == 3){
    // 	arrayOutputText.innerHTML = tiaSymptoms + "<br>High risk of thromboembolic event. 5.9% risk of event per year if no coumadin.<br>" + ending;
    //}
    //else if(arrayOutput[0].value == 4){
    // 	arrayOutputText.innerHTML = tiaSymptoms + "<br>High risk of thromboembolic event. 8.5% risk of event per year if no coumadin.<br>" + ending;
    //}    
    //else if(arrayOutput[0].value == 5){
    // 	arrayOutputText.innerHTML = tiaSymptoms + "<br>High risk of thromboembolic event. 12.5% risk of event per year if no coumadin.<br>" + ending;
    //}
    //else
    // 	arrayOutputText.innerHTML = tiaSymptoms + "<br>High risk of thromboembolic event. 18.2% risk of event per year if no coumadin.<br>" + ending;
}

