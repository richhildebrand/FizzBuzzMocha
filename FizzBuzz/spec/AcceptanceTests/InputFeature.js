"use strict";

describe("Acceptance Tests - Input Feature", function() {

	//Is this an appropriate next test in this style?

	//Yes, but it is not the Fizz Feature. It is the Buzz Feature :D
	describe("Given a number not divisible by three or five getSentence", function() {
		it("should return the input value", function() {
			var fizzBuzz = new FizzBuzz();
			var numbersNotDivisibleByThreeOrFive = [7, 11, 16, 19, 22, 101];

			numbersNotDivisibleByThreeOrFive.forEach(function(input) {
				var returnedSentence = fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.contain(input);
			});
		});
	});
});