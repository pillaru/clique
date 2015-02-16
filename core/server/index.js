var express = require('express'),
	mustache = require('mustache-express');

function init(options)
{
	var app = express(); // the main app
	var admin = express(); // the admin app

	app.engine('mustache', mustache());
	admin.engine('mustache', mustache());

	app.set('view engine', 'mustache');
	admin.set('view engine', 'mustache');
	
	app.set('views', __dirname+'/../client/views');
	admin.set('views', __dirname+'/../client/views');

	admin.get('/', function(req, res){
		res.render('admin-index');
	});

	app.get('/', function(req, res){
		res.render('index');
	});

	app.use('/admin', admin);

	var server = app.listen(3000, function(){
		var host = server.address().address;
		var port = server.address().port;
		console.log('clique listening at http://%s:%s', host, port)
	});
}

module.exports = init();