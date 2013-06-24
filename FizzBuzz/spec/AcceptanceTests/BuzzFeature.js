"use strict";

describe("Acceptance Tests - Buzz Feature", function() {
	var _fizzBuzz;

    before(function(){
	    _fizzBuzz = new FizzBuzz();
    });

	describe("Given a number divisible by five getSentence", function() {
		it("should return Buzz", function() {
			var numbersDivisibleByFive = [5, 10, 15, 20, 50, 100, 300, 305];

			numbersDivisibleByFive.forEach(function(input) {
				var returnedSentence = _fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.contain("Buzz");
			});
		});
	});

	describe("Give a number not divisible by five getSentence", function() {
		it("should not return Buzz", function() {
			var numbersNotDivisibleByFive = [7, 23, 52, 78, 109]

			numbersNotDivisibleByFive.forEach(function(input) {
				var returnedSentence = _fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.not.contain("Buzz");
			});
		});
	});

	describe("Given a number that contains a five, getSentence", function() {
		it("should return Buzz", function() {
			var numbersContainingAFive = [5, 15, 55, 45, 513, 1035];

			numbersContainingAFive.forEach(function(input) {
				var returnedSentence = _fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.contain("Buzz");
			});
		});
	});
});