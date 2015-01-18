/*********************************

google maps stuff-- To move into a module after testing

*************/

function initialize(){
	
	
	var mapOptions = {
		center: { lat: 37.09024, lng: -95.712891 },
		zoom: 4
	};
	
var map = new google.maps.Map(document.getElementById('map_canvas'),
           mapOptions);
     }
    
	 google.maps.event.addDomListener(window, 'load', initialize);
	


      
       
  // Listens for a success response from the server to 
  // say the connection was successful.
  socket.on("connected", function(r) {

    //Now that we are connected to the server let's tell 
    //the server we are ready to start receiving tweets.
    socket.emit("stream");
  });
	
	





/********************************************************************

*********************************************************************/
