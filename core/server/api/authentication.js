'use strict';

var mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Promise = require('bluebird');

module.exports = {

	isSetup: function() {
		return User.count().exec().then(function(count) {
			return count === 0 ? Promise.resolve(false) : Promise.resolve(true); 
		});
	}

};