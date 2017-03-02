var arrayInputObj  = document.getElementsByName("formulaObj");
var arrayOutputObj = document.getElementsByName("formulaFinal");
var selCalciumUnit = document.getElementById("select-calcium-units");
var selAlbuminUnit = document.getElementById("select-albumin-units");


window.onload=function(){
    selCalciumUnit.onchange = function(){
	changePlaceholderCal();
    }
    
    selAlbuminUnit.onchange = function(){
	changePlaceholderAlb();
    }
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

function changePlaceholderCal(){
    if(selCalciumUnit.value=="2"){
	arrayInputObj[0].placeholder = "Norm: 9-10.5";
    }
    else{
	arrayInputObj[0].placeholder = "Norm: 2.25-2.625";	
    }
}


function changePlaceholderAlb(){
    if(selAlbuminUnit.value=="2"){
	arrayInputObj[1].placeholder = "Norm: 3.5-5.5";
    }
    else{
	arrayInputObj[1].placeholder = "Norm: 35-55";	
    }
}


function calculateFormula(arrayInput, arrayOutput){ 	
    
    //Reset outputs before calculation
    resetVal(arrayOutput);

    //Calculate
    var realAlbumin;
    if (selAlbuminUnit.value=="1"){
	realAlbumin= 0.025*arrayInput[1];
    }
    else{
	realAlbumin= 0.25*arrayInput[1];
    }	
    arrayOutput[0].value = arrayInput[0]-realAlbumin + 1;
    
    if(selCalciumUnit.value=="1"){
	document.getElementById("Corrected-calcium-units").innerHTML = " mmol/L";
    }
    else{
	document.getElementById("Corrected-calcium-units").innerHTML = " mg/dL";
    }
}
