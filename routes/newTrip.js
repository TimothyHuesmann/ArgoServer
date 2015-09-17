var express = require('express');
var router = express.Router();
var Parse = require('parse').Parse;

router.get('/newTrip', function (req, res)
{
	res.render('index', {title: 'Create New Trip'});
});

module.exports = router;