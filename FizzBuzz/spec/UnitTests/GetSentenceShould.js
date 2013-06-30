"use strict";

describe("Given getSentence was called", function() {
	describe("when isDivisibleByThree returns true, getSentence", function() {
		it("should return Fizz", function() {
			var fizzBuzz = new FizzBuzz();
			var calculator = fizzBuzz.Calculator;
			var stringInspector = fizzBuzz.StringInspector;

			sinon.stub(calculator, "isDivisibleByThree").returns(true);
			sinon.stub(calculator, "isDivisibleByFive").returns(false);

			sinon.stub(stringInspector, "containsThree").returns(false);
			sinon.stub(stringInspector, "containsFive").returns(false);

			var returnedSentence = fizzBuzz.getSentence(4);

			chai.expect(returnedSentence).to.equal("Fizz");
		});
	});

	//I like jasmine better for this.
	//I do think I like mocha more in general though.
	describe("when numbersContainingThree returns true, getSentence", function() {
		it("should return Fizz", function() {
			var fizzBuzz = new FizzBuzz();
			var calculator = fizzBuzz.Calculator;
			var stringInspector = fizzBuzz.StringInspector;

			sinon.stub(calculator, "isDivisibleByThree").returns(false);
			sinon.stub(calculator, "isDivisibleByFive").returns(false);

			sinon.stub(stringInspector, "containsThree").returns(true);
			sinon.stub(stringInspector, "containsFive").returns(false);

			var returnedSentence = fizzBuzz.getSentence(4);

			chai.expect(returnedSentence).to.equal("Fizz");
		});
	});

});