'use strict';

var express = require('express'),
	mustache = require('mustache-express'),
	bodyParser = require('body-parser'),
	User = require('../server/models/user.js'),
	api = require('../server/api/index.js'),
	routes = require('./routes.js');

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

	publicApp.use(redirectToSetup);

	apiApp.use(routes.api());
	adminApp.use(routes.admin());

	publicApp.use('/api', apiApp);
	publicApp.use('/admin', adminApp);

	publicApp.use(routes.frontEnd());

	return publicApp;
};

// Redirect to setup if no user exists
function redirectToSetup(req, res, next) {
	api.authentication.isSetup().then(function(exists) {
    	if (!exists && !req.path.match(/\/setup\//)) {
        	return res.redirect('/admin/setup/');
    	}
    	next();
    });
};