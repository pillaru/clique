'use strict';

var express = require('express'),
	mustache = require('mustache-express');

module.exports = function(db) {

	var app = express();

	app.engine('mustache', mustache());

	app.set('view engine', 'mustache');
	
	app.set('views', './core/server/views');

	app.route('/').get(function(req, res, next) {
		res.render('index');
	});

	app.route('/admin').get(function(req, res, next) {
		res.render('admin-index');
	});

	return app;
};