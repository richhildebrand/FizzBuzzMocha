var FizzBuzz = function() {
	
    var getSentence = function (input) {
        if (input === 3) {
            return "Fizz";
        }
        else
        {
            return "Not";
        }
	}

	return {
		getSentence : getSentence
	}
}