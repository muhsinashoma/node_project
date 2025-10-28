import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './core/routes/user.routes';
import { dbConnect } from './database';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dbConnect();

app.use('/users', userRoutes);

app.get('/', (req, res) => res.json({ message: 'Server is running!' }));

export default app;
