"use strict";

var FizzBuzz = function() {
	
    var getSentence = function (input) {
    	var sentence = "";
        var inputToString = input.toString();
        var inputCharArray = inputToString.split('');
        var inputCharArrayContainsThree = (inputCharArray.indexOf("3") > -1);

        var containsFive = function(input) {
            return (input.toString().indexOf("5") != -1);
        }

        if (input % 3 === 0 || inputCharArrayContainsThree) {
            sentence = "Fizz";
        }
        if (input % 5 === 0 || containsFive(input)) {
            sentence += "Buzz";
        }
        return (sentence) ? sentence : input.toString();
	}

	return {
		getSentence : getSentence
	}
}