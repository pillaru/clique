'use strict';

var express = require('express'),
	mustache = require('mustache-express');

module.exports = function(db) {

	var publicApp = express(),
		adminApp = express();

	publicApp.engine('mustache', mustache());
	adminApp.engine('mustache', mustache());

	publicApp.set('view engine', 'mustache');
	adminApp.set('view engine', 'mustache');
	
	publicApp.set('views', './core/server/views');
	adminApp.set('views', './core/server/views');

	publicApp.use(express.static('./core/public'));
	adminApp.use(express.static('./core/public'));

	adminApp.use(require('./routes.js').admin());
	publicApp.use('/admin', adminApp);

	publicApp.use(require('./routes.js').frontEnd());

	return publicApp;
};