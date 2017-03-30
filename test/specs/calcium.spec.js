var calciumFormula = require('../../app/js/formula_calcium.js');
var expect = require('chai').expect;
//console.log(calciumFormula);

describe('Calcium', function() {
    describe('calculateFormulaL', function() {
	it('checks that inputting 0 and 0 makes 1', function(done) {
  	    //var a = 'string';
  	    //expect(a).to.be.a('string');
	    expect(calciumFormula.calculateFormulaL(0,0)).to.be.equal(1);
	    done();
	});
	it('checks that inputting 1 and 0 makes 2', function(done) {
	    expect(calciumFormula.calculateFormulaL(1,0)).to.be.equal(2);
	    done();
	});
	it('checks that inputting -10 and 400 makes -19', function(done) {
	    expect(calciumFormula.calculateFormulaL(-10,400)).to.be.equal(-19);
	    done();
	});
    });
    
    describe('calculateFormulaDL', function() {
	it('checks that inputting 0 and 0 makes 1', function(done) {
	    expect(calciumFormula.calculateFormulaDL(0,0)).to.be.equal(1);
	    done();
	});
	it('checks that inputting 1 and 0 makes 2', function(done) {
	    expect(calciumFormula.calculateFormulaDL(1,0)).to.be.equal(2);
	    done();
	});
	it('checks that inputting -10 and 40 makes -19', function(done) {
	    expect(calciumFormula.calculateFormulaDL(-10,40)).to.be.equal(-19);
	    done();
	});
    });
});
