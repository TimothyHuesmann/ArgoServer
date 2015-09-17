var express = require('express');
var braintree = require('braintree');
var router = express.Router();
var Parse = require('parse').Parse;

Parse.initialize("MH5kLqhYfaeIdCYsERi1Ab8eLOmy1ikDKwW9kRNy", "9Z85hOEtvD2oVs6i86eok6XTHO5Jm53lBRLB5SUs");
var gateway = braintree.connect(
{
    environment:  braintree.Environment.Sandbox,
    merchantId:   'z55x57kyr6g4gg2h',
    publicKey:    'xf54384fzbyhvgy2',
    privateKey:   'c5cf4fa6ea4eee46f255311de44455d1'
});

router.get("/client_token/:customerId", function (req, res) 
{
	var customerID = req.params.customerId;
  gateway.clientToken.generate(
  {
    customerId: customerID
  }, 
  function (err, response) 
  {
    var ClientToken = Parse.Object.extend("Client_Token");
    var client_Token = new ClientToken();
    client_Token.set("token", response.clientToken);
    client_Token.set("userID", customerID);
    client_Token.save(null,
  	{
    	success: function(client_token)
    	{
      		console.log("Success: " + client_Token.id);
      		router.post('/checkout', function (req, res)
      			{
      				var customerId = customerID;
      			});
    	},
    	error: function(client_token, error)
    	{
      		console.log("Failure: " + error.code);
    	}
  	});
  });
  
});

router.get("/subscribe/:custId/:paymentMethod/:day", function (req, res)
{
	gateway.subscription.create(
	{
		paymentMethodToken: req.params.paymentMethod,
		planID: 			"PartyBus",
		firstBillingDate:  req.params.day,
		id: req.params.custId
	},
	function(err, res)
	{
		
	});
	res.send("Subscription Created");
	
});

router.get("/subscriptionupdate/:subscriptionID/:discountID/:amount", function (req, res)
{
	gateway.subscription.update(req.params.subscriptionID, 
	{
	  discounts: 
	  {
	    add: 
	    [
	      {
	        inheritedFromId: req.params.discountID,
	        amount: req.params.amount,
	      }
	    ],
	  }
	}, function (err, result) 
	{

	});
	res.send("Subscription Updated");
});


module.exports = router;