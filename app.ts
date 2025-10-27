import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './core/routes/user.routes';
import { dbConnect } from './database';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Parse JSON & URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to DB
dbConnect();

// Mount user routes
app.use('/users', userRoutes); // ← THIS IS CRITICAL

// Optional: default route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

export default app;
