var express = require('express');
var router = express.Router();

router.get('/', function (req, res)
{
	res.render('index', {title: 'Argo - A Revolutionary Group Organizer'});
});

module.exports = router;