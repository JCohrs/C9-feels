var w = "win";
var l = "lose";
compare(w, l);

function compare(w, l){
	var answer = prompt("Did Cloud9 Win or Lose?");
	
	if(answer.toLowerCase() === w){
		window.location.href = "win.html";
	}
	else if(answer.toLowerCase() === l) {
		window.location.href = "loss.html";
	}
	else{
		alert("Value entered is not an option.");
		compare(w, l);
	}
}