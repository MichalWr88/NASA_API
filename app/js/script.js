$(document).ready(function(){

let config ={
	url:'https://api.nasa.gov/planetary/apod20170505api_key=pzXOn2yp335zmTjQ2lqolN8T5nFXtMUXXnr9hZc7',
	// url:'https://images-api.nasa.gov/search?q=()&media_type=image',
	type: 'GET',
	
			
};

let header = $('.page__header');
	





   $.ajax(config)
   .done(function(data) {
   	console.log("success");
   	console.log(data);
   	// header.css('background-image', 'url("' + data.collection.items[0].href + '")');

   })
   .fail(function(err) {
   	console.log("error");
   })
   .always(function() {
   	console.log("complete");
   });
   

});

let initBG = (elem)=>{

};