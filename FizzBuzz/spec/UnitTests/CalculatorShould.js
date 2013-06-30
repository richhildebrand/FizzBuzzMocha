"use strict";

describe("Unit Test - Calculator", function() {


	//since we actually have a class, unit test time!
	//If you want, try on your refactor to add sting inspector.

	//we will do mocking for get sentence unit tests once we pay our calculator and
	//string inspector test debt even though our acceptance tests assure us things are working :)

	//If we weren't trying to move this along we could have borken our accpetance tests while 
	//inserting the calculator, but we want to get on to mocking!
	describe("Given a number divisible by three, is divisibleByThree", function() {
		it("should return true", function() {
			var calculator = new FizzBuzz().Calculator;

			var numbersDivisibleByThree = [3 ,6, 9, 15, 18, 30, 99]
			numbersDivisibleByThree.forEach(function(input) {
				var result = calculator.isDivisibleByThree(input);
				chai.expect(result).to.to.be.true;
			});
		});
	});

	describe("Given a number not divisible by three, is divisibleByThree", function() {
		it("should not return true", function() {
			var calculator = new FizzBuzz().Calculator;
			var numbersNotDivisibleByThree = [7 , 5, 11, 13]

			numbersNotDivisibleByThree.forEach(function(input) {
				var result = calculator.isDivisibleByThree(input);
				chai.expect(result).to.to.be.false;
			});
		});
	});

	describe("Given a number not divisible by five, is divisibleByFive", function() {
		it("should not return true", function() {
			var calculator = new FizzBuzz().Calculator;
			var numbersNotDivisibleByFive = [3 , 7, 11, 18]

			numbersNotDivisibleByFive.forEach(function(input) {
				var result = calculator.isDivisibleByFive(input);
				chai.expect(result).to.to.be.false;
			});
		});
	});

	describe("Given a number divisible by five, is divisibleByFive", function() {
		it("should return true", function() {
			var calculator = new FizzBuzz().Calculator;
			var numbersDivisibleByFive = [5 , 10, 15, 60]

			numbersDivisibleByFive.forEach(function(input) {
				var result = calculator.isDivisibleByFive(input);
				chai.expect(result).to.to.be.true;
			});
		});
	});
});