var express 		= require('express'),
	http			= require('http'),
	path			= require('path'),
	bodyParser 		= require('body-parser'),
	exphbs			= require('express-handlebars'),
    routes          = require('./routes/routes') 
	Instagram		= require('instagram-node-lib'),
	app 			= express();


var clientid = process.env.INSTAGRAM_CLIENTID;
var clientsecret = process.env.INSTAGRAM_CLIENTSECRET;

//Set up server
app.set('port', process.env.PORT || 3000 );

//Set up views and templating
app.set('views', __dirname + '/views');

app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	layoutsDir: app.get('views') + '/layouts',
}));

app.set('view engine', 'handlebars');

//Set up Instagram connection
Instagram.set('client_id', clientid);
Instagram.set('client_secret', clientsecret);

//Middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname + '/../' + 'prod'))); 

// Load routes
routes.initialize(app);

//Boot up server
http.createServer(app).listen(app.get('port'), function() {
	console.log("Server up and running at http://localhost:" + app.get('port') );
})

