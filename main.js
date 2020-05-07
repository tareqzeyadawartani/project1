
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;
  
	if (question1 == "Amman") {
		correct++;
}
	if (question2 == "Riyadh") {
		correct++;
}	
	if (question3 == "Washington") {
		correct++;
	}


	
	var pictures = ["lose.gif", "meh.jpeg", "win.gif"];
	var messages = ["You really need to do better", "That's just okay", "Great job!"];

	if (correct == 0) {
		score = 0;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 2;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
