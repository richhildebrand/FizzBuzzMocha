"use strict";

describe("Acceptance Tests - Fizz Feature", function() {
    var _fizzBuzz;

    before(function(){
	    _fizzBuzz = new FizzBuzz();
    });

	describe("Given a number divisible by three, getSentence", function() {
		it("should return Fizz", function() {
			var numbersDivisibleByThree = [3, 6, 9, 12, 15, 30, 102, 300];

			numbersDivisibleByThree.forEach(function(input) {
				var returnedSentence = _fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.contain("Fizz");
			});
		});
	});

	describe("Given a number not divisible by three, nor containing a three, getSentence", function() {
		it("should not return Fizz", function() {
			var numbersNotDivisibleByThree = [4, 5, 7, 8, 10, 25, 100];

			numbersNotDivisibleByThree.forEach(function(input) {
				var returnedSentence = _fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.not.contain("Fizz");
			});
		});
	});

	//Throwing you under the bus here.
	//In your refactor step I think we will want to add at least one class.
	//Which also means you get to add the first failing unit test for your red.
	//Woooo!
	describe("Given a number that contains a three, getSentence", function() {
		it("should return Fizz", function() {
			var numbersNotDivisibleByThree = [3, 13, 30, 43, 310, 1030];

			numbersNotDivisibleByThree.forEach(function(input) {
				var returnedSentence = _fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.contain("Fizz");
			});
		});
	});

});