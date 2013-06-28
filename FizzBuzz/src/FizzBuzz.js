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

    var StringInspector = function(input) {
        
        var containsThree = function(input) {
            return (input.toString().indexOf("3") != -1);
        }

        var containsFive = function(input) {
            return (input.toString().indexOf("5") != -1);
        }

        return {
            containsThree : containsThree,
            containsFive : containsFive
        }
    };

    var getSentence = function (input) {
    	var sentence = "";

        var calculator = new Calculator();
        var stringInspector = new StringInspector();


        if ( calculator.isDivisibleByThree(input) || stringInspector.containsThree(input)) {
            sentence = "Fizz";
        }
        if ( calculator.isDivisibleByFive(input) || stringInspector.containsFive(input)) {
            sentence += "Buzz";
        }
        return (sentence) ? sentence : input.toString();
	}

	return {
		getSentence : getSentence,
        Calculator : Calculator,
        StringInspector : StringInspector
	}
}