var aniongapFormula = require('../../app/js/formula_aniongap.js');
var expect = require('chai').expect;
//console.log(aniongapFormula);

describe('Aniongap', function() {
    describe('calculateFormula', function() {
	it('checks that inputting 5, 4, 3, 2 makes 4', function(done) {
  	    //var a = 'string';
  	    //expect(a).to.be.a('string');
	    expect(aniongapFormula.calculateFormula(5,4,3,2)).to.be.equal(4);
	    done();
	});
	it('checks that inputting -10.1, 20.5, 15.2, 1.2 makes -6', function(done) {
	    expect(aniongapFormula.calculateFormula(-10.1, 20.5, 15.2, 1.2)).to.be.equal(-6);
	    done();
	});
	it('checks that inputting 50, 0, 30, 15 makes 5', function(done) {
	    expect(aniongapFormula.calculateFormula(50, 0, 30, 15)).to.be.equal(5);
	    done();
	});
    });
});
