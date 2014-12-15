function initialize() {


  	var geocoder 	= new google.maps.Geocoder(),
  	input 			= (document.getElementById('pac-input')),
  	autocomplete 	= new google.maps.places.Autocomplete(input);
  	
  	$('#button').click(function(e) {
  		e.preventDefault();

  		var address = $('input').val();

		if(address) {

			geocoder.geocode( {'address': address}, function(results, status) {
		    	if (status == google.maps.GeocoderStatus.OK) {
		    		var longitude 	= results[0].geometry.location.D,
		    		latitude 		= results[0].geometry.location.k;
		    		console.log(latitude);
			   		console.log(longitude);
		    		$('#latitude').val(latitude);
		    		$('#longitude').val(longitude);
		    		$('form').submit();
		      	} else {
		        	alert("Geocode was not successful for the following reason: " + status);
		      	}
			});
		}

  		
  	});


  	
  	$('input').keypress(function (e) {
  		if(e.which == 13)  {

  			e.preventDefault();

	  		var address = $('input').val();

			if(address) {

				geocoder.geocode( {'address': address}, function(results, status) {
			    	if (status == google.maps.GeocoderStatus.OK) {
			    		var longitude 	= results[0].geometry.location.D,
			    		latitude 		= results[0].geometry.location.k;
			    		console.log(latitude);
				   		console.log(longitude);
			    		$('#latitude').val(latitude);
			    		$('#longitude').val(longitude);
			    		$('form').submit();
			      	} else {
			        	alert("Geocode was not successful for the following reason: " + status);
			      	}
				});
			}		
  		}
	});

}

	 	
google.maps.event.addDomListener(window, 'load', initialize);