'use strict';

var express = require('express'),
	mustache = require('mustache-express'),
	bodyParser = require('body-parser'),
	User = require('../server/models/user.js');

module.exports = function() {

	var publicApp = express(),
		adminApp = express(),
		apiApp = express();

	publicApp.engine('mustache', mustache());
	adminApp.engine('mustache', mustache());

	publicApp.set('view engine', 'mustache');
	adminApp.set('view engine', 'mustache');
	
	publicApp.set('views', './core/server/views');
	adminApp.set('views', './core/server/views');

	publicApp.use(express.static('./core/public'));
	adminApp.use(express.static('./core/public'));

	publicApp.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

	apiApp.use(require('./routes.js').api());
	adminApp.use(require('./routes.js').admin());

	publicApp.use('/api', apiApp);
	publicApp.use('/admin', adminApp);

	publicApp.use(require('./routes.js').frontEnd());

	return publicApp;
};