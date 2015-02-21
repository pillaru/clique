'use strict';

var express = require('express'),
	mongoose = require('mongoose'),
	User = mongoose.model('User');

module.exports.api = function() {
	var router = express.Router();

	router.post('/authentication/setup', function(req, res) {
		console.log(req.body);
		var setup = req.body
		var setupUser = new User({
			firstName: setup.firstName,
			lastName: setup.lastName,
			email: setup.email,
			password: setup.password
		});
		setupUser.save(function(err) {
			if(err) {
				res.status(500).send({ error: 'something blew up' });
			}
		});
		res.sendStatus(200);
	});

	return router;
};

module.exports.admin = function(){
	var router = express.Router();

    router.get('*', function(req, res) {
    	res.render('admin-index');
    });

    return router;
};

module.exports.frontEnd = function(){
	var router = express.Router();

	router.get('*', function(req, res) {
		res.redirect(301, '/admin/setup');
	});

	return router;
};