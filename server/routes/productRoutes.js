import express from 'express';
import {
  createProductController,
  deleteProductController,
  deleteProductImageController,
  getAllProductController,
  getSingleProductController,
  updateProductController,
  updateProductImageController,
} from '../controllers/productController.js';
import {isAuth} from '../middlewares/authMiddleware.js';
import {singleUpload} from '../middlewares/multer.js';

const router = express.Router();

// routes
router.get('/get-all', getAllProductController);

//GET SINGLE-PRODUCT
router.get('/:id', getSingleProductController);

// CREATE PRODUCT
router.post('/create', isAuth, singleUpload, createProductController);

// UPDATE PRODUCT
router.put('/:id', updateProductController);

// UPDATE Product Image
router.put('/image/:id', isAuth, singleUpload, updateProductImageController);

// DELETE PRODUCT IMAGE
router.delete('/delete-image/:id', isAuth, deleteProductImageController);

// DELETE PRODUCT ROUTES
router.delete('/delete/:id', isAuth, deleteProductController);

export default router;
