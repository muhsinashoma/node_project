// import app from './app';
// import dotenv from 'dotenv';

// dotenv.config();

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });


import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;  // Use port 3000 instead of 3306

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});