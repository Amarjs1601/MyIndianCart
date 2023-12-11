import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import cloudinary from 'cloudinary';

// dot env config
dotenv.config();

// database connection
connectDB();

// clodinary config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// rest object

const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// route
// routes imports
import testRoute from '../server/routes/testRoutes.js';
import userRoutes from '../server/routes/userRoutes.js';
import productRoutes from '../server/routes/productRoutes.js';
import categoryRoutes from '../server/routes/categoryRoutes.js';
import orderRoutes from '../server/routes/orderRoutes.js';
app.use('/api/v1', testRoute);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/order', orderRoutes);

app.get('/', (req, res) => {
  return res.status(200).send('<h1>Welcome To Node Server</h1>');
});

// port
const PORT = process.env.PORT || 8080;

// listen

app.listen(PORT, () => {
  // console.log(colors.bgBlue("Server Running"));
  console.log(
    `Server Running On PORT ${process.env.PORT} on ${process.env.NODE_ENV} Mode`
      .bgCyan.white,
  );
});
