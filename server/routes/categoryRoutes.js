import express from 'express';
import {isAuth} from '../middlewares/authMiddleware.js';
import {singleUpload} from '../middlewares/multer.js';
import {
  createCategory,
  deleteCategoryController,
  getAllCategoriesController,
  updateCategoryController,
} from '../controllers/categoryController.js';

const router = express.Router();

// routes
// --------------- CATEGORY ROUTES --------------------
router.get('/create', isAuth, createCategory);

// GET ALL CATEGORY

router.get('/get-all', getAllCategoriesController);

// GET ALL CATEGORY
router.delete('/delete/:id', isAuth, deleteCategoryController);

// UPDATE ALL CATEGORY
router.put('/update/:id', isAuth, updateCategoryController);

export default router;
