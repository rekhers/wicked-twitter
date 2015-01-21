

function initialize(){
	
	
	var myCoords =  new google.maps.LatLng(37.09024, -95.712891);
	
	var mapOptions = {
		//North America
		center: myCoords,
		zoom: 4
		}
	
	var map = new google.maps.Map(document.getElementById('map_canvas'),
           mapOptions);
  
  
    	
		
	

     if(io !== undefined) {
       // Storage for WebSocket connections
       var socket = io.connect('/');
   
   

       // This listens on the "twitter-steam" channel and data is 
       // received everytime a new tweet is receieved.
       socket.on('stream', function(tweet) {
         //Add tweet to the heat map array.
		   var tweetLocation = tweet.coordinates.coordinates;

         //Flash a dot onto the map quickly
         var marker = new google.maps.Marker({
           position: tweetLocation,
           map: map
         });
		 
		 marker.setMap(map);
         
       });
	 
	 
	 
       
  // Listens for a success response from the server to 
  // say the connection was successful.
  socket.on("connected", function(r) {

    //Now that we are connected to the server let's tell 
    //the server we are ready to start receiving tweets.
    socket.emit("stream");
	
  });
	
	
}
}





/********************************************************************

*********************************************************************/
