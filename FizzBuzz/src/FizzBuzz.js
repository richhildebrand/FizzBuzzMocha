"use strict";

var FizzBuzz = function() {
	
    var Calculator = function(input) {

        var isDivisibleByThree = function(input) {
            return (input % 3) === 0;
        }

        var isDivisibleByFive = function(input) {
            return (input % 5) === 0;
        }

        return { 
            isDivisibleByThree: isDivisibleByThree,
            isDivisibleByFive : isDivisibleByFive
        }
    };


    var getSentence = function (input) {
    	var sentence = "";
        var inputToString = input.toString();
        var inputCharArray = inputToString.split('');
        var inputCharArrayContainsThree = (inputCharArray.indexOf("3") > -1);

        var containsFive = function(input) {
            return (input.toString().indexOf("5") != -1);
        }

        var calculator = new Calculator();


        if ( calculator.isDivisibleByThree(input) || inputCharArrayContainsThree) {
            sentence = "Fizz";
        }
        if ( calculator.isDivisibleByFive(input) || containsFive(input)) {
            sentence += "Buzz";
        }
        return (sentence) ? sentence : input.toString();
	}

	return {
		getSentence : getSentence,
        Calculator : Calculator
	}
}