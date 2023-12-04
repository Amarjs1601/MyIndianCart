import userModel from '../models/userModel.js';
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
    const user = await userModel.create({
      name,
      email,
      password,
      address,
      city,
      country,
      phone,
    });
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
    res.status(200).send({
      success: true,
      message: 'Login Successfully',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: "false",
      message: 'Error In Login API',
      error,
    });
  }
};
