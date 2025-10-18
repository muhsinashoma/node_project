// import mysql from 'mysql2';
// import dotenv from 'dotenv';

// // Load environment variables from .env
// dotenv.config();

// // Use the PORT from .env, fallback to 3306 for MySQL
// const DB_PORT = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306;

// const pool = mysql.createPool({
//     host: process.env.DB_HOST || 'localhost',
//     port: DB_PORT,
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASSWORD || '',
//     database: process.env.DB_NAME || 'node_project_db',
//     charset: process.env.DB_CHARSET || 'utf8mb4',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
//     debug: process.env.APP_ENV === 'development',
// }).promise();

// // Test database connection
// const testConnection = async () => {
//     try {
//         const [rows] = await pool.query('SELECT 1');
//         console.log('✅ Database connected successfully');
//     } catch (error) {
//         console.error('❌ Database connection failed:', error);
//         process.exit(1); // Exit if database connection fails
//     }
// };

// testConnection();

// export default pool;


import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

// Use the PORT from .env, fallback to 3306 for MySQL
const DB_PORT = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306;

// Create MySQL connection pool with SSL enabled
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: DB_PORT,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'node_project_db',
    charset: process.env.DB_CHARSET || 'utf8mb4',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    debug: process.env.APP_ENV === 'development',
    ssl: {
        // PlanetScale requires SSL verification
        rejectUnauthorized: true
    }
});

// Test database connection
const testConnection = async () => {
    try {
        const [rows] = await pool.query('SELECT 1');
        console.log('✅ Database connected successfully');
    } catch (error) {
        console.error('❌ Database connection failed:', error);
        process.exit(1); // Exit if database connection fails
    }
};

testConnection();

export default pool;
