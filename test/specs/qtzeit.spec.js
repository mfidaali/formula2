var qtFormula = require('../../app/js/formula_qtzeit.js');
var expect = require('chai').expect;
//console.log(qtFormula);

describe('Calcium', function() {
    describe('calculateFormulaMS', function() {
	it('checks that inputting 100 and 60 makes 100', function(done) {
  	    //var a = 'string';
  	    //expect(a).to.be.a('string');
	    expect(qtFormula.calculateFormulaMS(100, 60)).to.be.equal(100);
	    done();
	});
	it('checks that inputting 100 and 15 makes 50', function(done) {
	    expect(qtFormula.calculateFormulaMS(100, 15)).to.be.equal(50);
	    done();
	});
	it('checks that inputting 100 and 240 makes 200', function(done) {
	    expect(qtFormula.calculateFormulaMS(100, 240)).to.be.equal(200);
	    done();
	});
    });
    
//    describe('calculateFormula50', function() {
// 	it('checks that inputting 0 and 0 makes 1', function(done) {
// 	    expect(qtFormula.calculateFormula50(0,0)).to.be.equal(1);
// 	    done();
// 	});
// 	it('checks that inputting 1 and 0 makes 2', function(done) {
// 	    expect(qtFormula.calculateFormula50(1,0)).to.be.equal(2);
// 	    done();
// 	});
// 	it('checks that inputting -10 and 40 makes -19', function(done) {
// 	    expect(qtFormula.calculateFormula50(-10,40)).to.be.equal(-19);
// 	    done();
// 	});
//    });
//    
//    describe('calculateFormula25', function() {
// 	it('checks that inputting 0 and 0 makes 1', function(done) {
// 	    expect(qtFormula.calculateFormula25(0,0)).to.be.equal(1);
// 	    done();
// 	});
// 	it('checks that inputting 1 and 0 makes 2', function(done) {
// 	    expect(qtFormula.calculateFormula25(1,0)).to.be.equal(2);
// 	    done();
// 	});
// 	it('checks that inputting -10 and 40 makes -19', function(done) {
// 	    expect(qtFormula.calculateFormula25(-10,40)).to.be.equal(-19);
// 	    done();
// 	});
//    });
});
