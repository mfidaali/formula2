var bmiFormula = require('../../app/js/formula_bmi.js');
var expect = require('chai').expect;
//console.log(bmiFormula);

describe('BMI', function() {
    describe('calculateFormulaBMI', function() {
	it('checks that inputting 68 and 179 makes 21.2', function(done) {
  	    //var a = 'string';
  	    //expect(a).to.be.a('string');
	    expect(bmiFormula.calculateFormulaBMI(68, 179)).to.be.equal(21.2);
	    done();
	});
	it('checks that inputting 79 and 164 makes 2', function(done) {
	    expect(bmiFormula.calculateFormulaBMI(79,164)).to.be.equal(29.4);
	    done();
	});
	it('checks that inputting 90 and 150 makes ', function(done) {
	    expect(bmiFormula.calculateFormulaBMI(90, 150)).to.be.equal(40.0);
	    done();
	});
    });
});
