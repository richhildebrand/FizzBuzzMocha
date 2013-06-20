var FizzBuzz = function() {
	
    var getSentence = function (input) {
        if (input % 3 === 0) {
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