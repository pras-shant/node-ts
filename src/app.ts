import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import healthRouter from './routes/health';
import { connectDB } from './utils/database';

const app: Application = express();

// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/', healthRouter);

// Database connection
connectDB();

export default app;
