var express = require('express');
var router = express.Router();

router.get('/mainMenu', function (req, res)
{
	res.render('mainMenu', {title: 'Welcome to Argo'});
});

module.exports = router;