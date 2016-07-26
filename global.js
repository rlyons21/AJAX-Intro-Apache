window.addEventListener("load", function(){
	var start = document.getElementsByClassName("start");
	var next = document.getElementsByClassName("nextQ");
	var submit = document.getElementsByClassName("submit");
	var questions = [document.getElementsByClassName("q1"), document.getElementsByClassName("q2"), document.getElementsByClassName("q3")];
	
	start[0].addEventListener("click", function(){
		start[0].style.display = "none";
		
		questions[0][0].style.display = "inline";
	});

	for(i=0; i < next.length; i++){
		next[i].addEventListener("click", function(e){
			e.preventDefault();
			var id = this.getAttribute("id");
			questions[id-1][0].style.display = "none";
			questions[id][0].style.display = "inline";

		});
	}



	submit[0].addEventListener("click", function(e){
		e.preventDefault();
		var response = document.getElementsByClassName("response");
		var result = document.getElementsByClassName("result");

		for(i=0; i <questions.length; i++){
			questions[i][0].style.display = "none";
		}

		check1 = new XMLHttpRequest();
		check2 = new XMLHttpRequest();
		check3 = new XMLHttpRequest();

		check1.addEventListener("load", function(correctness1){
			var r1 = correctness1.target.responseText;
			result[0].innerHTML = "1. " + r1;
		});

		check2.addEventListener("load", function(correctness2){
			var r2 = correctness2.target.responseText;
			result[1].innerHTML = "2. " + r2;
		});

		check3.addEventListener("load", function(correctness3){
			var r3 = correctness3.target.responseText;
			result[2].innerHTML = "3. " + r3;
		});


		check1.open("get", "http://localhost:8888/AJAX-Intro-Apache/checkAnswers.php?answer1=" + response[0].value);
		check1.send();

		check2.open("get", "http://localhost:8888/AJAX-Intro-Apache/checkAnswers.php?answer2=" + response[1].value);
		check2.send();

		check3.open("get", "http://localhost:8888/AJAX-Intro-Apache/checkAnswers.php?answer3=" + response[2].value);
		check3.send();

	});



});

