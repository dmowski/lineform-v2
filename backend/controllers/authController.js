exports.auth = function(request, response, next) {
	response.status(200).json({
		'auth': 'ok'
	});
}
