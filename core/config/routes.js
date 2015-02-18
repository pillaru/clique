'use strict';

var express = require('express');

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
}