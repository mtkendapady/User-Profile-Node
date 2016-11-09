var express = require( "express" );
var app = express();
var bodyParser = require( "body-parser" );
var session = require( "express-session" );
var cors = require( "cors" );
var config = require( "./config.js" );
var userCtrl = require( "./controllers/userCtrl.js" );
var profileCtrl = require( "./controllers/profileCtrl.js" );
var port = 8999;

var corsOptions = {
    origin: 'http://localhost:8999'
};

app.use(express.static(__dirname + '/public'));
app.use( bodyParser.json() );
app.use( cors( corsOptions ) );
app.use( session( {secret: config.sessionSecret} ) );


app.post( '/api/login', userCtrl.login );

app.get( '/api/profiles', profileCtrl.getFriends );

app.listen(port, function(){
  console.log("Listening on port ",port );
});
