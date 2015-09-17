var express = router('express');
var router = express.Router();

router.get('/register', function (res, req)
{
	res.render('register', {title: 'Registration'});
});

module.exports = router;