"use strict";

describe("Acceptance Tests - Input Feature", function() {
    var _fizzBuzz;

    before(function(){
	    _fizzBuzz = new FizzBuzz();
    });

	describe("Given a number not divisible by three or five getSentence", function() {
		it("should return the input value", function() {
			var numbersNotDivisibleByThreeOrFive = [7, 11, 16, 19, 22, 101];

			numbersNotDivisibleByThreeOrFive.forEach(function(input) {
				var returnedSentence = _fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.contain(input);
			});
		});
	});

	describe("Given a number divisible by three or five getSentence", function() {
		it("should not return the input value", function() {
			var numbersNotDivisibleByThreeOrFive = [3, 5, 15, 18, 30, 600];

			numbersNotDivisibleByThreeOrFive.forEach(function(input) {
				var returnedSentence = _fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.not.contain(input);
			});
		});
	});

});