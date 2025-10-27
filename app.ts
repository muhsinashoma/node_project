// app.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './database'; // ✅ PostgreSQL connection

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Simple route to test DB
app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW() AS time'); // ✅ PostgreSQL syntax
        res.json({ status: 'ok', serverTime: result.rows });
    } catch (error) {
        console.error('❌ DB Error:', error);
        res.status(500).json({ error: 'Database not connected', details: error });
    }
});

export default app;
