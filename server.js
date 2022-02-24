const app = require('./app');
const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`The server is running on ${process.env.NODE_ENV} mode on port ${PORT}`
	)
);
