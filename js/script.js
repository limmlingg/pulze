// Not responsive
/* function setMap() {
	var location = {lat: 1.305598, lng: 103.772957};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
      	position: location,
      	map: map
    });
}*/

$(document).ready(function(){
	var isPlaying = false;

	var stream = document.createElement('audio');
	stream.setAttribute('src', 'http://128.199.221.166:8000/;stream.mp3');

	$("#playButton").click(function(){
		if (isPlaying) {
	    	stream.pause();
	    	isPlaying = false;
		} else {
			stream.play();
			isPlaying = true;
		}

    	$("#playButton").toggleClass('glyphicon-play').toggleClass('glyphicon-stop');
	});
});