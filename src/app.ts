import express from 'express';
import movieRoutes from './routes/movieRoutes';
import dotenv from 'dotenv';
import cors from 'cors'; // Import the CORS middleware

dotenv.config();

const app = express();

// Enable CORS for all requests
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:5173'  --- Only requests from this origin will be allowed
//   }));

// Middleware to parse JSON bodies
app.use(express.json());

// Movie routes
app.use('/api/movies', movieRoutes);

export default app;
