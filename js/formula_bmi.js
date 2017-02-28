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
	arrayOutput[0].value = Math.round(Math.sqrt(arrayInput[0]*arrayInput[1]/3600) * 10000)/10000;
	arrayOutput[1].value = Math.round(0.007184*Math.pow(arrayInput[1],0.725)*Math.pow(arrayInput[0],0.425) * 10000)/10000;
	arrayOutput[2].value = Math.round(arrayInput[0]/0.0001/Math.pow(arrayInput[1],2) * 1000)/1000;	
}
