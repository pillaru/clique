var express = require('express');

function init(options)
{
	var app = express(); // the main app
	var admin = express(); // the admin app

	admin.get('/', function(req, res){
		res.send('Admin Homepage');
	});

	app.get('/', function(req, res){
		res.send('Clique Homepage');
	});

	app.use('/admin', admin);

	var server = app.listen(3000, function(){
		var host = server.address().address;
		var port = server.address().port;
		console.log('clique listening at http://%s:%s', host, port)
	});
}

module.exports = init();