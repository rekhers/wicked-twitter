var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var twitter = require('twit');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('pages/index');
	app.use("/public", express.static(__dirname + '/public'));
	
});

var wicked = "wicked";

//verification 
var client = new twitter({
     consumer_key: '',
     consumer_secret: '',
     access_token: '',
     access_token_secret: ''
   });
   
  
  String.prototype.contains = function(it) { 
	   return this.indexOf(it) != -1; 
   };
   
    
 // to do: set up max connection one per user per session
   io.sockets.on("connection", function(socket){
	   console.log('connected');	

	   var US = ['-125.0011', '24.9493', '-66.9326', '49.5904'];	
		
	var stream = client.stream('statuses/filter', {track: wicked});
		stream.on('tweet', function(tweet){
			
			//console.log(tweet.coordinates.coordinates);
  			io.sockets.emit('stream', tweet);
			
			
            if (tweet.coordinates){
              if (tweet.coordinates !== null){
                //If so then build up some nice json and send out to web sockets
                var outputPoint = {"lat": tweet.coordinates.coordinates[0],"lng": tweet.coordinates.coordinates[1]};
                //socket.emit('stream', outputPoint);
				
			}
		}
			
			//socket.broadcast.emit('stream', tweet.coordinates);

		
		
				
			 });
  
			 });


http.listen(3000);

  
