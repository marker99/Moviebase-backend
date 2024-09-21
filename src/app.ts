import express from 'express';
import movieRoutes from './routes/movieRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Movie routes
app.use('/api/movies', movieRoutes);

export default app;
