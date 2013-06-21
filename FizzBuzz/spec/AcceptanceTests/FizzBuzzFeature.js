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

	describe("Given a number not divisible by three or five getSentence", function() {
		it("should return FizzBuzz", function() {
			var numbersNotDivisibleByThreeAndFive = [6, 20, 35, 50];

			numbersNotDivisibleByThreeAndFive.forEach(function(input) {
				var returnedSentence = _fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.not.contain("FizzBuzz");
			});
		});
	});
});