function initialize() {

  	var geocoder 	= new google.maps.Geocoder(),
  	input 			= (document.getElementById('pac-input')),
  	autocomplete 	= new google.maps.places.Autocomplete(input);
  	

  	$('#button').mouseover(function() {
		var address = $('input').val();

		if(address) {

			geocoder.geocode( {'address': address}, function(results, status) {
		    	if (status == google.maps.GeocoderStatus.OK) {
		    		var longitude 	= results[0].geometry.location.D,
		    		latitude 		= results[0].geometry.location.k;
		    		$('#latitude').val(latitude);
		    		$('#longitude').val(longitude);
		      	} else {
		        	alert("Geocode was not successful for the following reason: " + status);
		      	}
			});
		}

  	})
}

	 	
google.maps.event.addDomListener(window, 'load', initialize);