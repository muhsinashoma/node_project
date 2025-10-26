// app.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './database'; // ✅ this is where we connect the DB

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Simple route to test DB
app.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT NOW() AS time');
        res.json({ status: 'ok', serverTime: rows });
    } catch (error) {
        res.status(500).json({ error: 'Database not connected', details: error });
    }
});

export default app;
