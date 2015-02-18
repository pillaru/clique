'use strict';

module.exports = function(app) {

	app.route('/admin').get(function(req, res, next) {
		console.log(req.url);
		res.render('admin-index');
	});
};