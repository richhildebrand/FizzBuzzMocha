"use strict";

describe("Acceptance Tests - Buzz Feature", function() {

	//Is this an appropriate next test in this style?

	//Yes, but it is not the Fizz Feature. It is the Buzz Feature :D
	describe("Given a number divisible by five getSentence", function() {
		it("should return Buzz", function() {
			var fizzBuzz = new FizzBuzz();
			var numbersDivisibleByFive = [5, 10, 20, 50, 100, 200, 305];

			numbersDivisibleByFive.forEach(function(input) {
				var returnedSentence = fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.contain("Buzz");
			});
		});
	});

	describe("Give a number not divisible by five getSentence", function() {
		it("should not return Buzz", function() {
			var fizzBuzz = new FizzBuzz();
			var numbersNotDivisibleByFive = [7, 23, 52, 78, 109]

			numbersNotDivisibleByFive.forEach(function(input) {
				var returnedSentence = fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.not.contain("Buzz");
			});
		});
	});

});