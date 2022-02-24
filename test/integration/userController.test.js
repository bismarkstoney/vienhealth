// import chai from 'chai';
// import app from '../../server.js';
// import chaiHttp from 'chai-http';
// //import jwt from 'jsonwebtoken';
// //asertion style

// chai.should();
// chai.use(chaiHttp);
// let _user =
// 	'integration_test_' + Math.floor(Date.now() / 1000) + '@datateqs.co';
// describe('GET Profile after login ', () => {
// 	it('GET /api/v1/users/profile', (done) => {
// 		let _token = null;
// 		let token =
// 			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTQ0NzdhMTBhMjljZTg4MDE4NzgyYyIsImlhdCI6MTYzNzE0NDMxNSwiZXhwIjoxNjM5NzM2MzE1fQ.5NbazvDtaKLoHMBNySHFzqnz2gploc5-c1ZeoQ2UfkY';
// 		chai
// 			.request('http://localhost:5000')
// 			.get('/api/v1/users/profile')
// 			.set({ Authorization: `Bearer ${token}` })
// 			.end((err, response) => {
// 				response.should.have.status(200);
// 				response.body.should.be.a('Object');
// 				done();
// 			});
// 	});

// 	it('Wrong url ', (done) => {
// 		chai
// 			.request('http://localhost:5000')
// 			.get('/api/v1/user/profile')
// 			.end((err, response) => {
// 				response.should.have.status(404);
// 				response.body.should.be.a('Object');
// 				done();
// 			});
// 	});
// });

// describe('Register a new account ', () => {
// 	it('GET /api/v1/users', (done) => {
// 		const user = {
// 			name: 'test',
// 			email: _user,
// 			password: 'test12345',
// 		};
// 		chai
// 			.request('http://localhost:5000')
// 			.post('/api/v1/users')
// 			.send(user)
// 			.end((err, response) => {
// 				response.should.have.status(201);
// 				response.body.should.be.a('Object');
// 				done();
// 			});
// 	});

// 	it('Wrong url ', (done) => {
// 		const user = {
// 			name: 'test',
// 			email: _user,
// 			password: 'test12345',
// 		};
// 		chai
// 			.request('http://localhost:5000')
// 			.post('/api/v1/user')
// 			.send(user)
// 			.end((err, response) => {
// 				response.should.have.status(404);
// 				response.body.should.be.a('Object');
// 				done();
// 			});
// 	});

// 	it('Email taken ', (done) => {
// 		const user = {
// 			name: 'test',
// 			email: _user,
// 			password: 'test12345',
// 		};
// 		chai
// 			.request('http://localhost:5000')
// 			.post('/api/v1/users')
// 			.send(user)
// 			.end((err, response) => {
// 				response.should.have.status(400);
// 				response.body.should.be.a('Object');
// 				done();
// 			});
// 	});
// });

// describe('login a user ', () => {
// 	it('POST /api/v1/users/login', (done) => {
// 		const userLogin = {
// 			email: _user,
// 			password: 'test12345',
// 		};
// 		let token =
// 			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTQ0NzdhMTBhMjljZTg4MDE4NzgyYyIsImlhdCI6MTYzNzE0NDMxNSwiZXhwIjoxNjM5NzM2MzE1fQ.5NbazvDtaKLoHMBNySHFzqnz2gploc5-c1ZeoQ2UfkY';

// 		chai
// 			.request('http://localhost:5000')
// 			.post('/api/v1/users/login')
// 			.send(userLogin)
// 			.set({ Authorization: `Bearer ${token}` })
// 			.end((err, response) => {
// 				response.should.have.status(200);
// 				response.body.should.be.a('Object');
// 				done();
// 			});
// 	});
// });
