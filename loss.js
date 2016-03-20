function volume(){
	audio = document.getElementById("song");
	audio.volume = .3;
}
window.onload = volume();