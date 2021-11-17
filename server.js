import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import userRouter from './routes/userRoute.js';
dotenv.config({ path: './config/.env' });
const app = express();
app.use(express.json());
connectDB();

const PORT = process.env.PORT || 5000;

app.use('/api/v1/users', userRouter);

//error handler
app.use(notFound);
app.use(errorHandler);

app.listen(
	PORT,
	console.log(
		`The server is running on ${process.env.NODE_ENV} mode on port ${PORT}`
	)
);

export default app;
