// GET ALL PRODUCTS

import productModel from '../models/productModel.js';
import cloudinary from 'cloudinary';
import {getDataUri} from '../utils/features.js';

export const getAllProductController = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).send({
      success: true,
      message: 'all products fetched successfully',
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error In Get All Products API',
    });
  }
};

// GET SINGLE PRODUCT
export const getSingleProductController = async (req, res) => {
  try {
    // get product id
    const product = await productModel.findById(req.params.id);

    // validation
    if (!product) {
      return res.status(404).send({
        success: false,
        message: 'product not found',
      });
    }
    res.status(200).send({
      success: true,
      message: 'Product Found',
      product,
    });
  } catch (error) {
    console.log(error);

    // cast error || oblectid
    if (error.name === 'CastError') {
      return res.status(500).send({
        success: false,
        message: 'Invalid Id',
      });
    }
    res.status(500).send({
      success: false,
      message: 'Error In Get Products Id  API',
    });
  }
};

// CREATE PRODUCT

export const createProductController = async (req, res) => {
  try {
    const {name, description, price, category, stock} = req.body;
    // validation
    // if (!name || !description || !price || !stock) {
    //   return res.status(500).send({
    //     success: false,
    //     message: 'Please Provide All details',
    //   });
    // }

    if (!req.file) {
      return res.status(500).send({
        success: false,
        message: 'please provide product images',
      });
    }
    const file = getDataUri(req.file);
    const cdb = await cloudinary.v2.uploader.upload(file.content);
    const image = {
      public_id: cdb.public_id,
      url: cdb.secure_url,
    };

    await productModel.create({
      name,
      description,
      price,
      category,
      stock,
      images: [image],
    });

    res.status(201).send({
      success: true,
      message: 'product created successfully',
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: 'Error In Get Products Id  API',
    });
  }
};

// Update Product Controlller
export const updateProductController = async (req, res) => {
  try {
    // find product
    const product = await productModel.findById(req.params.id);
    // validation
    if (!product) {
      res.status(404).send({
        success: false,
        message: 'Product Not Found',
      });
    }
    const {name, description, price, stock, category} = req.body;
    // validate and update
    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (stock) product.stock = stock;
    if (category) product.category = category;

    await product.save();
    res.status(200).send({
      success: true,
      message: 'product details updated',
    });
  } catch (error) {
    console.log(error);
    // cast error || oblectid
    if (error.name === 'CastError') {
      return res.status(500).send({
        success: false,
        message: 'Invalid Id',
      });
    }
    res.status(500).send({
      success: false,
      message: 'Error In Get Update Product API',
    });
  }
};

//  UPDATE PRODUCT IMAGE
export const updateProductImageController = async (req, res) => {
   
    try {
      // find product
      const product = await productModel.findById(req.params.id);
      // valdiation
      if (!product) {
        return res.status(404).send({
          success: false,
          message: "Product not found",
        });
      }
      // check file
      if (!req.file) {
        return res.status(404).send({
          success: false,
          message: "Product image not found",
        });
      }
  
      const file = getDataUri(req.file);
      const cdb = await cloudinary.v2.uploader.upload(file.content);
      const image = {
        public_id: cdb.public_id,
        url: cdb.secure_url,
      };
      // save
      product.images.push(image);
      await product.save();
      res.status(200).send({
        success: true,
        message: "product image updated",
      });
    } catch (error) {
      console.log(error);
      // cast error ||  OBJECT ID
      if (error.name === "CastError") {
        return res.status(500).send({
          success: false,
          message: "Invalid Id",
        });
      }
      res.status(500).send({
        success: false,
        message: "Error In Get UPDATE Products API",
        error,
      });
    }
  };