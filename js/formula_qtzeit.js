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
	
    //Calculate, with rounding
    arrayOutput[0].value = Math.round((arrayInput[0]/Math.sqrt(arrayInput[1])) * 10000)/10000;
}
