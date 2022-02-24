const asyncHandler = require('express-async-handler');
const User = require('../models/usersModel');
const generateToken = require('../utils/generateToken');

//@desc    Auth user & get token
//@route   post /api/v1/plogin
//@access   Public
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,

			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error('Invalid credentials');
	}
	//res.send({ email, password });
});

const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
		});
	} else {
		res.status(404);
		throw new Error('User not found');
	}
	//res.send('success');
});

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}

	const user = await User.create({
		name,
		email,
		password,
	});
	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,

			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error('Invalid Data');
	}
});

module.exports = { authUser, getUserProfile, registerUser };
