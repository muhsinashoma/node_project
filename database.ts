import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432,
    ssl: {
        rejectUnauthorized: false  // <--- This enables SSL for Render
    }
});

export const dbConnect = async () => {
    try {
        await pool.query('SELECT 1'); // test query
        console.log('✅ PostgreSQL connected successfully');
    } catch (error) {
        console.error('❌ Database connection error:', error);
        setTimeout(dbConnect, 5000); // retry in 5 seconds
    }
};

export default pool;
