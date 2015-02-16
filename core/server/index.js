var express = require('express');

function init(options)
{
	var app = express();

	app.get('/', function(req, res){
		res.send('clique');
	});

	var server = app.listen(3000, function(){
		var host = server.address().address;
		var port = server.address().port;
		console.log('clique listening at http://%s:%s', host, port)
	});
}

module.exports = init();