import userModel from '../models/userModel.js';
import router from '../routes/testRoutes.js';
import cloudinary from 'cloudinary';
import {getDataUri} from '../utils/features.js';
export const registerController = async (req, res) => {
  try {
    const {name, email, password, address, city, country, phone} = req.body;
    // validation
    if (
      !name ||
      !email ||
      !password ||
      !address ||
      !city ||
      !country ||
      !phone
    ) {
      return res.status(500).send({
        success: false,
        message: 'Please Provide All Fields',
      });
    }
    //  check existiing error
    const exisitingUser = await userModel.findOne({email});
    // validation

    if (exisitingUser) {
      return res.status(500).send({
        success: false,
        message: 'email already taken',
      });
    }
    // console.log(`${new Date().getSeconds()} new id date>>>>>>>>>>>>`);
    const user = await userModel.create({
      name,
      email,
      password,
      address,
      city,
      country,
      phone,
    });
    console.log({user});
    res.status(201).send({
      success: true,
      message: 'Registeration Success , please login',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in Register API',
      error,
    });
  }
};

// LOGIN

export const loginController = async (req, res) => {
  try {
    const {email, password} = req.body;
    // validation
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: 'Please Add Email OR Password',
      });
    }

    // check user
    const user = await userModel.findOne({email});
    // user validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'User Not Found',
      });
    }

    // check password
    const isMatch = await user.comparePassword(password);
    // validation password
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: 'invalid credential',
      });
    }
    // token
    const token = user.generateToken();
    res
      .status(200)
      .cookie('token', token, {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        secure: process.env.NODE_ENV === 'development' ? true : false,
        httpOnly: process.env.NODE_ENV === 'development' ? true : false,
        sameSite: process.env.NODE_ENV === 'development' ? true : false,
      })
      .send({
        success: true,
        message: 'Login Successfully',
        token,
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: 'false',
      message: 'Error In Login API',
      error,
    });
  }
};

// GET USER PROFILE

export const getUserProfileController = async (req, res) => {
  try {
    console.log({user: req.user});
    const user = await userModel.findById(req.users.id);
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: 'User Profile Fetched Successfully',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error In Profile API',
      error,
    });
  }
};

// LOGOUT

export const logoutController = async (req, res) => {
  try {
    res
      .status(200)
      .cookie('token', '', {
        expires: new Date(Date.now()),
        secure: process.env.NODE_ENV === 'development' ? true : false,
        httpOnly: process.env.NODE_ENV === 'development' ? true : false,
        sameSite: process.env.NODE_ENV === 'development' ? true : false,
      })
      .send({
        success: true,
        message: 'Logout Successfully',
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error In Logout API',
      error,
    });
  }
};

// update profile

export const updateProfileController = async (req, res) => {
  try {
    console.log({id: req.user});
    const user = await userModel.findById(req.user.id);
    const {name, email, address, city, country, phone} = req.body;

    // validation + update
    if (name) user.name = name;
    if (email) user.email = email;
    if (address) user.address = address;
    if (city) user.city = city;
    if (country) user.country = country;
    if (phone) user.phone = phone;

    // save user
    await user.save();
    res.status(200).send({
      success: true,
      message: 'User Profile Updated',
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error In Update Profile API',
      error,
    });
  }
};

// user update password controller
export const udpatePasswordController = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id);
    const {oldPassword, newPassword} = req.body;
    //valdiation
    if (!oldPassword || !newPassword) {
      return res.status(500).send({
        success: false,
        message: 'Please provide old or new password',
      });
    }
    // old pass check
    const isMatch = await user.comparePassword(oldPassword);
    // validation
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: 'Invalid Old Password',
      });
    }
    user.password = newPassword;
    await user.save();
    res.status(200).send({
      success: true,
      message: 'Password Updated Successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error In update password API',
      error,
    });
  }
};

// update user profile photo
export const updateProfilePicController = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id);
    // file get from client photo
    const file = getDataUri(req.file);
    // delete previous image
    await cloudinary.v2.uploader.destroy(user.profilePic.public_id);
    //update
    const cdb = await cloudinary.v2.uploader.upload(file.content);
    user.profilePic = {
      public_id: cdb.public_id,
      url: cdb.secure_url
    };
    // save user
    await user.save();

    res.status(200).send({
      success: true,
      message: 'profile picture updated',
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error In update profile pic API',
      error,
    });
  }
};
