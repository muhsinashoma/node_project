import app from './app';
import dotenv from 'dotenv';

dotenv.config();
const port = Number(process.env.PORT) || 3001;

app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
