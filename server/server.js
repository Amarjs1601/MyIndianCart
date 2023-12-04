import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';

// dot env config
dotenv.config();

// database connection
connectDB();

// rest object

const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// route
// routes imports
import testRoute from '../server/routes/testRoutes.js';
import userRoutes from "../server/routes/userRoutes.js"
app.use('/api/v1', testRoute);
app.use('/api/v1/user',userRoutes)

app.get('/', (req, res) => {
  return res.status(200).send('<h1>Welcome To Node Server</h1>');
});

// port
const PORT = process.env.PORT || 8080;

// listen

app.listen(PORT, () => {
  // console.log(colors.bgBlue("Server Running"));
  console.log(`Server Running On PORT ${process.env.PORT}`.bgCyan.white);
});
