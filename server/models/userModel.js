import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: [true, 'email already taken'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      minLength: [6, 'password length greather then 6 character'],
    },
    address: {
      type: String,
      required: [true, 'address is required'],
    },
    city: {
      type: String,
      required: [true, 'city is required'],
    },
    country: {
      type: String,
      required: [true, 'country is required'],
    },
    phone: {
      type: String,
      required: [true, 'phone no is required '],
    },
    profilePic: {
      type: String,
    },
  },
  {timestamps: true},
);

// function
// hash function
userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

// compare function
userSchema.methods.comparePassword = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.password);
};

export const userModel = mongoose.model('Users', userSchema);
export default userModel;
