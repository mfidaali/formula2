var calciumFormula = require('../../app/js/formula_korperoberflache.js');
var expect = require('chai').expect;
//console.log(calciumFormula);

describe('Korperoberflache', function() {
    describe('calculateFormulaKM', function() {
	it('checks that inputting 85 and 167 makes 1.99', function(done) {
  	    //var a = 'string';
  	    //expect(a).to.be.a('string');
	    expect(calciumFormula.calculateFormulaKM(85,167)).to.be.equal(1.99);
	    done();
	});
// 	it('checks that inputting 1 and 0 makes 2', function(done) {
// 	    expect(calciumFormula.calculateFormulaKM(1,0)).to.be.equal(2);
// 	    done();
// 	});
// 	it('checks that inputting -10 and 400 makes -19', function(done) {
// 	    expect(calciumFormula.calculateFormulaKM(-10,400)).to.be.equal(-19);
// 	    done();
// 	});
    });
    
    describe('calculateFormulaKD', function() {
	it('checks that inputting 85 and 167 makes 1.94', function(done) {
	    expect(calciumFormula.calculateFormulaKD(85,167)).to.be.equal(1.94);
	    done();
	});
// 	it('checks that inputting 1 and 0 makes 2', function(done) {
// 	    expect(calciumFormula.calculateFormulaKD(1,0)).to.be.equal(2);
// 	    done();
// 	});
// 	it('checks that inputting -10 and 40 makes -19', function(done) {
// 	    expect(calciumFormula.calculateFormulaKD(-10,40)).to.be.equal(-19);
// 	    done();
// 	});
    });
});
