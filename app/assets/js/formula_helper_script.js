/**
 * Make sure input can handle comma's used as decimal point, and then make it a Number Object
 * Important for Germany, in which commas are used to represent decimal values. 
 * @param  {number|string} input - Input numbers with commas needs to be transformed to numbers with decimal points
 * @return {number} transformed value
 */
function createNumCommaAndPoint(input){

    //If the number uses a comma (e.g. 1001,01 or 1,001.01)
    if(input.match(/^.*\,/)){
	//If the number has a point as decimal indicator after comma, just get rid of comma (e.g. 1,001.01=>1001.01)
	if(input.match(/^.*\,.*\..*$/)){
	    input=input.replace(/\,/g,'');
	}
	//Else transform the comma into a decimal (e.g. 1001,01=>1001.01) 
	else{
	    input=input.replace(/\./g,'').replace(',','.');
	}
    }
    return new Number(input);
}


/**
 * Make sure the input is in fact a number, and not some character like 'a' or empty
 * @param {number|string} value - First parameter is above element's value
 * @return {boolean}
 */
function validateNum(value){
    if (isNaN(value) || value=='' ){	
	return false;
    }
    else{
	return true;
    }
}


/**
 * Make sure the input is in fact a number or empty, and not some character like 'a'
 * @param {number|string} value - First parameter is above element's value
 * @return {boolean}
 */
function validateNumWithEmptyString(value){
    if (isNaN(value)) {
	return false;
    }
    else{
	return true;
    }
}



