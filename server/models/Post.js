import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      requred: true,
    },
    firstName: {
      type: String,
      requred: true,
    },
    lastName: {
      type: String,
      requred: true,
    },
    occupation: {
      type: String,
      requred: true,
    },
    location: {
      type: String,
      requred: true,
    },
    phoneNumber: {
      type: String,
      requred: true,
    },
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
