const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name'],
		},
		email: {
			type: String,
			required: [true, 'Please add an email'],
			unique: [true, 'Email already Taken'],
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
		},
	},
	{ timestamps: true }
);

//matching password
UserSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

//hash password
UserSchema.pre('save', async function (next) {
	//only when the password is changed
	if (!this.isModified('password')) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.set('toJSON', {
	virtuals: true,
});
const User = mongoose.model('User', UserSchema);

module.exports = User;
