module.exports.initialize = function(app) {

		app.get('/', function(req, res) {
			Instagram.media.popular({
				complete: function(data){
					res.render('index', {
						helpers: {
		                    poplist: function (options) { 
		                        var imgstring = "";
		                        for( var i = 0; i < data.length; i++ ) {
		                            imgstring = imgstring + options.fn(data[i].images.standard_resolution);
		                        }
		                        return imgstring; 
		                    }
		                }
					});
				}	
			});
		});	

		app.post('/', function(req, res) {

		    var latitude = req.body.latitude;
		    var longitude = req.body.longitude;

		    Instagram.media.search({ 
		        lat: latitude, 
		        lng: longitude,
		        complete: function(data){
		            
		            res.render('results', {
		                helpers: {
		                    list: function (options) { 
		                        var imgstring = "";
		                        for( var i = 0; i < data.length; i++ ) {
		                            imgstring = imgstring + options.fn(data[i].images.standard_resolution);
		                        }
		                        return imgstring; 
		                    }
		                }, 

		                latitude: latitude, 
		                longitude: longitude
		            }); 
		        }
		    });
		});
}