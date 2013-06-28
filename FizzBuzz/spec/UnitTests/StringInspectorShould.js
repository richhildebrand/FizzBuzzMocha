"use strict";

describe("Unit Tests - String Inspector", function() {
	describe("Given a number containing a three, containsThree", function() {
		it("should return true", function() {
			var stringInspector = new FizzBuzz().StringInspector();

			var numbersContainingThree = [3 , 13, 23, 153, 333, 534, 393]
			numbersContainingThree.forEach(function(input) {
				var result = stringInspector.containsThree(input);
				chai.expect(result).to.to.be.true;
			});
		});
	});

	describe("Given a number not containing a three, containsThree", function() {
		it("should not return true", function() {
			var stringInspector = new FizzBuzz().StringInspector();
			var numbersNotContainingThree = [7 , 5, 11, 25]

			numbersNotContainingThree.forEach(function(input) {
				var result = stringInspector.containsThree(input);
				chai.expect(result).to.to.be.false;
			});
		});
	});

	describe("Given a number not containing five, containsFive", function() {
		it("should not return true", function() {
			var stringInspector = new FizzBuzz().StringInspector();
			var numbersNotContainingFive = [3 , 7, 11, 18]

			numbersNotContainingFive.forEach(function(input) {
				var result = stringInspector.containsFive(input);
				chai.expect(result).to.to.be.false;
			});
		});
	});

	describe("Given a number divisible by five, is divisibleByFive", function() {
		it("should return true", function() {
			var stringInspector = new FizzBuzz().StringInspector();
			var numbersContainingFive = [5 , 15, 25, 105]

			numbersContainingFive.forEach(function(input) {
				var result = stringInspector.containsFive(input);
				chai.expect(result).to.to.be.true;
			});
		});
	});
});