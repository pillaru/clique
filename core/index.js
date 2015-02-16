var server = require('./server/index.js');

// default to development environment if none specified
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

function makeClique(options)
{
	options = options || {};
	return server(options);
}

module.exports = makeClique;