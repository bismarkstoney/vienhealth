const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/usersModel');

const protect = asyncHandler(async (req, res, next) => {
	let token;
	//console.log(req.headers.authorization);
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1];

			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			req.user = await User.findById(decoded.id).select('-password');
			//console.log(decoded);
			next();
		} catch (error) {
			console.error(error);
			res.status(401);
			throw new Error('Not authorized, token failed');
		}
	}

	if (!token) {
		res.status(401);
		throw new Error('Not authorize , no token');
	}
});

module.exports = { protect };
