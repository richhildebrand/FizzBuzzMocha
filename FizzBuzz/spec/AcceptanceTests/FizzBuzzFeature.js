"use strict";

describe("Acceptance Tests - FizzBuzz Feature", function() {
    var _fizzBuzz;

    before(function(){
	    _fizzBuzz = new FizzBuzz();
    });

	describe("Given a number divisible by three and five getSentence", function() {
		it("should return FizzBuzz", function() {
			var numbersDivisibleByThreeAndFive = [15, 30, 45, 300, 900];

			numbersDivisibleByThreeAndFive.forEach(function(input) {
				var returnedSentence = _fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.contain("FizzBuzz");
			});
		});
	});

	//I changed the name of this (added the "nor containing a three") which I believe is correct here?
	describe("Given a number not divisible by three or five getSentence, nor containing a three", function() {
		it("should return FizzBuzz", function() {
			var numbersNotDivisibleByThreeAndFive = [6, 20, 55, 50];

			numbersNotDivisibleByThreeAndFive.forEach(function(input) {
				var returnedSentence = _fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.not.contain("FizzBuzz");
			});
		});
	});
});