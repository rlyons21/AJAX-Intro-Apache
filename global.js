window.addEventListener("load", function(){
	var start = document.getElementsByClassName("start");
	var submit = document.getElementsByClassName("nextQ");

	
	start[0].addEventListener("click", function(){
		start[0].style.display = "none";
		var question = document.getElementsByClassName("q1");
		question[0].style.display = "inline";
	});

	submit[0].addEventListener("click", function(e){
		e.preventDefault();
		var response = document.getElementsByClassName("response");
		var ans = response[0].value

		check = new XMLHttpRequest();

		check.addEventListener("load", function(correctness){
			var result = document.getElementsByClassName("result");
			result[0].innerHTML = "1" + correctness.target.responseText
		});


		check.open("get", "http://localhost:8888/AJAX-Intro-Apache/checkAnswers.php?answer1=" + ans);
		check.send();

	});



});

