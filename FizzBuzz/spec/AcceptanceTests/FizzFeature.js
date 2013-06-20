"use strict";

describe("Acceptance Tests - Fizz Feature", function() {

	describe("Given a number divisible by three getSentence", function() {
		it("should return Fizz", function() {
			var fizzBuzz = new FizzBuzz();
			var numbersDivisibleByThree = [3, 6, 9, 12, 15, 30, 102, 300];

			numbersDivisibleByThree.forEach(function(input) {
				var returnedSentence = fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.contain("Fizz");
			});
		});
	});

	describe("Given a number not divisible by three getSentence", function() {
		it("should not return Fizz", function() {
			var fizzBuzz = new FizzBuzz();
			var numbersNotDivisibleByThree = [4, 5, 7, 8, 10, 20, 100];

			numbersNotDivisibleByThree.forEach(function(input) {
				var returnedSentence = fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.not.contain("Fizz");
			});
		});
	});

});