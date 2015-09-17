var express = require('express');
var router = express.Router();

router.get('/:to/:subject/:message', function (req, res) 
{
	var sendgrid  = require('sendgrid')("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");
	sendgrid.send(
	{
	  to:       req.params.to,
	  from:     'battlehackchicago2015@awesomefat.com',
	  subject:  req.params.subject,
	  text:     req.params.message
	}, 
	function(err, json) 
	{
	  if (err) 
	  	{ 
	  		return console.error(err); 
	  	}
	  res.send(json);
	});
	
});

module.exports = router;