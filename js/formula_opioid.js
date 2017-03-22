var $drugCurrSelect     = document.querySelector("#select-drug-current");
var $drugCurrTypeSelect = document.querySelector("#select-drug-current-type");
var $drugNewSelect      = document.querySelector("#select-drug-new");
var $drugNewTypeSelect  = document.querySelector("#select-drug-new-type");
var $inputDosisValue    = document.querySelector("#Input-Dosis");
var $outputDosisValue   = document.querySelector("#Output-Dosis");

//var einheit        = document.getElementsByName("einheit");

var drugAndTypeFactorHash = {
    "tramadol_or": 15,
    "tilidin_or": 15,
    "dihydrocodein_or": 12,
    "morphin_or": 3,
    "oxycodon_or": 2,
    "methadon_or": 0.75,
    "hydromorphon_or": 0.4,
    "buprenorphin_or": 0.04,
    "tramadol_sc": 10,
    "morphin_sc": 1,
    "hydromorphon_sc": 0.2,
    "oxycodon_sc": 0.75,
    "piritramid_sc": 1.5,
    "pethidin_sc": 7.5,
    "buprenorphin_sc": 0.03,
    "morphin_epidural": 0.25,
    "morphin_intrathekal": 0.03,
    "fentanyl_TTSmg": 0.03,
    "fentanyl_TTSug": 1.25
};

function drugAndType(drugCurr, drugNew, typeCurr, typeNew, dosage){


    var currDrugType= drugCurr.value+'_'+typeCurr.value;
    var newDrugType = drugNew.value+'_'+typeNew.value;
    
    if (currDrugType in drugAndTypeFactorHash){
	factorCurr= drugAndTypeFactorHash[currDrugType];
    }
    else{
	alert("This combination of Bisheriges Opioid Arzneistoff and Application does not exist");
    }
    
    if (newDrugType in drugAndTypeFactorHash){
	factorNew= drugAndTypeFactorHash[newDrugType];
    }
    else{
	alert("This combination of Neues Opioid Arzneistoff and Application does not exist");
    }
    out_dosis[0].value= dosage[0]*factorNew/factorCurr;
}

document.addEventListener('DOMContentLoaded', function() {
    //Reset button
    document.getElementById('btnReset').addEventListener('click', function(event) {
	//Stop form input submission
	event.preventDefault();

	//Reset selects, inputs, and outputs
	
	//var elements = document.getElementsByTagName('select');
	//for (var i=0; i < elements.length; i++){
	//    elements[i].selectedIndex=0;
	//}
	
	$drugCurrSelect.selectedIndex     = 0;
	$drugCurrTypeSelect.selectedIndex = 0;
	$drugNewSelect.selectedIndex      = 0;
	$drugNewTypeSelect.selectedIndex  = 0;
	$inputDosisValue.value        	  = '';
	$outputDosisValue.value           = '';
	
    });
							 
    //Calculate button
    document.getElementById('btnCalc').addEventListener('click', function(event) {

	//Stop form input submission
	event.preventDefault();
	
	//Create number obj based on input and make sure it is indeed a number 
	var inputDosisNum  = createNumCommaAndPoint($inputDosisValue.value);
	if(!validateNum($inputDosisValue, inputDosisNum)){ 
	    return;
	}

	var currDrugType= $drugCurrSelect.value + '_' + $drugCurrTypeSelect.value;
	var newDrugType = $drugNewSelect.value  + '_' + $drugNewTypeSelect.value;

	var factorCurr;
	var factorNew;

	//Grab factor associated with Drug and Type using hash information	
	if (currDrugType in drugAndTypeFactorHash){
	    factorCurr= drugAndTypeFactorHash[currDrugType];
	}
	else{
	    alert("This combination of Bisheriges Opioid Arzneistoff and Application does not exist");
	    return;
	}
	
	if (newDrugType in drugAndTypeFactorHash){
	    factorNew= drugAndTypeFactorHash[newDrugType];
	}
	else{
	    alert("This combination of Neues Opioid Arzneistoff and Application does not exist");
	    return;
	}
	
	

	//Reset all ouput values before calculating
	$outputDosisValue.value = '';	

	//Calculate Formula
	$outputDosisValue.value = calculateFormula(inputDosisNum, factorNew, factorCurr);

	//drugAndType(selDrugCurr, selDrugNew, selDrugCurrType, selDrugNewType, arrayInputObjVal);
	//out_dosis[0].value= dosage[0]*factorNew/factorCurr;
    });
});

/**
 * Calcium Formulas
 * @param  {number} input1 - First  parameter should be  Value
 * @param  {number} input2 - Second parameter should be  Value
 * @param  {number} input3 - Third  parameter should be  Value
 * @return {number} Calculated value
 */
function calculateFormula(input1, input2, input3){ 	
    return input1*input2/input3;
}


//var drugAndTypeFactorHash = {
//    "tramadol_or_Faktor1": 5,
//    "tilidin_or_Faktor1": 5,
//    "dihydrocodein_or_Faktor1": 10,
//    "morphin_or_Faktor1": 1,
//    "morphin_or_Faktor2": 3,
//    "oxycodon_or_Faktor1": 0.65,
//    "methadon_or_Faktor1": 0.25,
//    "methadon_or_Faktor2": 0.75,
//    "hydromorphon_or_Faktor1": 0.13,
//    "buprenorphin_or_Faktor1": 0.013,
//    "tramadol_sc_Faktor2": 10,
//    "morphin_sc_Faktor1": 0.33,
//    "morphin_sc_Faktor2": 1,
//    "hydromorphon_sc_Faktor2": 0.2,
//    "oxycodon_sc_Faktor2": 0.75,
//    "piritramid_sc_Faktor2": 1.5,
//    "pethidin_sc_Faktor2": 7.5,
//    "buprenorphin_sc_Faktor2": 0.03,
//    "morphin_epidural_Faktor1": 0.08,
//    "morphin_epidural_Faktor2": 0.25,
//    "morphin_intrathekal_Faktor1": 0.01,
//    "morphin_intrathekal_Faktor2": 0.03,
//    "buprenorphin_TDS_Faktor1": 0.01,
//    "buprenorphin_TDS_Faktor2": 0.03,
//    "Fentanyl_TTSmg_Faktor1": 0.01,
//    "Fentanyl_TTSmg_Faktor2": 0.03,
//    "Fentanyl_TTSug_Faktor1": 0.4,
//    "Fentanyl_TTSug_Faktor2": 1.25	
//};


// //List of drugs
// drug[0]= [];
// drug[0][0]=  new Array('Select a drug');
// drug[0][1]=  new Array('morphin');
// drug[0][2]=  new Array('tramadol');
// drug[0][3]=  new Array('dihydrocodein');
// drug[0][4]=  new Array('oxycodon');
// drug[0][5]=  new Array('methadon');
// drug[0][6]=  new Array('hydromorphon');
// drug[0][7]=  new Array('buprenorphin');
// drug[0][8]=  new Array('piritramid');
// drug[0][9]=  new Array('pethidin');
// drug[0][10]= new Array('fentanyl');
//  
// //Morphin options
// drug[1]= new Array();
// drug[1][0]=  new Array('Select a method');
// drug[1][1]=  new Array('oral/rectal');
// drug[1][2]=  new Array('s.c./i.m/i.v.');
// drug[1][3]=  new Array('epidural');
// drug[1][4]=  new Array('intrathekal');
//  
// //Fentanyl Options
// drug[][0]=  new Array('Select a method');
// drug[][1]=  new Array('TTS');
//  
// //Buprenorphin
// drug[][0]=  new Array('Select a method');
// drug[][1]=  new Array('sl');
// drug[][1]=  new Array('TDS');



//function linkDrugAndType(drug, type){
//    var options= new Array();
//    (drug.style || drug).visibility= "visible";
//    for (var i=0; i < type.options.length; i++) {
// 	/* Save text and value of original options */
// 	options[i] = new Array(type.options[i].text,type.options[i].value);
//    }
// 
//}
