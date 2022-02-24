const express = require('express');
const dotenv = require('dotenv');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoute');
dotenv.config({ path: './config/.env' });
const app = express();
app.use(express.json());
connectDB();

//const PORT = process.env.PORT || 5000;

app.use('/api/v1/users', userRouter);

//error handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;
