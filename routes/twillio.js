var express = require('express');
var router = express.Router();

router.get('/:to/:message', function(request, response) 
{
	// Twilio Credentials 
	var accountSid = 'AC30ea0a90a5d671b03af69d07c14a7233'; 
	var authToken = 'cdcf47cc4803af0bda87dba7a8c6a9e4'; 
	 
	//require the Twilio module and create a REST client 
	var client = require('twilio')(accountSid, authToken); 
	 
	client.messages.create({ 
		to: request.params.to, 
		from: "415-599-2671", 
		body: request.params.message   
	}, function(err, message) { 
		//response.send(message.sid);
	});
	response.send("Message Sent");

});

module.exports = router;