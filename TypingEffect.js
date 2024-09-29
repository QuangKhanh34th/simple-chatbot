const words = ["wife", "everything", "world", "reason to live"];
let i = 0;
let timer;


function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			//document.getElementById('word').innerHTML = "She is my " + word.join("");
            document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 100);
	};
	loopDeleting();
};

function typingEffect() {
	let word = words[i].split("");
    //document.getElementById('word').innerHTML = "She is my ";
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 350);
	};
	loopTyping();
};

typingEffect();