"use strict";

var FizzBuzz = function() {
	
    var getSentence = function (input) {
    	var sentence = "";
        if (input % 3 === 0) {
            sentence += "Fizz";
        }
        else if (input % 5 === 0) {
            sentence += "Buzz";
        }
        return sentence;
	}

	return {
		getSentence : getSentence
	}
}