import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      min: 4,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    occupation: {
      type: String,
      required: true,
      min: 3,
    },
    location: {
      type: String,
      required: true,
      min: 3,
    },
    phoneNumber: {
      type: Number,
      required: true,
      min: 11,
      unique: true,
    },
    picturePath: {
      type: String,
      default: "",
    },
    connections: {
      type: Array,
      default: [],
    },

    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
