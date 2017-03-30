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
 * @param  {element} element - First parameter should be the element
 * @param {number|string} value - Second parameter is above element's value
 * @return {boolean}
 */
function validateNum(element, value){
    if (isNaN(value) || value=='' ) {
	alert(element.id + ' is not an acceptable input. Please make sure to input a number and not a character or a blank');
	return false;
    }
    return true;
}


/**
 * Make sure the input is in fact a number or empty, and not some character like 'a'
 * @param  {element} element - First parameter should be the element
 * @param {number|string} value - Second parameter is above element's value
 * @return {boolean}
 */
function validateNumWithEmptyString(element, value){
    if (isNaN(value)) {
	alert(element.id + ' is not an acceptable input. Please make sure to input a number or leave it blank. Please do not input a character');
	return false;
    }
    return true;
}



