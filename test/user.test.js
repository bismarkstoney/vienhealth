const mongoose = require('mongoose');
let app = require('../app');
let assert = require('chai').assert;
let request = require('supertest-as-promised');

let _user = 'integration_test_' + Math.floor(Date.now() / 1000) + '@alttab.co';

//helps cleans the models and connection
mongoose.models = {};
mongoose.modelSchemas = {};

describe('User Controller', () => {
	// Test  Get route

	let _token = null;
	it('register the user', () => {
		return request(app)
			.post('/api/v1/users')
			.send({
				email: _user,
				password: 'password',
				name: 'daniel mensah',
			})
			.expect(201)
			.then((data) => {
				_token = data.body.token;
				assert.ok(_token);
			});
	});

	it('login users', () => {
		return request(app)
			.post('/api/v1/users/login')
			.send({
				email: _user,
				password: 'password',
			})
			.expect(200)
			.then((data) => {
				_token = data.body.token;
				assert.ok(_token);
			});
	});
	//Return bad  request  if email is taken
	it('return a bad request if email is taken', () => {
		return request(app)
			.post('/api/v1/users')
			.send({
				email: _user,
				password: 'newpassword',
				name: 'Test new',
			})
			.expect(400);
	});

	//Return error if email is not specified
	it('Return bad request if email is not specified', () => {
		return request(app)
			.post('/api/v1/users')
			.send({
				email: _user,
				name: 'nema ',
			})
			.expect(400);
	});
});
