'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName: {
		type: String,
		trim: true
	},
	lastName: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		trim: true
	},
	password: {
		type: String
	}
});

mongoose.model('User', UserSchema);