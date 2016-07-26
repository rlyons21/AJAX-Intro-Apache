window.addEventListener("load", function(){
	var start = document.getElementsByClassName("start");
	var submit = document.getElementsByClassName("submit");
	var next = document.getElementsByClassName("nextQ");


	start[0].addEventListener("click",function(){
		var questions = [document.getElementsByClassName("q1"), document.getElementsByClassName("q2"),document.getElementsByClassName("q3")];
		start[0].style.display="none";
		questions[0][0].style.display = "inline";

	});


	for(i=0; i<next.length; i++){
		var questions = [document.getElementsByClassName("q1"), document.getElementsByClassName("q2"),document.getElementsByClassName("q3")];
		next[i].addEventListener("click", function(){
			var x = this.getAttribute("id");
			questions[x-1][0].style.display = "none";
			questions[x][0].style.display = "inline";
		});
	}


	submit[0].addEventListener("click", function(){
		var questions = [document.getElementsByClassName("q1"), document.getElementsByClassName("q2"),document.getElementsByClassName("q3")];

		for(i=0; i < questions.length; i++){
			questions[i][0].style.display = "none";
		}

		var response = document.getElementsByClassName("response");
		var check = new XMLHttpRequest();

		check.addEventListener("load", function(ans){
			var response = document.getElementsByClassName("response");
			var result = document.getElementsByClassName("result");
			var answers = JSON.parse(ans.target.response);


			for(i=0; i < response.length; i++){
				
				if(response[i].value === answers[i]){
					result[i].innerHTML = i+1 + ". correct";
				} else {
					result[i].innerHTML = i+1 + ". incorrect";
				}
			}

		});

		check.open("get", "answers.txt");
		check.send();

	});

});