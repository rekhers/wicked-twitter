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
     consumer_key: 'qfxuGZKQF8DtdZAB8oHHltsDQ',
     consumer_secret: 'lEbRO3q0L5YoMUz8fwLQ0yfvHfjKgLD3smTSLdVC90TUYFpokr',
     access_token: '23701093-7MGYRnLFjUOMGlkEKIy2KzrYNRi2baJ1e02vH7PGu',
     access_token_secret: 'CebOsppcGbXowQF5lqbQ78K9Dm8R8bpsCMyfwGRcfEJ1G'
   });
   
  
 
 // to do: set up max connection one per user per session
   var loadClients = function(socket){
   	 
	 console.log('connected');	
	 var stream = client.stream('statuses/filter', {track: wicked});
			stream.on('tweet', function(tweet){
					 io.sockets.emit('stream', tweet);
					
			

});

  }

io.sockets.on("connection", loadClients);


http.listen(3000);

  