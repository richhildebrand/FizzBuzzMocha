"use strict";

describe("Acceptance Tests - FizzBuzz Feature", function() {

	describe("Given a number divisible by three and five getSentence", function() {
		it("should return FizzBuzz", function() {
			var fizzBuzz = new FizzBuzz();
			var numbersDivisibleByThreeAndFive = [15, 30, 45, 300, 900];

			numbersDivisibleByThreeAndFive.forEach(function(input) {
				var returnedSentence = fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.contain("FizzBuzz");
			});
		});
	});

	describe("Given a number not divisible by three or five getSentence", function() {
		it("should return FizzBuzz", function() {
			var fizzBuzz = new FizzBuzz();
			var numbersNotDivisibleByThreeAndFive = [6, 20, 35, 50];

			numbersNotDivisibleByThreeAndFive.forEach(function(input) {
				var returnedSentence = fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.not.contain("FizzBuzz");
			});
		});
	});
});