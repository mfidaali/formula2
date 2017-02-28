//Set form inputs or outputs "type=texts" to empty strings
function resetVal(array) {
	for (var i=0; i<array.length; i++){
		array[i].value='';
	}
}

//Set form inputs or outputs "type=radio" to empty strings
function resetValRadio(array) {
	for (var i=0; i<array.length; i++){
		array[i].checked=false;
	}
}

//Validate the inputs to make sure they are numbers (not letters, etc) and modify the obj to number value for formula calculation
function checkValuesAndCreateNumberObj(arrayObj) {
	var arrayObjVal = [];
	for (var i=0; i<arrayObj.length; i++){
		//Make object a "Number"
		arrayObjVal[i]= new Number(arrayObj[i].value);
		//Validate numbers 
		if(isNaN(arrayObjVal[i])){
			alert(arrayObj[i].id+' is not a correct value. Please make sure to input a number or decimal');
			break;
		}	
	}
	return arrayObjVal;
}		