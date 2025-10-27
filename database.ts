import dotenv from 'dotenv';
dotenv.config();

import { Pool } from 'pg';

export const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 5432,
    ssl: { rejectUnauthorized: false }, // required for Render
});

pool.connect()
    .then(() => console.log('✅ PostgreSQL connected successfully'))
    .catch((err) => console.error('❌ DB Error:', err));
