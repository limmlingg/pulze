function setMap() {
	var location = {lat: 1.305598, lng: 103.772957};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
      	position: location,
      	map: map
    });
}