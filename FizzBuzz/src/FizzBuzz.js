"use strict";

var FizzBuzz = function() {
	
    var getSentence = function (input) {
    	var sentence = "";
        if (input % 3 === 0) {
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