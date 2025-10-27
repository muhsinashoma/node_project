import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432,
});

export const dbConnect = async () => {
    try {
        await pool.connect();
        console.log('✅ PostgreSQL connected successfully');
    } catch (error) {
        console.error('❌ Database connection error:', error);
    }
};

export default pool;
