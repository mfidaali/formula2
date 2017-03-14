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
	
    //Calculate
    arrayOutput[0].value = Math.round((Math.exp(5228-(1154*Math.log(arrayInput[0])) - (0.203* Math.log(arrayInput[1])) - 0.299 + 0.192))*1000)/1000;
}
