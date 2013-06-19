"use strict";

describe("Acceptance Tests - Fizz Feature", function() {

	describe("Given a number divisible by three getSentence", function() {
		it("should return Fizz", function() {
			var fizzBuzz = new FizzBuzz();
			var numbersDivisibleByThree = [3, 6, 9, 12, 15, 30, 102, 300]

			numbersDivisibleByThree.forEach(function(input) {
				var returnedSentence = fizzBuzz.getSentence(input);
				chai.expect(returnedSentence).to.contain("Fizz");
			});
		});
	});

	//So Mocha is the justCode test runner
	//Chai is Nunit; here are your asserts http://chaijs.com/api/bdd/
	//and we get to pick a mocking frame work later.

	//Also, I chose to do acceptance tests first this time (atdd?) which should give us a bit more
	//feature focus. This route should finish the Fizz feature before we write any code for the buzz feature.
	//I also avoided unit tests since they would overlap 100% with our Acceptance Tests until the bonus round (probably).

	//Finally, I have been playing around with naming conventions. Let me know if that gets too annoying.
	//Otherwise I will keep trying to figure out what I like best :)

	describe("Given a number not divisible by three getSentence", function() {
		it("should not return Fizz", function() {
			var fizzBuzz = new FizzBuzz();
			var returnedSentence = fizzBuzz.getSentence(4);
			chai.expect(returnedSentence).to.not.contain("Fizz");
		});
	});

});