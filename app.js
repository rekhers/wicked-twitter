var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Twit = require('twit');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('pages/index');
	app.use("/public", express.static(__dirname + '/public'));
	
});

var wicked = "wicked";




//verification 
var client = new Twit({
     consumer_key: '',
     consumer_secret: '',
     access_token: '',
     access_token_secret: ''
   });
   
  
 
 //set up max connection one per user per session
  
   var loadClients = function(socket){
	 console.log('connected');	
	 
		 var stream =  client.stream('statuses/filter', {track: wicked});
	 		
			stream.on('tweet', function(tweet){
					 io.sockets.emit('stream', tweet);
				 	
				
			
});
		

}


io.sockets.on("connection", loadClients);


 
 

	 http.listen(3000);

  
