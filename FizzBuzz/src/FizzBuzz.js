"use strict";

var FizzBuzz = function() {
	
    var getSentence = function (input) {
    	var sentence = "";
        var inputToString = input.toString();
        var inputCharArray = inputToString.split('');
        var inputCharArrayContainsThree = (inputCharArray.indexOf("3") > -1);



        if (input % 3 === 0 || inputCharArrayContainsThree) {
            sentence = "Fizz";
        }
        if (input % 5 === 0) {
            sentence += "Buzz";
        }
        return (sentence) ? sentence : input.toString();
	}

	return {
		getSentence : getSentence
	}
}