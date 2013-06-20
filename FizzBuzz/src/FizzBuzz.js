"use strict";

var FizzBuzz = function() {
	
    var getSentence = function (input) {
    	var sentence = "Buzz";
        if (input % 3 === 0) {
            sentence += "Fizz";
        }
        return sentence;
	}

	return {
		getSentence : getSentence
	}
}