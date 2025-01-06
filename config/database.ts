
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: process.env.DB_CHARSET as string,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    debug: process.env.APP_ENV === 'development'
}).promise();

// Test database connection
const testConnection = async () => {
    try {
        await pool.query('SELECT 1');
        console.log('✅ Database connected successfully');
    } catch (error) {
        console.error('❌ Database connection failed:', error);
        process.exit(1);  // Exit if database connection fails
    }
};

testConnection();

export default pool;