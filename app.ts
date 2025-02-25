
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './core/routes/user.routes';


const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/users', userRoutes);    //1st start from here

//app.use('', userRoutes);    //1st start from here

export default app;