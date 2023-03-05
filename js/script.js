var wordCountInput = document.getElementById("word-counter-input");
var randomColorButton = document.getElementById("random-color-button");

if(wordCountInput) {
	wordCountInput.addEventListener("input", function(){
		var _this = this;
		var inputVal  = _this.value;
		
		var sentence = "";
		var	word = "";
		var letter = "";
		if(inputVal != ""){
			paragraph = inputVal.split("\n\n").length - 1;
			sentence = inputVal.split(".").length - 1;
			word = inputVal.split(" ").length;
			letter = inputVal.length;
		} else {
			paragraph = 0;
			sentence = 0;
			word = 0;
			letter = 0;
		}

		var resultBox = document.getElementsByClassName('word-counter-result-row');

		var texts = new Array(
			'paragraph',
			'sentence',
			'word',
			'letter',
		);

		var values = new Array(
			paragraph,
			sentence,
			word,
			letter,
		);

		for (var i = 0; i < resultBox.length; i++) {
			var currentRow = resultBox[i];

			if( values[i] != 1 ){
				texts[i] += "s";
			}

			var break_flag = " <strong>|</strong>";
			if( i == resultBox.length-1 ){
				break_flag = "";
			}
			
			currentRow.innerHTML = values[i] + " " + texts[i] + break_flag;
		}
	});
 }

 randomColorButton.addEventListener("click", function(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}

	document.getElementsByTagName('body')[0].style.backgroundColor = color;

});
