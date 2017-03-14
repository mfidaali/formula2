var arrayInputObj  = document.getElementsByName("formulaObj");
var arrayOutputObj = document.getElementsByName("formulaFinal");

window.onload=function() {
	document.getElementById('btnReset').onclick = function(){
		//Stop form input submission
		event.preventDefault();
		//Reset
		resetVal(arrayInputObj);
		resetVal(arrayOutputObj);
	}
	document.getElementById('btnCalc').onclick = function(){
		//Stop form input submission
		event.preventDefault();
		//Check input values and get Number array
		var arrayInputObjVal = checkValuesAndCreateNumberObj(arrayInputObj);
		//Calculate Formula
		calculateFormula(arrayInputObjVal, arrayOutputObj);
	}
}

function calculateFormula(arrayInput, arrayOutput){ 	
	
    //Reset outputs before calculation
    resetVal(arrayOutput);
	
    //Check to see if values were put in all NON-OPTIONAL inputs
    if ((arrayInput[0]== "") || (arrayInput[2]== "") || (arrayInput[3]== "")){
	alert('A value was not inserted into Na, Cl, or HCO3. Please make sure to input a number or decimal');
	return;     	
    }
    //Calculate
    arrayOutput[0].value = (arrayInput[0] + arrayInput[1]) - (arrayInput[2] + arrayInput[3]);
}
